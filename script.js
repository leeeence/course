document.getElementById("outer3").addEventListener("click", toggleState3);
    
function toggleState3() {
  let galleryView = document.getElementById("galleryView")
  let tilesView = document.getElementById("tilesView")
  let outer = document.getElementById("outer3");
  let slider = document.getElementById("slider3");
  let tilesContainer = document.getElementById("tilesContainer");
  if (slider.classList.contains("active")) {
    slider.classList.remove("active");
    outer.classList.remove("outerActive");
    galleryView.style.display = "flex";
    tilesView.style.display = "none";
    
    while (tilesContainer.hasChildNodes()) {
      tilesContainer.removeChild(tilesContainer.firstChild)
      }  
  } else {
    slider.classList.add("active");
    outer.classList.add("outerActive");
    galleryView.style.display = "none";
    tilesView.style.display = "flex";
     
    for (let i = 0; i < imgObject.length - 1; i++) {
      let tileItem = document.createElement("div");
      tileItem.classList.add("tileItem");
      tileItem.style.background =  "url(" + imgObject[i] + ")";
      tileItem.style.backgroundSize = "contain";  
      tilesContainer.appendChild(tileItem);      
    }
  };
}

let imgObject = [
  "https://us.123rf.com/450wm/yayayoy/yayayoy1101/yayayoy110100038/8711244-.jpg",
  "https://m.media-amazon.com/images/I/71R24gCojiL._AC_SS450_.jpg",
  "https://us.123rf.com/450wm/graphicmall/graphicmall2011/graphicmall201100185/158139966-gradient-color-icon-for-emoji-face-.jpg?ver=6",
  "https://i.pinimg.com/736x/45/a5/c7/45a5c7ec09bd02c8450699d12978b3ec.jpg",
  "https://i.pinimg.com/originals/90/7b/c2/907bc2e1c4a7632a7bced22923bdf722.jpg",
  "https://i.pinimg.com/736x/90/7b/a6/907ba6f24ca0e53c986d5211c62d6f56.jpg",
  "https://avatars.githubusercontent.com/u/18160991?v=4",
  "https://i.pinimg.com/originals/a6/13/02/a613025c77c0591bc03543c14a5ddddf.png",
  "https://gigi.click/thumb.php?id=1356988",
  "https://i.pinimg.com/474x/a3/68/be/a368be16bf4c9dce05cfdc7af1c06c70.jpg?nii=t",
  "https://i.pinimg.com/474x/fb/7f/a9/fb7fa972516c09b368bf01e8fd2ae7f5--emoji-emoticons-emojis.jpg",
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {

  let mainView = document.getElementById("mainView");
  mainView.style.background = "url(" + imgObject[mainImg] + ")";

  let leftView = document.getElementById("leftView");
  leftView.style.background = "url(" + imgObject[prevImg] + ")";
  
  let rightView = document.getElementById("rightView");
  rightView.style.background = "url(" + imgObject[nextImg] + ")";
  
  let linkTag = document.getElementById("linkTag")
  linkTag.href = imgObject[mainImg];

};

function scrollRight() {
  
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= (imgObject.length -1)) {
    nextImg = 0;
  } else {
    nextImg++;
  }; 
  loadGallery();
};

function scrollLeft() {
  nextImg = mainImg
  mainImg = prevImg;
   
  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--;
  };
  loadGallery();
};

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener('keyup',function(e){
    if (e.keyCode === 37) {
    scrollLeft();
  } else if(e.keyCode === 39) {
    scrollRight();
  }
});

loadGallery();



