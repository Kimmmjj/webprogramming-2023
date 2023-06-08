  function changeImage(direction) {
    const image = document.querySelector("#projects .category .image img");
    const images = ["./css/image/page1.png", "./css/image/page2.png", "./css/image/page3.png","./css/image/page4.png","./css/image/page5.png"];
    const currentIndex = images.indexOf(image.getAttribute("src"));
    let nextIndex;

    if (direction === 0) {
      // 이전 버튼 클릭 시
      nextIndex = currentIndex - 1;
      if (nextIndex < 0) {
        nextIndex = images.length - 1;
      }
    } else if (direction === 1) {
      // 다음 버튼 클릭 시
      nextIndex = currentIndex + 1;
      if (nextIndex >= images.length) {
        nextIndex = 0;
      }
    }

    image.setAttribute("src", images[nextIndex]);
  }




  // 폼 유효성 검사 함수
  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // 각 필드에 대한 유효성 검사
    if (name === "" || email === "" || message === "") {
      alert("모든 필드를 채워주세요.");
      return false;
    }

    // 이메일 유효성 검사 (간단한 형식 확인)
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("유효한 이메일 주소를 입력해주세요.");
      return false;
    }

    return true; // 유효성 검사 통과
  }

  // Send 버튼 클릭 이벤트 리스너
  document.querySelector("#contact button[type='submit']").addEventListener("click", function(event) {
    event.preventDefault(); // 클릭 기본 동작 방지

    if (validateForm()) {
      // 유효성 검사 통과 시 메시지 확인 대화상자 표시
      var confirmationMessage = "메시지가 성공적으로 전송되었습니다.";
      alert(confirmationMessage);
      // 여기서 실제로 데이터를 저장하거나 전송할 수 있습니다.
      // 예를 들어, 서버로 데이터를 전송하거나 데이터베이스에 저장할 수 있습니다.

      // 폼 초기화
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }
  });




  window.addEventListener("scroll", function() {
    var scrollToTopButton = document.getElementById("scrollToTopButton");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  document.getElementById("scrollToTopButton").addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
