$(document).ready(function () {
  // 상단으로 이동하는 버튼 클릭 이벤트
  var topButton = document.querySelector(".top-btn"); // 클래스 선택자를 사용하는 경우 querySelector를 사용합니다.
  if (topButton) {
    topButton.addEventListener("click", function (event) {
      event.preventDefault(); // 기본 이벤트를 취소합니다.
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 하단으로 이동하는 버튼 클릭 이벤트
  var bottomButton = document.querySelector(".bottom-btn"); // 클래스 선택자를 사용하는 경우 querySelector를 사용합니다.
  if (bottomButton) {
    bottomButton.addEventListener("click", function (event) {
      event.preventDefault(); // 기본 이벤트를 취소합니다.
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    });
  }
  // 상단메뉴
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    var navbar = document.querySelector(".fixed-nav-wrap");
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      navbar.style.visibility = "visible";
    } else {
      navbar.style.visibility = "hidden";
    }
  }
  $(document).ready(function () {
    // 이미지 경로를 저장하는 객체
    var imagePaths = {
      "SUITE CINEMA": "images/호텔컨셉.png",
      "CINE & LIVINGROOM": "images/신개념.png",
      "4DX": "images/모션시트.png",
      "CINE de CHEF": "images/쉐프있음.png",
    };

    $(".specialhall-list li").on("mouseover", function () {
      // 메뉴 아이템의 이름을 가져옴
      var itemName = $(this).find("strong").text();

      // 이미지 경로를 가져옴
      var imgSrc = imagePaths[itemName];

      // 이미지를 변경함
      $(".specialhall-content img").attr("src", imgSrc);
    });
  });
  var swiper = new Swiper(".movieSwiper", {
    direction: "horizontal",
    // loop:true,
    slidesPerView: 5,
    spaceBetween: 30,
    // navigation
    navigation: {
      nextEl: ".controls .next",
      prevEl: ".controls .prev",
    },
    // breakpoints:{
    //     // 320 이상일때
    //     320:{
    //         slidesPerView:1,
    //     },
    //     // 480 이상일때
    //     480:{
    //         slidesPerView:2,
    //         spaceBetween: 30,
    //     },
    //     // 768 이상일때
    //     768:{
    //         slidesPerView:5,
    //         // spaceBetween: 30,
    //     },
    // }
  });
});
