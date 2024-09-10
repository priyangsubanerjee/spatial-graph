class Graph {
  constructor(points = [], segments = []) {
    this.points = points;
    this.segments = segments;
  }
  draw(context) {
    for (const seg of this.segments) {
      seg.draw(context);
    }

    for (const point of this.points) {
      point.draw(context);
    }
  }
}
