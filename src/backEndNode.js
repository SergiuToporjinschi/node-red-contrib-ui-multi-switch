'use strict';
function backEndNode(node, config) {
    this.node = node;
    this.config = config;
}
backEndNode.prototype.getAdaptedConfig = function () {
    return this.config;
};
backEndNode.prototype.getWidget = function () {
    var frontEnd = require('./frontEnd').init(this.config);
    var html = frontEnd.getHTML();
    var me = this;
    return {
        format: html,
        templateScope: "local",
        emitOnlyNewValues: false,
        forwardInput0Messages: false,
        storeFrontEndInputAsState: false,
        initController: frontEnd.getController,
        beforeSend: function () { return me.beforeSend.apply(me, arguments); }
    };
};

backEndNode.prototype.beforeSend = function (msg, orig) {
    if (orig) {
        for (var i in Object.keys(orig.msg.payload)) {
            var key = Object.keys(orig.msg.payload)[i];
            var item = orig.msg.payload[key];
            if (item.hasOwnProperty("context")) {
                if (item.type === 'global') {
                    orig.msg.payload[key] = this.node.context().global.get(item.key);
                } else if (item.type === 'flow') {
                    orig.msg.payload[key] = this.node.context().flow.get(item.key);
                }
            }
        }
        orig.msg.topic = this.config.topic;
        return orig.msg;
    }
};

module.exports = backEndNode;