import React, { useEffect, useRef } from "react";

const ScrollButtons = () => {
  const scrollTopBtnRef = useRef(null);
  const scrollDownBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollTopBtnRef.current.style.display = "block";
      } else {
        scrollTopBtnRef.current.style.display = "none";
      }

      if (
        window.innerHeight + window.pageYOffset >=
        document.documentElement.offsetHeight - 20
      ) {
        scrollDownBtnRef.current.style.display = "none";
      } else {
        scrollDownBtnRef.current.style.display = "block";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="scrolls">
      <ion-icon
        ref={scrollTopBtnRef}
        className="scroll-up"
        name="arrow-up-circle-outline"
        onClick={scrollToTop}
      ></ion-icon>

      <ion-icon
        ref={scrollDownBtnRef}
        className="scroll-down"
        name="arrow-down-circle-outline"
        onClick={scrollToBottom}
      ></ion-icon>
    </div>
  );
};

export default ScrollButtons;
