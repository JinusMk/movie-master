import { useEffect } from "react";

const useOnClickOutside = (ref, handler) => {
  useEffect(
    function handleAddEventListener() {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (Array.isArray(ref)) {
          if (ref.some((r) => r.current && r.current.contains(event.target))) {
            return;
          }
        } else {
          if (ref.current && ref.current.contains(event.target)) {
            return;
          }
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [ref, handler]
  );
};
export default useOnClickOutside;
