import { useEffect } from "react";

export const useIntersectionObserver = () => {
  useEffect(() => {
    const navigatonHeader = document.querySelector(".main-nav");
    const firstContentSection = document.querySelector(".observer-test");

    const firstContentSectionOptions = {
      rootMargin: "-150px 0px 0px 0px",
    };

    const sectionOneObserver = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          navigatonHeader.classList.add("nav-scrolled");
        } else {
          navigatonHeader.classList.remove("nav-scrolled");
        }
      });
    }, firstContentSectionOptions);

    sectionOneObserver.observe(firstContentSection);
  }, []);
};
