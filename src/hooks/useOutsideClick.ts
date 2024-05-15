import { useEffect, RefObject } from "react"

export const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
    useEffect(() => {
      const handleClick = (event: MouseEvent) => {
        if (ref?.current && event.target instanceof Element && !ref?.current.contains(event.target)) {
          callback()
        }
      }
      document.body.addEventListener('click', handleClick);

      return () => document.body.removeEventListener('click', handleClick);
    }, [ref, callback])
  }