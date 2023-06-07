// var images = ["./css/image/page1.png", "./css/image/page2.png", "./css/image/page3.png"]; // 이미지 배열
// var currentIndex = 0; // 현재 이미지 인덱스
//
// function changeImage(index) {
//   currentIndex += index; // 인덱스 변경
//   if (currentIndex < 0) {
//     currentIndex = images.length - 1; // 처음 이미지로 이동
//   } else if (currentIndex >= images.length) {
//     currentIndex = 0; // 마지막 이미지로 이동
//   }
//   var image = document.getElementById("project-image");
//   image.src = images[currentIndex]; // 이미지 변경
// }
var images = ["./css/image/page1.png", "./css/image/page2.png", "./css/image/page3.png"]; // 이미지 배열
var currentIndex = 0; // 현재 이미지 인덱스

function changeImage(index) {
  currentIndex += index; // 인덱스 변경
  if (currentIndex < 0) {
    currentIndex = images.length - 1; // 처음 이미지로 이동
  } else if (currentIndex >= images.length) {
    currentIndex = 0; // 마지막 이미지로 이동
  }
  var image = document.getElementById("project-image");
  image.src = images[currentIndex]; // 이미지 변경
}

document.addEventListener("DOMContentLoaded", function() {
  var prevButton = document.querySelector(".prev img");
  var nextButton = document.querySelector(".next img");

  prevButton.addEventListener("click", function() {
    changeImage(-1); // 이전 이미지로 변경
  });

  nextButton.addEventListener("click", function() {
    changeImage(1); // 다음 이미지로 변경
  });
});
