let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 20;

let point1 = new Point(100, 100);
let point2 = new Point(200, 800);
let point3 = new Point(600, 600);
let point4 = new Point(600, 200);

let segment1 = new Segment(point1, point2);
let segment2 = new Segment(point2, point3);
let segment3 = new Segment(point1, point3);
let segment4 = new Segment(point3, point4);

let graph = new Graph(
  [point1, point2, point3, point4],
  [segment1, segment2, segment3, segment4]
);
graph.draw(context);
