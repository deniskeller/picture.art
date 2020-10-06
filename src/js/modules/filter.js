const filter = () => {
  const menu = document.querySelector(".portfolio-menu"),
    items = menu.querySelectorAll("li"),
    btnAll = menu.querySelector(".all"),
    btnLovers = menu.querySelector(".lovers"),
    btnChef = menu.querySelector(".chef"),
    btnGirl = menu.querySelector(".girl"),
    btnGuy = menu.querySelector(".guy"),
    btnGrandMother = menu.querySelector(".grandmother"),
    btnGrandDad = menu.querySelector(".granddad"),
    wrapper = document.querySelector(".portfolio-wrapper"),
    markAll = wrapper.querySelectorAll(".all"),
    markGirl = wrapper.querySelectorAll(".girl"),
    markLovers = wrapper.querySelectorAll(".lovers"),
    markChef = wrapper.querySelectorAll(".chef"),
    markGuy = wrapper.querySelectorAll(".guy"),
    no = document.querySelector(".portfolio-no");

  const typeFilter = (markType) => {
    markAll.forEach((item) => {
      item.style.display = "none";
      item.classList.remove("animated", "fadeIn");
    });

    no.style.display = "none";
    no.classList.remove("animated", "fadeIn");

    if (markType) {
      markType.forEach((item) => {
        item.style.display = "block";
        item.classList.add("animated", "fadeIn");
      });
    } else {
      no.style.display = "block";
      no.classList.add("animated", "fadeIn");
    }
  };

  const typeFilterHandler = (btn, content) => {
    btn.addEventListener("click", () => {
      typeFilter(content);
    });
  };

  typeFilterHandler(btnAll, markAll);
  typeFilterHandler(btnLovers, markLovers);
  typeFilterHandler(btnChef, markChef);
  typeFilterHandler(btnGirl, markGirl);
  typeFilterHandler(btnGuy, markGuy);
  typeFilterHandler(btnGrandMother, "");
  typeFilterHandler(btnGrandDad, "");

  menu.addEventListener("click", (e) => {
    let target = e.target;

    if (target && target.tagName == "LI") {
      items.forEach((item) => {
        item.classList.remove("active");
        target.classList.add("active");
      });
    }
  });
};

export default filter;
