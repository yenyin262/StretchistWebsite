import { useState, useRef, useEffect } from "react";

// creating a hook component

function useMobilenavmenu(initialMenu) {
  const [mobileNavmenu, setMobileNavmenu] = useState(initialMenu);

  //   // 1. useRef() hook allows to access Dom
  //   // initialize and assign variable to use Ref
  //   // reference it to outer div
  const ref = useRef(null);

  //   3. create function to click on menu icon
  const handleClickOutside = (e) => {
    if (ref && ref.current && ref.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setMobileNavmenu(false);
  };

  // 2. Add eventlistener to the document mousedown (or click) to the document whenever this component is appear on screen (eg. mount)
  useEffect(() => {
    //  add when mounted
    document.addEventListener("mousedown", handleClickOutside);
    // return function to be called when unmounted
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileNavmenu]);
  return { ref, mobileNavmenu, setMobileNavmenu };
}

export default useMobilenavmenu;
