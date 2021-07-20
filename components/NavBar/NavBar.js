import Link from "next/link";
import styles from "./NavBar.module.css";
import logo from "../../public/logo.svg";
import togglebtn from "../../public/icon-hamburger.svg";
import Image from "next/image";
import NavItems from "../NavItems/NavItems";
import MobileMenu from "../MobileMenu/MobileMenu";
import useMobilenavmenu from "./useMobilenavmenu";

const NavBar = () => {
  const { ref, mobileNavmenu, setMobileNavmenu } = useMobilenavmenu(false);

  return (
    <div className={styles.container}>
      {/* <div className={styles.headerblock}> */}
      <div className={styles.logo}>
        <Image
          src={logo}
          alt="Logo"
          layout="responsive"
          width={180}
          height={40}
        />
      </div>
      <div className={styles.togglebtn}>
        <button
          className={styles.btn_menu}
          onClick={() => setMobileNavmenu(!mobileNavmenu)}
        >
          <Image src={togglebtn} alt="Menu icon" width={30} height={20} />
        </button>
      </div>
      {/* </div> */}
      {mobileNavmenu && (
        <div ref={ref}>
          <MobileMenu />{" "}
        </div>
      )}
      <NavItems />
    </div>
  );
};

export default NavBar;

// import Link from "next/link";
// import styles from "./NavBar.module.css";
// import logo from "../../public/logo.svg";
// import togglebtn from "../../public/icon-hamburger.svg";
// import Image from "next/image";
// import { useState, useEffect, useRef } from "react";
// import NavItems from "../NavItems/NavItems";
// import MobileMenu from "../MobileMenu/MobileMenu";

// const NavBar = () => {
//   // set state of the menu icon
//   const [MobileNavMenu, setMobileNavMenu] = useState(false);

//   // 1. useRef() hook allows to access Dom
//   // initialize and assign variable to use Ref
//   // reference it to outer div
//   const node = useRef();

//   // create fn that that checks if the click is outside node
//   // if click is inside node - it will return true

//   const handleClickOutside = (e) => {
//     if (node && node.current && node.current.contains(e.target)) {
//       // inside click
//       return;
//     }
//     // outside click
//     setMobileNavMenu(false);
//   };

//   // 2. Add eventlistener to the document
//   useEffect(() => {
//     if (MobileNavMenu) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//   }, [MobileNavMenu]);

//   // create function to click on menu icon
//   const handleClick = () => {
//     setMobileNavMenu(!MobileNavMenu);
//   };
//   // create function to close menu icon when selecting a menu item

//   // change link to button
//   // create openMenu State
//   // pass state to NavMenu(Mobile)
//   // create mobile NavMenu

//   return (
//     <div className={styles.container} ref={node}>
//       <div className={styles.logo}>
//         <Image
//           src={logo}
//           alt="Logo"
//           layout="responsive"
//           width={180}
//           height={40}
//         />
//       </div>
//       <div className={styles.togglebtn}>
//         <button className={styles.btn_menu} onClick={() => handleClick()}>
//           <Image src={togglebtn} alt="Menu icon" width={30} height={20} />
//         </button>
//       </div>
//       {MobileNavMenu && <MobileMenu />}
//       <NavItems />
//     </div>
//   );
// };

// export default NavBar;
