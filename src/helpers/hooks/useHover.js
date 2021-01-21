import React, { useRef, useEffect, useState } from "react";
import {showLinkBg, hideLinkBg, setLinksBgInvisible} from '../../animations/homeLinksAnimations';

const useHover = () => {
    const linkRef = useRef(null);
    const svgRef = useRef(null);

    const [isHovered, setIsHovered] = useState(false);
    const [svgWidth, setSvgWidth] = useState();

    const handleMouseEnter = () => {setIsHovered(true)};
    const handleMouseLeave = () => {setIsHovered(false)};
  
    const calculateElWidth = () => {
        const elWidth = Math.floor(linkRef.current.getBoundingClientRect().width);
        const elPadding = Number(getComputedStyle(linkRef.current).getPropertyValue('padding-left').replace('px', ''));
        const calculatedWidth = elWidth - elPadding + 20;
        setSvgWidth(calculatedWidth);
    }
    useEffect( () => {
      linkRef.current.addEventListener('mouseenter', handleMouseEnter);
      linkRef.current.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        linkRef.current.removeEventListener('mouseenter', handleMouseEnter);
        linkRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    }, [linkRef])


    useEffect( () => {
        setLinksBgInvisible(svgRef.current)
    }, []);

    useEffect( () => {calculateElWidth()
    }, [])

    useEffect( () => {
        isHovered ? showLinkBg(svgRef.current, svgWidth) : hideLinkBg(svgRef.current);
    }, [isHovered])


    return [linkRef, svgRef, isHovered]
  }

  export default useHover;