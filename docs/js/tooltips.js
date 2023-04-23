window.onload = function () {
  //  js file
  let toolTip = document.getElementById("tooltip");
  let copy = document.getElementById("copy");
  let ttImages = document.getElementsByClassName("tt-image");

  const track = () => {
    //  run function on mouse move
    let mouseX = event.clientX + document.body.scrollLeft + 1; //  get x position of mouse
    let mouseY = event.clientY + document.body.scrollTop - 40; //  get y position of mouse
    toolTip.setAttribute(
      "style",
      "top:" + mouseY + "px; left:" + mouseX + "px;"
    ); //  set the x and y of tooltip based on mouse position
  };
  window.addEventListener("mousemove", track); //  listen for mouse movement

  const showTt = (e) => {
    if (e.target.tagName === "SPAN") {
      //  test if hovered element is a span
      toolTip.setAttribute("class", "show"); //  show the tooltip
      let ttImage = e.target.dataset.img; //  get the data attribute of hovered span
      toolTip.innerHTML = '<img src="' + ttImage + '">'; //  populate the tooltip with an image tag + retrieved data attribute
    } else {
      toolTip.setAttribute("class", ""); //  hide the tooltip
    }
  };
  copy.addEventListener("mouseover", showTt); //  copy hover function

  //  preload the images

  let allCities = [];
  let cities = [];

  for (let i = 0; i < ttImages.length; i++) {
    allCities.push(ttImages[i].dataset.img); //  build array of img urls
  }

  for (let i = 0; i < allCities.length; i++) {
    //  loop through the cities array
    cities[i] = new Image();
    cities[i].src = allCities[i];
  }
};
