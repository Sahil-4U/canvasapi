
const canvas=document.getElementById("canvas");
canvas.width=innerWidth;
canvas.height=600;
const ctx=canvas.getContext("2d");
    // ctx.fillStyle="red";
    // ctx.strokeStyle="blue"
    // ctx.fillRect(50,60,100,200)
    // ctx.strokeRect(200,60,100,200);
function draw(event){
    // console.log(event);
    ctx.clearRect(50,60,50,200);
    ctx.clearRect(200,60,100,200);
    ctx.strokeStyle="green";
    ctx.strokeRect(310,60,100,200);
    
}
function drawPaths(){
    ctx.beginPath();
  ctx.moveTo(100,100);
  ctx.lineTo(150,50);
  ctx.lineTo(150,180);
  ctx.fill();
}