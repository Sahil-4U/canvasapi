
const canvas=document.getElementById("canvas");
canvas.width=innerWidth;
canvas.height=innerHeight;
console.log('hi canvas'+ canvas)
const ctx=canvas.getContext("2d");
ctx.fillStyle="gold";




ctx.fillRect(100,400,700,200);
