// initial value
let count = 0;

// select value and buttons
const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");
// loop for btns
btns.forEach(function (btn) {
  // add event
  btn.addEventListener("click", function (e) {
    const num = e.currentTarget.classList;

    // add condition for count and text color
    if (num.contains("decrease")) {
      count--;
      value.style.color = "red";
    } else if (num.contains("increase")) {
      count++;
      value.style.color = "green";
    } else if (num.contains("reset")) {
      count = 0;
      value.style.color = "#222";
    }
    // show count number
    value.textContent = count;
  });
});
