const accordion = (triggersSelector) => {
  const btns = document.querySelectorAll(triggersSelector);

  btns.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("active-style");
      this.nextElementSibling.classList.toggle("active-content");

      if (this.classList.contains("active-style")) {
        this.nextElementSibling.style.maxHeight =
          this.nextElementSibling.scrollHeight + 80 + "px";
      } else {
        this.nextElementSibling.style.maxHeight = "0px";
      }
    });
  });

  // blocks = document.querySelectorAll(itemsSelector);

  // blocks.forEach((item) => {
  //   item.classList.add("animated", "fadeInUp");
  // });

  // btns.forEach((item) => {
  //   item.addEventListener("click", function () {
  //     if (!this.classList.contains("active")) {
  //       btns.forEach((item) => {
  //         item.classList.remove("active", "active-style");
  //       });
  //       this.classList.add("active", "active-style");
  //     }
  //   });
  // });
};

export default accordion;
