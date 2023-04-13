
const canvas=document.getElementById("canvas");
canvas.width=innerWidth;
canvas.height=600;
const ctx=canvas.getContext("2d");
ctx.fillStyle="red";
    ctx.fillRect(50,60,100,200)
    ctx.strokeRect(200,60,100,200);
function draw(event){
    // console.log(event);
    ctx.clearRect(50,60,50,200);
}