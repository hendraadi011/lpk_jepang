import { useEffect, useRef, useState } from 'react'

export const Counter = ({ end, suffix }) => {
  const [count, setCount] = useState(1) // mulai dari 1
  const ref = useRef()
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          let start = 1
          const duration = 2000 // total durasi animasi 2 detik
          const stepTime = 16 // sekitar 60fps
          const increment = (end - 1) / (duration / stepTime) // naik dari 1 ke target

          const animate = () => {
            start += increment
            if (start < end) {
              setCount(Math.floor(start))
              requestAnimationFrame(animate)
            } else {
              setCount(end) // pastikan berhenti di angka target
            }
          }

          animate()
        }
      },
      { threshold: 0.5 } // mulai animasi saat 50% muncul
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [end])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
