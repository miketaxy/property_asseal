document.addEventListener("DOMContentLoaded", function () {
  const animatedItems = document.querySelectorAll(".section");

  function checkScroll() {
    animatedItems.forEach((item) => {
      const position = item.getBoundingClientRect();

      if (position.top < window.innerHeight - 50) {
        item.style.opacity = 1;
        item.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      const notification = document.getElementById("copyNotification");
      notification.classList.add("show");

      setTimeout(() => {
        notification.classList.remove("show");
      }, 2000);
    });
  }

  const copyElements = document.querySelectorAll(".phone, .email, .address");

  copyElements.forEach((element) => {
    element.addEventListener("click", function (e) {
      let textToCopy = "";

      if (this.classList.contains("phone")) {
        textToCopy = "(093) 45-19-023";
      } else if (this.classList.contains("email")) {
        textToCopy = "exprertna_ocinka_maina@urk.net";
      } else if (this.classList.contains("address")) {
        textToCopy = this.querySelector("span").textContent;
      }

      copyToClipboard(textToCopy);
    });
  });

  const navItems = document.querySelectorAll(".navigation-list li");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

function scrollReviews(scrollOffset) {
  const scrollContainer = document.querySelector(".reviews-scroll");
  scrollContainer.scrollBy({
    left: scrollOffset,
    behavior: "smooth",
  });
}
