!function(n){function e(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};return e.m=n,e.c=o,e.i=function(n){return n},e.d=function(n,o,t){e.o(n,o)||Object.defineProperty(n,o,{configurable:!1,enumerable:!0,get:t})},e.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(o,"a",o),o},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=1177)}({1173:function(n,e,o){"use strict";chrome.devtools.panels.create("Storyboard",null,"devPanel.html",function(n){n.onShown.addListener(function(){console.log("Storyboard panel shown")}),n.onHidden.addListener(function(){console.log("Storyboard panel hidden")})})},1177:function(n,e,o){n.exports=o(1173)}});