module.exports = function drawWink(ctx) {
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(16,0);
  ctx.lineTo(16,17);
  ctx.lineTo(0,17);
  ctx.closePath();
  ctx.clip();
  ctx.translate(0,0);
  ctx.translate(0,0);
  ctx.scale(1,1);
  ctx.translate(0,0);
  ctx.strokeStyle = 'rgba(0,0,0,0)';
  ctx.lineCap = 'butt';
  ctx.lineJoin = 'miter';
  ctx.miterLimit = 4;
  ctx.save();
  ctx.fillStyle = "#ffdf40";
  ctx.beginPath();
  ctx.arc(7.7441,7.74507,7.7441,0,6.283185307179586,true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(10.7264,7.3192,2.22643,0,6.283185307179586,true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#143441";
  ctx.beginPath();
  ctx.arc(10.7361,7.32891,1.01641,0,6.283185307179586,true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#66342d";
  ctx.beginPath();
  ctx.moveTo(7.74399,14.0992);
  ctx.bezierCurveTo(10.2567,14.0992,12.2936,12.3125,12.2936,10.3584);
  ctx.bezierCurveTo(12.2936,10.3584,10.662,10.9663,7.74399,10.9663);
  ctx.bezierCurveTo(4.82594,10.9663,3.19434,10.3584,3.19434,10.3584);
  ctx.bezierCurveTo(3.19434,12.3125,5.23129,14.0992,7.74399,14.0992);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ea676c";
  ctx.beginPath();
  ctx.moveTo(9.80764,13.9382);
  ctx.bezierCurveTo(9.80764,15.0773,8.88422,16.0007,7.74513,16.0007);
  ctx.bezierCurveTo(6.60604,16.0007,5.68262,15.0773,5.68262,13.9382);
  ctx.lineTo(5.68262,11.5117);
  ctx.lineTo(9.80764,11.5117);
  ctx.lineTo(9.80764,13.9382);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#66342d";
  ctx.beginPath();
  ctx.moveTo(5.78595,7.96013);
  ctx.bezierCurveTo(5.08541,7.36843,4.07442,7.35618,3.30148,7.96952);
  ctx.bezierCurveTo(3.09208,8.13568,2.78764,8.10062,2.62148,7.89123);
  ctx.bezierCurveTo(2.45533,7.68183,2.49038,7.37739,2.69977,7.21123);
  ctx.bezierCurveTo(3.81364,6.32737,5.33856,6.31513,6.41058,7.22062);
  ctx.bezierCurveTo(6.61479,7.39311,6.64051,7.69848,6.46802,7.90269);
  ctx.bezierCurveTo(6.29554,8.1069,5.99016,8.13262,5.78595,7.96013);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.restore();
};
