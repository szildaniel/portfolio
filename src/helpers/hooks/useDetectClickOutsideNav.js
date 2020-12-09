import React, {useEffect} from 'react';

export const useDetectClickOutsideNav = (ref, isOpen, setIsOpen) => {
    useEffect( () => {
      function handleClickOutside(e){
        if(isOpen && ref.current && !ref.current.contains(e.target)){
          setIsOpen(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [ref])
  }

