import styles from "./StretchContent.module.css";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

const StretchContent = ({ fact, key }) => {
  console.log(fact, "fact");
  return (
    <>
      <style jsx>{`
        a {
          padding: 30px 0 8px;
          position: relative;
        }

        a::before {
          border-radius: 25px;
          content: "";
          position: absolute;
          left: 65px;
          bottom: 7px;
          width: 145px;
          height: 8px;
          transform: translateX(-50%);
          z-index: 1;
          opacity: 0;
          background: ${fact.linkColor};
          transition: opacity 200ms ease-in;
        }

        a:hover::before {
          opacity: 0.5;
        }
      `}</style>
      <div className={styles["main-section-wrapper"]} key={key}>
        <div className={styles["main-section"]}>
          <div className={styles["main-section__img-card"]}>
            <Image
              src={fact.image}
              alt={fact.altDescription}
              width={370}
              height={370}
              layout="responsive"
            />
          </div>
          <div className={styles["main-section__description-card"]}>
            <div className={styles["main-section__body"]}>
              <div className={styles["main-section__title"]}> {fact.title}</div>
              <div className={styles["main-section__content"]}>
                {fact.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StretchContent;
