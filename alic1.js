function alic1() {
  const element_canvas = document.getElementsByTagName("canvas")[0];

  const context_canvas = element_canvas.getContext("2d");

  const data_image = context_canvas.createImageData(
    element_canvas.width,
    element_canvas.height
  );

  function alic1_frame_animation(time) {
    context_canvas.clearRect(0, 0, element_canvas.width, element_canvas.height);

    for (let i = 0; i < data_image.data.length; ++i) {
      data_image.data[i] =
        i % 2 == 0
          ? Math.sin(time + i) * 124 + 124
          : Math.abs(Math.sin(time + i) * 255);
    }

    context_canvas.putImageData(data_image, 0, 0);

    context_canvas.fillStyle = "#ff00ff";

    context_canvas.beginPath();
    context_canvas.ellipse(40, 40, 30, 30, Math.PI / 4, 0, 2 * Math.PI);
    context_canvas.closePath();
    context_canvas.fill();

    context_canvas.beginPath();
    context_canvas.ellipse(
      element_canvas.width - 40,
      40,
      30,
      30,
      Math.PI / 4,
      0,
      2 * Math.PI
    );
    context_canvas.closePath();
    context_canvas.fill();

    context_canvas.fillStyle = "#FFFF00";
    context_canvas.beginPath();
    context_canvas.ellipse(
      element_canvas.width / 2,
      element_canvas.height / 2,
      20,
      20,
      Math.PI / 4,
      0,
      2 * Math.PI
    );
    context_canvas.closePath();
    context_canvas.fill();

    const gradient_linear = context_canvas.createLinearGradient(
      0,
      element_canvas.height / 2 - 5,
      element_canvas.width,
      5
    );

    gradient_linear.addColorStop(0, "#FF0000");
    gradient_linear.addColorStop(0.5, "#FFFF00");
    gradient_linear.addColorStop(1, "#00FF00");

    context_canvas.fillStyle = gradient_linear;
    context_canvas.beginPath();
    context_canvas.rect(
      0,
      element_canvas.height / 2 - 5,
      element_canvas.width,
      5
    );
    context_canvas.closePath();
    context_canvas.fill();

    const gradient_linear_second = context_canvas.createLinearGradient(
      0,
      element_canvas.height / 2 - 5,
      element_canvas.width,
      5
    );

    gradient_linear_second.addColorStop(0, "#00FFff");
    gradient_linear_second.addColorStop(1, "#FF00FF");

    context_canvas.fillStyle = gradient_linear_second;
    context_canvas.beginPath();
    context_canvas.moveTo(0, element_canvas.height - 5);
    context_canvas.lineTo(element_canvas.width - 5, 0);
    context_canvas.lineTo(element_canvas.width - 5, -100);
    context_canvas.lineTo(element_canvas.width, -100);
    context_canvas.lineTo(element_canvas.width, 5);
    context_canvas.lineTo(5, element_canvas.height);
    context_canvas.lineTo(5, element_canvas.height + 100);
    context_canvas.lineTo(-100, element_canvas.height + 100);
    context_canvas.closePath();
    context_canvas.fill();

    context_canvas.fillStyle = "#00FFff";
    context_canvas.beginPath();
    context_canvas.ellipse(
      20,
      element_canvas.height - 20,
      10,
      10,
      Math.PI / 4,
      0,
      2 * Math.PI
    );
    context_canvas.closePath();
    context_canvas.fill();

    context_canvas.beginPath();
    context_canvas.ellipse(
      element_canvas.width - 20,
      element_canvas.height - 20,
      10,
      10,
      Math.PI / 4,
      0,
      2 * Math.PI
    );
    context_canvas.closePath();
    context_canvas.fill();

    window.requestAnimationFrame(alic1_frame_animation);
  }
  window.requestAnimationFrame(alic1_frame_animation);
}

if (document.readyState != "loading") {
  alic1();
} else {
  document.addEventListener("DOMContentLoaded", alic1);
}
