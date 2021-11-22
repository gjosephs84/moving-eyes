function changeColor(colorButton) {
    let irisColor = colorButton
    let leftIris = document.getElementById("left-pupil-and-iris");
    let rightIris = document.getElementById("right-pupil-and-iris");
    leftIris.style.borderColor = irisColor;
    rightIris.style.borderColor = irisColor;
}

var balls = document.getElementsByClassName("ball");
    document.onmousemove = () => {
      var x = (event.clientX * 100) / window.innerWidth + "%";
      var y = (event.clientY * 100) / window.innerHeight + "%";

      for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";
      }
    };