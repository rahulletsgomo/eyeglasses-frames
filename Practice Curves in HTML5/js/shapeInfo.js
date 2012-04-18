//This page includes the javascript code for shape generation
function quadraticCurve(){
var c=document.getElementById("myCanvas");
var bottom=c.getContext("2d");
bottom.beginPath();
bottom.moveTo(100, 300);
bottom.bezierCurveTo(100, 40, 200, 40, 200, 300);
bottom.stroke();
}

//Global Varibales
/*
var canvas=document.getElementById("myCanvas");
context = canvas.getContext("2d");
context.lineWidth = 5;
context.strokeStyle = "#0000ff";

var topVariables = {"top":context, "xb1":600, "yb1": 200, "xb2":680, "yb2": 200, "xa1": 400, "ya1" : 200, "xa2": 480, "ya2" : 200,}
var bottomVariables = {"bottom":context, "xb1":600, "yb1": 250, "xb2":680, "yb2": 250, "xa1": 400, "ya1" : 250, "xa2": 480, "ya2" : 250,}
var leftVariables = {"left":context, "xb1":600, "yb1": 200, "xb2":600, "yb2": 250, "xa1": 400, "ya1" : 200, "xa2": 400, "ya2" : 250,}
var rightVariables = {"right":context, "xb1":680, "yb1": 200, "xb2":680, "yb2": 250, "xa1": 480, "ya1" : 200, "xa2": 480, "ya2" : 250,}
*/

var isMoved = false;

function line(moveInfo){

var canvas=document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.lineWidth = 5;
context.strokeStyle = "#0000ff";

var topVariables = {"top":context, "xb1":600, "yb1": 200, "xb2":680, "yb2": 200, "xa1": 400, "ya1" : 200, "xa2": 480, "ya2" : 200,}
var bottomVariables = {"bottom":context, "xb1":600, "yb1": 250, "xb2":680, "yb2": 250, "xa1": 400, "ya1" : 250, "xa2": 480, "ya2" : 250,}
var leftVariables = {"left":context, "xb1":600, "yb1": 200, "xb2":600, "yb2": 250, "xa1": 400, "ya1" : 200, "xa2": 400, "ya2" : 250,}
var rightVariables = {"right":context, "xb1":680, "yb1": 200, "xb2":680, "yb2": 250, "xa1": 480, "ya1" : 200, "xa2": 480, "ya2" : 250,}

if(moveInfo){
 context.strokeStyle = "#ffffff";
 topVariables.xa1 += moveInfo.count; 
 topVariables.ya1 += moveInfo.count;
 topVariables.xb1 += moveInfo.count;
 topVariables.yb1 += moveInfo.count;
 topVariables.xa2 += moveInfo.count;
 topVariables.ya2 += moveInfo.count;
 topVariables.xb2 += moveInfo.count;
 topVariables.yb2 += moveInfo.count;
 context.strokeStyle = "#0000ff";
 console.log("Information from the line function below " );
 console.log("Type : " + moveInfo.type + " Var : " + moveInfo.count);
 console.log("Coordinate Info");
 console.log(topVariables.xa1);
 console.log(topVariables.xa2);
 console.log(topVariables.xb1);
 console.log(topVariables.xb2);
}

setCoordinates(bottomVariables, leftVariables, rightVariables, topVariables);
}

function top(moveInfo){
 var message = (moveInfo > 0) ? "upwards" : "downwards"
 console.log("The top will move " +message+ " by "+moveInfo+" pixels");
 isMoved = true;
 var moveInfo = {"type" : "top", "count" : 5}
 line(moveInfo);
 }
 


function setCoordinates(bottomVariables, leftVariables, rightVariables, topVariables){
 topCoordinates(topVariables);
 bottomCoordinates(bottomVariables);
 leftCoordinates(leftVariables);
 rightCoordinates(rightVariables);
}

function topCoordinates(topVariables){
topVariables.top.moveTo(topVariables.xb1,topVariables.yb1);
topVariables.top.lineTo(topVariables.xb2,topVariables.yb2);
topVariables.top.moveTo(topVariables.xa1,topVariables.ya1);
topVariables.top.lineTo(topVariables.xa2,topVariables.ya2);
topVariables.top.stroke();
}

function bottomCoordinates(bottomVariables){
bottomVariables.bottom.moveTo(bottomVariables.xb1,bottomVariables.yb1);
bottomVariables.bottom.lineTo(bottomVariables.xb2,bottomVariables.yb2);
bottomVariables.bottom.moveTo(bottomVariables.xa1,bottomVariables.ya1);
bottomVariables.bottom.lineTo(bottomVariables.xa2,bottomVariables.ya2);
bottomVariables.bottom.stroke();
}

function leftCoordinates(leftVariables){
leftVariables.left.moveTo(leftVariables.xb1, leftVariables.yb1);
leftVariables.left.lineTo(leftVariables.xb2, leftVariables.yb2);
leftVariables.left.moveTo(leftVariables.xa1, leftVariables.ya1);
leftVariables.left.lineTo(leftVariables.xa2, leftVariables.ya2);
leftVariables.left.stroke();
}

function rightCoordinates(rightVariables){
rightVariables.right.moveTo(rightVariables.xb1, rightVariables.yb1);
rightVariables.right.lineTo(rightVariables.xb2, rightVariables.yb2);
rightVariables.right.moveTo(rightVariables.xa1, rightVariables.ya1);
rightVariables.right.lineTo(rightVariables.xa2, rightVariables.ya2);
rightVariables.right.stroke();
}