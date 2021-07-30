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
          content: "";
          position: absolute;
          left: 65px;
          bottom: 10px;
          width: 145px;
          height: 8px;
          transform: skew(-12deg) translateX(-50%);
          background: ${data.linkColor};
          z-index: -1;
        }
      `}</style>
      <div className={styles.content_container}>
        <div className={styles.imgContainer}>
          <Image
            src={data.image}
            alt={data.altDescription}
            width={370}
            height={370}
            layout="responsive"
          />
        </div>

        <div className={styles.mainContent_block}>
          <div className={styles.contentItem}>
            <div className={styles.title}>{data.title}</div>
            <div className={styles.content}>{data.content}</div>
            <div className={styles.content_btn}>
              <Link href="/about">
                <a>{data.details}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;