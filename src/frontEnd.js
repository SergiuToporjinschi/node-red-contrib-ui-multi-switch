'use strict';
module.exports.init = function (config) {
    var conf = JSON.stringify(config);
    function getCSS() {
        return String.raw`
        <style>
        </style>`;
    }
    function getHTML() {
        return String.raw`
        <div class='wrapper' layout="column" flex layout-align="center stretch" ng-init='init(${conf})'>
            <div ng-repeat='item in items'> 
                <md-switch ng-if='item.type==="switch"' ng-click="switch(item)">
                    {{item.label}}
                </md-switch>
                <md-button ng-if='item.type==="button"' ng-click="buttonClick(item)">
                    {{item.label}}
                </md-button>
            </div>   
        </div>`;
    }

    function getController($scope, events) {
        $scope.init = function (config) {
            $scope.items = config.controls;
        };
        $scope.switch = function (item) {

        };
        $scope.getValues = function () {
            var values = [];
            return values;
        };
        $scope.resetValues = function () {

        };
        $scope.buttonClick = function (button) {
            debugger;
            var values = $scope.getValues();

            if (button.reset) {
                $scope.resetValues(values);
            }
            $scope.send({
                payload: {
                    button: button.key,
                    values: values
                }
            });
        };
    }

    return {
        getHTML: function () {
            return getCSS() + getHTML();
        },
        getController: getController
    };
};