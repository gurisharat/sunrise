// Very cool sunrise

// Canvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;
let cloudImg = document.getElementById("cloud");

window.addEventListener("load", draw);

function draw() {
  // Sky
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Sun
  ctx.fillStyle = `red`;
  ctx.beginPath();
  ctx.arc(200, 295, 20, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Ground
  ctx.fillStyle = "green";
  ctx.fillRect(0, 300, cnv.width, cnv.height);

  // Cloud
  ctx.drawImage(cloudImg, 130, 80,100,100);
  ctx.drawImage(cloudImg, 160, 60,100,100);
}
