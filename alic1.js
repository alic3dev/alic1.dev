const alic1 = () => {
  const element_canvas = document.getElementsByTagName("canvas")[0];

  if (!element_canvas) return;

  const context_canvas = element_canvas.getContext("2d");

  if (!context_canvas) return;

  const counts = {
    x: 10,
    y: 10,
  };

  const alic1draw = () => {
    element_canvas.width = window.innerWidth;
    element_canvas.height = window.innerHeight;

    context_canvas.clearRect(0, 0, element_canvas.width, element_canvas.height);

    context_canvas.fillStyle = "#000000";
    context_canvas.strokeStyle = "#000000";

    const size = {
      x: element_canvas.width / counts.x,
      y: element_canvas.height / counts.y,
    };

    context_canvas.font = `${Math.min(size.x, size.y)}px monospace`;
    context_canvas.textAlign = "center";
    context_canvas.textBaseline = "middle";

    const offset = {
      x: size.x / 2,
      y: size.y / 2,
    };

    for (let index_y = 0; index_y < counts.y; ++index_y) {
      const odd_y = index_y % 2;

      const offset_additional_x = (-size.x / 2) * odd_y;

      for (let index_x = 0; index_x < counts.x + odd_y; ++index_x) {
        context_canvas.moveTo(
          offset.x + size.x * index_x,
          offset.y + size.y * index_y
        );

        context_canvas.strokeText(
          "1",
          offset_additional_x + offset.x + size.x * index_x,
          offset.y + size.y * index_y,
          size.x
        );
      }
    }
    window.requestAnimationFrame(alic1draw);
  };

  alic1draw();
};

if (document.readyState === "complete") {
  alic1();
} else {
  document.addEventListener("DOMContentLoaded", alic1);
}
