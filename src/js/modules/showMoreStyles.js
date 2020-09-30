import { getResource } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);

  // cards.forEach((item) => {
  //   item.classList.add("animated", "fadeInUp");
  // });

  // btn.addEventListener("click", () => {
  //   cards.forEach((item) => {
  //     item.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
  //     item.classList.add(
  //       "col-sm-3",
  //       "col-sm-offset-0",
  //       "col-xs-10",
  //       "col-xs-offset-1"
  //     );
  //   });
  //   btn.remove();
  // });

  btn.addEventListener("click", function () {
    getResource("http://localhost:3000/styles")
      .then((res) => createCards(res))
      .catch((error) => console.log(error));

    this.remove();
  });

  function createCards(response) {
    response.forEach((item) => {
      let card = document.createElement("div");
      card.classList.add(
        "animated",
        "fadeInUp",
        "col-sm-3",
        "col-sm-offset-0",
        "col-xs-10",
        "col-xs-offset-1"
      );
      card.innerHTML = `
        <div class="styles-block">
          <img src="${item.src}" alt="${item.src}">
          <h4>${item.title}</h4>
          <a href="${item.link}">Подробнее</a>
        </div>
      `;

      document.querySelector(wrapper).appendChild(card);
    });
  }
};

export default showMoreStyles;
