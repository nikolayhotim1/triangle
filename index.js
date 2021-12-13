'use strict';
window.onload = function () {
    let canvas = document.getElementById('triangleCanvas');
    let context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(100, 150);
    context.lineTo(250, 75);
    context.lineTo(125, 30);
    context.closePath();
    context.lineWidth = 5;
    context.stroke();
    context.fillStyle = 'yellow';
    context.fill();
};