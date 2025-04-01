import { useState, useEffect } from "react";
const useMediaQuery = (query: string) => {
  const mql = window.matchMedia(query); //MediaQueryList {matches:true|false, media:"(min-1060px"}
  const [matches, setMatches] = useState(mql.matches); 
  useEffect(() => {
    const listener = () => setMatches(mql.matches);
    mql.addEventListener("change", listener);
    return () => {
      console.log("Cleaning 🧹 previous effects");
      mql.removeEventListener("change", listener);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return matches;
};

export default useMediaQuery;
