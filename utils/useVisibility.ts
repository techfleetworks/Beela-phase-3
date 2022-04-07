import { useEffect, useState, useRef } from "react"

export function useVisibility() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisibility] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([element]) => setVisibility(element?.isIntersecting),
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    )
    ref.current && observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])

  return { ref, visible }
}