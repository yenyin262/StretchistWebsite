import styles from "./MainSection.module.css";
import Link from "next/link";
import Image from "next/image";

const MainSection = ({ data }) => {
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
          background: ${data.linkColor};
          transition: opacity 200ms ease-in;
        }

        a:hover::before {
          opacity: 0.5;
        }
      `}</style>
      <div className={styles["main-section-wrapper"]}>
        <div className={styles["main-section"]}>
          <div className={styles["main-section__img-card"]}>
            <Image
              src={data.image}
              alt={data.alt}
              width={370}
              height={370}
              layout="responsive"
            />
          </div>

          <div className={styles["main-section__description-card"]}>
            <div className={styles["main-section__body"]}>
              <div className={styles["main-section__title"]}>{data.title}</div>
              <div className={styles["main-section__content"]}>
                {data.content}
              </div>
              <div className={styles["main-section__button"]}>
                <Link href={data.link}>
                  <a>{data.details}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
