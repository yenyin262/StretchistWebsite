import socialMediaIcons from "../../data/socialMediaIcons.json";
import Link from "next/link";
import Facebook from "../Facebook";
import Twitter from "../Twitter";
import Pinterest from "../Pinterest";
import Instagram from "../Instagram";
import Logo from "../Logo";
// create an object
const ICONS = {
  facebook: <Facebook />,
  instagram: <Instagram />,
  twitter: <Twitter />,
  pinterest: <Pinterest />,
};

const Icons = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "0px 100px ",
      }}
    >
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
