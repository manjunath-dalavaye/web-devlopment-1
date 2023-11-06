// selecting the second id by the target id
const targetElement = document.querySelector("#target");

const colorsParent = document.querySelector("#colors");
// by means of selecting by the one color , we directly chose
// the main id i.e  colors
colorsParent.addEventListener("click", (e) => {
  // console.log(e.target); //it will print the what color did you chosen and id
  if (e.target.id === "colors") return;
  targetElement.style.background = e.target.id;
  targetElement.textContent = `Selected Color: ${e.target.id}`;
});
