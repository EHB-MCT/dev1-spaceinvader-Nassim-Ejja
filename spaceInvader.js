"use strict";

let canvas=document.getElementById("canvas");
canvas.width=window.innerHeight;
canvas.heigth=window.innerWidth;
let context=canvas.getContext("2d");


drawline();

function drawline(){
    
    context.beginPath();
    context.rect(200, 10, 120, 20);
    context.strokeStyle = "lime";
    context.fillStyle = "lime";
    context.fill();

    context.beginPath();
    context.rect(50, 30, 270, 20);
    context.strokeStyle = "lime";
    context.fillStyle = "lime";
    context.fill();

    context.beginPath();
    context.rect(460, 10, 120, 20);
    context.strokeStyle = "lime";
    context.fillStyle = "lime";
    context.fill();

    context.beginPath();
    context.rect(460, 30, 290, 20);
    context.strokeStyle = "lime";
    context.fillStyle = "lime";
    context.fill();

    context.beginPath();
    context.rect(320, 50, 140, 20);
    context.strokeStyle = "lime";
    context.fillStyle = "lime";
    context.fill();

    context.beginPath();
    context.rect(165, 70, 450, 45);
    context.strokeStyle = "lime";
    context.stroke();
    context.fillStyle = "lime";
    context.fill();

    
}

