[![npm version](https://img.shields.io/npm/v/node-red-contrib-ui-multi-switch.svg?style=flat-square)](https://www.npmjs.com/package/node-red-contrib-ui-multi-switch?activeTab=versions)
[![npm](https://img.shields.io/npm/dt/node-red-contrib-ui-multi-switch.svg)](https://www.npmjs.com/package/node-red-contrib-ui-multi-switch)
[![npm downloads](https://img.shields.io/npm/dm/node-red-contrib-ui-multi-switch.svg?style=flat-square)](https://www.npmjs.com/package/node-red-contrib-ui-multi-switch)
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/badges/shields.svg)](https://github.com/SergiuToporjinschi/node-red-contrib-ui-multi-switch)
[![GitHub last commit](https://img.shields.io/github/last-commit/SergiuToporjinschi/node-red-contrib-ui-multi-switch.svg)](https://github.com/SergiuToporjinschi/node-red-contrib-ui-multi-switch/commits/master)
[![GitHub stars](https://img.shields.io/github/stars/SergiuToporjinschi/node-red-contrib-ui-multi-switch.svg)](https://github.com/SergiuToporjinschi/node-red-contrib-ui-multi-switch/stargazers)
[![GitHub watchers](https://img.shields.io/github/watchers/SergiuToporjinschi/node-red-contrib-ui-multi-switch.svg)](https://github.com/SergiuToporjinschi/node-red-contrib-ui-multi-switch/watchers)
[![GitHub license](https://img.shields.io/github/license/SergiuToporjinschi/node-red-contrib-ui-multi-switch.svg)](https://github.com/SergiuToporjinschi/node-red-contrib-ui-multi-switch/blob/master/LICENSE)

# node-red-contrib-ui-multi-switch

A dashboard ui interface for multiple checkboxes and buttons; 

The values of all checkbox are sent to output when the user pushes the button;
A button will allways output a message formed by values from all switch controls

## Properties
<h3>Properties</h3>
<dl class="message-properties">
	<dt>Type <span class="property-type">Switch/Button</span></dt>
	<dd>Type of control, Switch or Button</dd>
</dl>
<dl class="message-properties">
	<dt>key <span class="property-type">string</span></dt>
	<dd>A key in final object used to store the value of the switch</dd>
</dl>
<dl class="message-properties">
	<dt>Label <span class="property-type">html</span></dt>
	<dd>A text which is used as label for the switch/button; Label can contain HTML for adding an incon</dd>
</dl>
<dl class="message-properties">
    <dt>On payload<span class="property-type">typed input</span></dt>
    <dd>The value which will be send when the switch is ON</dd>
</dl>
<dl class="message-properties">
    <dt>Off payload<span class="property-type">typed input</span></dt>
    <dd>The value which will be send when the switch is OFF</dd>
</dl>
<dl class="message-properties">
    <dt>Reset values on push<span class="property-type">bool</span></dt>
    <dd>Will turn all the switches to Off after the message has been sent, if is checked</dd>
</dl>

## Changelog

### v0.0.1 (December 04, 2018)
* Initial commit;

## Testing schema
```

```
