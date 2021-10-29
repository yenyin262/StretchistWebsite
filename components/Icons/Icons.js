import socialMediaIcons from "../../data/socialMediaIcons.json";
import Link from "next/link";

import Instagram from "../Instagram";
import styles from "./Icons.module.css";
import BookBtn from "../BookBtn/BookBtn";
// create an object
const ICONS = {
  instagram: <Instagram />,
  bookbtn: <BookBtn />,
};

const Icons = ({}) => {
  return (
    <div className={styles.icon}>
      {socialMediaIcons.map((icon, index) => {
        const IconComponent = ICONS[icon.type];
        return (
          <Link href={icon.link} key={index}>
            <a>{IconComponent}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default Icons;

// const ICONS = {
//     facebook: Facebook,
//   };

//   const Icons = ({}) => {
//     return (
//       <div style={{ display: "flex" }}>
//         {socialMediaIcons.map((icon, index) => {
//           const IconComponent = ICONS[icon.type];
//           return (
//             <Link href={icon.link} key={index}>
//               <a>
//                 <IconComponent />
//               </a>
//             </Link>
//           );
//         })}
//       </div>
//     );
//   };

//   export default Icons;
