import styles from "./MainSection.module.css";
import Link from "next/link";
import Image from "next/image";

const MainSection = ({ data }) => {
  return (
    <>
      <style jsx>{`
        @media (max-width: 400px) {
          a {
            padding: 30px 0 8px;
            position: relative;
          }

          a::before {
            content: "";
            position: absolute;
            left: 65px;
            bottom: 10px;
            width: 130px;
            height: 7px;
            transform: skew(-12deg) translateX(-50%);
            background: ${data.linkColor};
            z-index: -1;
          }
        }

        @media (min-width: 400px) {
        }
      `}</style>
      <div className={styles.content_container}>
        <div className={styles.imgContainer}>
          <Image
            src={data.image}
            alt="dd"
            width={370}
            height={370}
            layout="responsive"
          />
        </div>
        <div className={styles.mainContent_block}>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.content}>{data.content}</div>
          <div className={styles.content_btn}>
            <Link href="/about">
              <a>{data.details}</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
