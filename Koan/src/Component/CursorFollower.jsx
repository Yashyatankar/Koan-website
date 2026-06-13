import { useEffect, useRef } from 'react'

function CursorFollower() {
  const ballRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const ball = ballRef.current

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY

      const target = e.target
      if (target.closest('h1, h2, h3, p, span, a, button')) {
        ball.classList.add('cursor-hover')
      } else {
        ball.classList.remove('cursor-hover')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15
      ball.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`
      requestAnimationFrame(animate)
    }
    animate()

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={ballRef}
      className="cursor-ball"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        background: '#fff',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'width 0.3s ease, height 0.3s ease',
      }}
    >
      <style>{`
        .cursor-ball.cursor-hover {
          width: 48px;
          height: 48px;
        }
      `}</style>
    </div>
  )
}

export default CursorFollower