import React, { useEffect, useRef, useState } from "react";

const ScrollButtons = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);
  const scrollTopBtnRef = useRef(null);
  const scrollDownBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop > 20) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }

      if (
        scrollTop + window.innerHeight >=
        document.documentElement.offsetHeight - 20
      ) {
        setShowScrollDown(false);
      } else {
        setShowScrollDown(true);
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
      <div
        className="up"
        style={{ display: showScrollUp ? "block" : "none" }}
        onClick={scrollToTop}
      >
        <ion-icon
          ref={scrollTopBtnRef}
          className="scroll-up"
          name="arrow-up-circle-outline"
        ></ion-icon>
      </div>
      {showScrollDown && (
        <div className="down" onClick={scrollToBottom}>
          <ion-icon
            ref={scrollDownBtnRef}
            className="scroll-down"
            name="arrow-down-circle-outline"
          ></ion-icon>
        </div>
      )}
    </div>
  );
};

export default ScrollButtons;
