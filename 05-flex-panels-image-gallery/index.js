const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("mouseenter", (event) => {
    showFullPanel(event);
  });
  panel.addEventListener("mouseleave", (event) => {
    let current = event.target;
    current.classList.remove("open");
    current.classList.remove("open-active");
  });
});

function showFullPanel(event) {
  let current = event.target;
    console.log(current);
    current.classList.add("open");
    current.classList.add("open-active");
}
