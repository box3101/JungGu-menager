(function () {

  window.onload = () => {
    eventBinding();
  }

  // 함수모음
  const eventBinding = () => {
    comPopup();
    comInputNumber();
  }

  // 공통 레이어 팝업
  const comPopup = () => {

    const $$comPopupWrap = document.querySelectorAll(".comPopupWrap");
    const $$modalBtn = document.querySelectorAll(".modalBtn");
    const $$closeBtn = document.querySelectorAll(".popClose");
    const $$comPopContainer = document.querySelectorAll(".comPopupContainer");

    // open popup
    $$modalBtn.forEach((el) => {
      el.addEventListener("click", () => {
        openPop(el);
      });
    });

    // close popup
    $$comPopupWrap.forEach((popWrap) => {
      popWrap.addEventListener("click", (e) => {
        $$comPopContainer.forEach((element) => {
          $$closeBtn.forEach((el) => {
            const curentTarget = e.target;
            if (curentTarget == el || curentTarget == element) {
              closePop(el);
            }
          });
        });
      });
    });
  }

  const openPop = (el) => {
    const target = el.getAttribute("data-id");
    const targetId = `#${target}`;
    document.querySelector(targetId).classList.add("on");
  }

  const closePop = (el) => {
    el.closest(".comPopupWrap").classList.remove("on");
  }

  // input 금액 콤마 이력

  const comInputNumber = () => {
    const $$input = document.querySelectorAll('.comNumber');
    $$input.forEach((el) => {
      el.addEventListener('keyup', function (e) {
        let value = e.target.value;
        value = Number(value.replaceAll(',', ''));
        if (isNaN(value)) {
          el.value = 0;
        } else {
          const formatValue = value.toLocaleString('ko-KR');
          el.value = formatValue;
        }
      })
    })
  }


})();