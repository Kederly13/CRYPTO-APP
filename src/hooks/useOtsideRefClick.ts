import { useEffect, RefObject } from "react"

export const useOutsideRefClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
    useEffect(() => {
      const currentRef = ref.current
  
      const handleClick = (event: MouseEvent) => {
        if (currentRef && event.target instanceof Element) {
          event.stopPropagation()
          callback()
        }
      }
  
      currentRef?.addEventListener('click', handleClick)
    //   document.body.addEventListener('click', handleClick)

      return () => {
        currentRef?.removeEventListener('click', handleClick)
        // document.body.removeEventListener('click', handleClick)
      }
    }, [ref, callback])
  }