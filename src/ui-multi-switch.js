module.exports = function (RED) {
    'use strict';
    var ui = undefined;
    function getNode(config) {
        try {
            var node = this;
            if (ui === undefined) {
                ui = RED.require("node-red-dashboard")(RED);
            }
            RED.nodes.createNode(this, config);
            //initialize backEnd module
            var done = null;
            try {
                var BackEndNode = require('./backEndNode.js');
                var backModule = new BackEndNode(node, config, RED);
                node.config = backModule.getAdaptedConfig();
                done = ui.addWidget(Object.assign({
                    node: node,
                    width: parseInt(config.width),
                    height: parseInt(config.height),
                    group: config.group,
                    order: config.order || 0
                }, backModule.getWidget()));
            } catch (error) {
                node.error(error);
                throw error;
            }
        } catch (e) {
            console.log(e);
        }
        node.on("close", function () {
            if (done) {
                done();
            }
        });
    }
    RED.nodes.registerType('ui-multi-switch', getNode);
};