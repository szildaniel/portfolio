import React, { useEffect, useState, useRef } from "react";

export const useIntersection = ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);
  const [turnOnTurbulence, setTurnOnTurbulence] = useState(false);

  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new window.IntersectionObserver(
      ([entry]) => {
        updateEntry(entry);
        if (entry.isIntersecting) {
            setTurnOnTurbulence(true);
        }
        else {
            setTurnOnTurbulence(false);
        }
      },
      {
        root,
        rootMargin,
        threshold
      }
    );

    const { current: currentObserver } = observer;
    currentObserver.disconnect();
    if (node) currentObserver.observe(node);
    return () => currentObserver.disconnect();
  }, [node, root, rootMargin, threshold]);

  return [setNode, entry, turnOnTurbulence];
};
