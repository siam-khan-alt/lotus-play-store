
import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Lotus Play Store | ${title}`;
  }, [title]);
};

export default useTitle;
