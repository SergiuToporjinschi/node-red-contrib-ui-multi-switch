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
                <md-switch ng-if='item.type==="switch"' ng-model="item.val" ng-swipe-right="$event.stopPropagation();" ng-swipe-left="$event.stopPropagation();" aria-label="item.label">
                    <ng-bind-html ng-bind-html="item.label"></ng-bind-html>
                </md-switch>
                <md-button ng-if='item.type==="button"' ng-click="buttonClick(item)" aria-label="item.label">
                    <ng-bind-html ng-bind-html="item.label"></ng-bind-html>
                </md-button>
            </div>   
        </div>`;
    }

    function getController($scope, events) {
        $scope.init = function (config) {
            $scope.items = $scope.resetSwitch(config.controls);
        };
        $scope.resetSwitch = function (items) {
            for (var i in items) {
                var item = items[i];
                if (item.type === 'switch') {
                    item.val = false;
                }
            }
            return items;
        }
        $scope.parseValue = function (val, type) {
            switch (type) {
                case 'str':
                case 'num': return val;
                case 'bool': return "true" === val.trim().toLocaleLowerCase();
                case 'json': return JSON.parse(val);
                case 'bin': return eval(val);
                case 'date': return Date.now();
                case 'flow':
                case 'global': return {
                    context: true,
                    type: type,
                    key: val
                };
            }
        }
        $scope.getSendValue = function (item) {
            if (item.val) {
                return $scope.parseValue(item.onVal, item.onValType);
            } else {
                return $scope.parseValue(item.offVal, item.offValType);
            }
        }
        $scope.getValues = function () {
            var outObj = {};
            for (var i in $scope.items) {
                var item = $scope.items[i];
                if (item.type === 'switch') {
                    outObj[item.key] = $scope.getSendValue(item);
                }
            }
            return outObj;
        };
        $scope.buttonClick = function (button) {
            var values = $scope.getValues();

            if (button.reset) {
                $scope.items = $scope.resetSwitch($scope.items);
            }
            values.button = button.key;
            $scope.send({
                payload: values
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