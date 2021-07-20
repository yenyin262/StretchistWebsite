import { useState, useRef, useEffect } from "react";

function useMobilenavmenu(initialMenu) {
  const [mobileNavmenu, setMobileNavmenu] = useState(initialMenu);

  const ref = useRef(null);

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
