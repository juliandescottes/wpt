// DO NOT EDIT! This test has been generated by /offscreen-canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.line.width.basic
// Description:lineWidth determines the width of line strokes
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("lineWidth determines the width of line strokes");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.lineWidth = 20;
// Draw a green line over a red box, to check the line is not too small
ctx.fillStyle = '#f00';
ctx.strokeStyle = '#0f0';
ctx.fillRect(15, 15, 20, 20);
ctx.beginPath();
ctx.moveTo(25, 15);
ctx.lineTo(25, 35);
ctx.stroke();
// Draw a green box over a red line, to check the line is not too large
ctx.fillStyle = '#0f0';
ctx.strokeStyle = '#f00';
ctx.beginPath();
ctx.moveTo(75, 15);
ctx.lineTo(75, 35);
ctx.stroke();
ctx.fillRect(65, 15, 20, 20);
_assertPixel(offscreenCanvas, 14,25, 0,255,0,255, "14,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 15,25, 0,255,0,255, "15,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 16,25, 0,255,0,255, "16,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 25,25, 0,255,0,255, "25,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 34,25, 0,255,0,255, "34,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 35,25, 0,255,0,255, "35,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 36,25, 0,255,0,255, "36,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 64,25, 0,255,0,255, "64,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 65,25, 0,255,0,255, "65,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 66,25, 0,255,0,255, "66,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 84,25, 0,255,0,255, "84,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 85,25, 0,255,0,255, "85,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 86,25, 0,255,0,255, "86,25", "0,255,0,255");
t.done();

});
done();