import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query); //MediaQueryList {matches:true|false, media:"(min-600px"}
    if (mql.matches !== matches) {
      setMatches(mql.matches);
    }
    const listener = () => setMatches(mql.matches);
    mql.addEventListener("change", listener);

    return () => {
      console.log("Cleaning 🧹 previous effects");
      mql.removeEventListener("change", listener);
    };
  }, [query, matches]);
  return matches;
};

export default useMediaQuery;
