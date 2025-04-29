import classes from "./backToTopButton.module.css";
import { RiArrowUpSFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import Link from "next/link";

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      {backToTopButton && (
        <button onClick={scrollUp}>
          <Link href="/#home" className={classes.gmc__backToTopButton}>
            <RiArrowUpSFill />
          </Link>
        </button>
      )}
    </>
  );
}

export default BackToTopButton;
