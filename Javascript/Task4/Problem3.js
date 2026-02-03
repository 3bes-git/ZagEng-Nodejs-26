let images = ["img1.jpg","img2.jpg","img3.jpg" ];
  
  let index = 0;
  let img = document.getElementById("slider");
  
  img.src = images[index];
  
  function nextImage() {
    index++;
  
    if (index === images.length) {
      index = 0;
    }
  
    img.src = images[index];
  }
  
  function prevImage() {
    index--;
  
    if (index < 0) {
      index = images.length - 1;
    }
  
    img.src = images[index];
  }
  
  function resetImage() {
    index = 0;
    img.src = images[index];
  }