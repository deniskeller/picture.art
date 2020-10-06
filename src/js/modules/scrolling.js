const scrolling = (selector) => {
  const scrollUp = document.querySelector(selector);

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1650) {
      scrollUp.classList.add("animated", "fadeIn");
      scrollUp.classList.remove("fadeOut");
    } else {
      scrollUp.classList.add("fadeOut");
      scrollUp.classList.remove("fadeIn");
    }
  });

  // scrolling whit raf
  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.3;

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      let widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null;

      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start,
          r =
            toBlock < 0
              ? Math.max(widthTop - progress / speed, widthTop + toBlock)
              : Math.min(widthTop + progress / speed, widthTop + toBlock);

        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });

  // pure js
  // const elem = document.documentElement,
  //   body = document.body;

  // const calcScroll = () => {
  //   scrollUp.addEventListener("click", function (e) {
  //     let scrollTop = Math.round(body.scrollTop || elem.scrollTop);

  //     if (this.hash !== "") {
  //       e.preventDefault();
  //       let hashElement = document.getElementById(this.hash.substring(1)),
  //         hashElementTop = 0;

  //       while (hashElement.offsetParent) {
  //         hashElementTop += hashElement.offsetTop;
  //         hashElement = hashElement.offsetParent;
  //       }

  //       hashElementTop = Math.round(hashElementTop);
  //       smoothScroll(scrollTop, hashElementTop, this.hash);
  //     }
  //   });
  // };

  // const smoothScroll = (from, to, hash) => {
  //   let timeInterval = 1,
  //     prevScrollTop,
  //     speed;

  //   if (to > from) {
  //     speed = 30;
  //   } else {
  //     speed = -30;
  //   }

  //   let move = setInterval(() => {
  //     let scrollTop = Math.round(body.scrollTop || elem.scrollTop);

  //     if (
  //       prevScrollTop === scrollTop ||
  //       (to > from && scrollTop >= to) ||
  //       (to < from && scrollTop <= to)
  //     ) {
  //       clearInterval(move);
  //       history.replaceState(
  //         history.state,
  //         document.title,
  //         location.href.replace(/#.*$/g, "") + hash
  //       );
  //     } else {
  //       body.scrollTop += speed;
  //       elem.scrollTop += speed;
  //       prevScrollTop = scrollTop;
  //     }
  //   }, timeInterval);
  // };

  // calcScroll();
};

export default scrolling;
