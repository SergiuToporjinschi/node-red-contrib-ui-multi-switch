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
        forwardInputMessages: false,
        storeFrontEndInputAsState: false,
        initController: frontEnd.getController,
        beforeSend: function () { return me.beforeSend.apply(me, arguments); }
    };
};
// beforeEmit: function () { return me.beforeEmit.apply(me, arguments); },

// backEndNode.prototype.beforeEmit = function (msg, value) {
//     if (this.allowedTopics.indexOf(msg.topic) < 0) { //if topic is not a safe one just trigger a refresh of UI
//         return { msg: storeKeyInContext(this.node) }; //return what I already have
//     }

//     var returnValues = storeKeyInContext(this.node, msg.topic, value);
//     if ('currentTemp' === msg.topic) {
//         returnValues.currentSchedule = getScheduleTemp(this.config.calendar);
//         returnValues.nextSchedule = getScheduleTemp(this.config.calendar, 1);
//         returnValues = recalculateAndTrigger(returnValues, this.config.thresholdRising, this.config.thresholdFalling, this.node);
//         this.node.send({ payload: returnValues });
//     }
//     return { msg: returnValues };
// };

backEndNode.prototype.beforeSend = function (msg, orig) {
    if (orig) {
        return orig.msg;
    }
};

module.exports = backEndNode;