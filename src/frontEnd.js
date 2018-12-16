'use strict';
module.exports.init = function (config) {
    var conf = JSON.stringify(config);
    function getCSS() {
        return String.raw`
        <style>
        </style>`;
    }
    function getHTML() {
        // return String.raw`
        // <div class='wrapper' layout="column" flex layout-align="center stretch" ng-init='init(${conf})'>
        //     <div layout="row" layout-align="end center" class="warning-icon">
        //         <span class="info" title="Current calendar temp" ng-show="msg.currentSchedule != undefined"><i class="fa fa-calendar-o" aria-hidden="true"></i>{{msg.currentSchedule.temp}}&deg;C ({{msg.currentSchedule.time}})</span>
        //         <span class="info" title="Next calendar temp" ng-show="msg.nextSchedule != undefined"><i class="fa fa-calendar-plus-o" aria-hidden="true"></i>{{msg.nextSchedule.temp}}&deg;C ({{msg.nextSchedule.time}})</span>
        //         <div flex></div>
        //         <i title="Calendar is missing" class="fa fa-calendar"  style="color:red" aria-hidden="true" ng-if="!config.calendar"></i>
        //         <i title="Current temperature is missing" class="fa fa-thermometer-empty"  style="color:red" aria-hidden="true" ng-if="!msg.currentTemp"></i>
        //     </div>
        //     <div layout="row" layout-align="center center" class="container">
        //         <div layout-align="start center" flex="20"><i ng-click='lockCustom()' ng-class="msg.isUserCustomLocked ? 'fa-lock' : 'fa-unlock-alt'" class="fa no-select" style="font-size: 2em; color:#0094ce"></i></div>
        //         <div layout="row" layout-align="center center" flex>
        //             <div layout-align="end center" layout="column">
        //                 <div title="Current target (user value or calendar). Double-click for reset." ng-class="{'user-mode': msg.isUserCustom}" class="temp no-select" md-swipe-left="toSchedule()" md-swipe-right="toSchedule()" ng-dblclick="toSchedule()">{{msg.targetValue | number:1}}&deg;C</div>
        //             </div>
        //             <div class='heaterContr' layout-align="center center" layout="column">
        //                 <div class="targetTemp" flex="50">{{msg.currentTemp | number:1}}</div>
        //                 <div layout-align="space-between" layout="row" flex="50">
        //                     <i title="Heater status" class="fa fa-fire icon" ng-class="msg.currentHeaterStatus == 'on' ? 'iconTrue' : 'iconFalse'" aria-hidden="true"></i>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div layout-align="center stretch" layout="column">
        //         <md-slider ng-disabled='!msg.targetValue || !msg.currentTemp' ng-change="sendVal()" class="md-primary" md-discrete ng-model="msg.userTargetValue" step="${config.sliderStep}" min="${config.sliderMinValue}" max="${config.sliderMaxValue}">
        //     </div>
        // </div>`;
    }

    function getController($scope, events) {
        debugger;
        $scope.init = function (config) {
            $scope.config = config;
        };

        $scope.sendVal = function () {
            $scope.send($scope.msg);
        };
    }

    return {
        getHTML: function () {
            return getCSS() + getHTML();
        },
        getController: getController
    };
};