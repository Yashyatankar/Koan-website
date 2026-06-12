import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './Component/Navbar.jsx'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const heroRef = useRef(null)

  useEffect(() => {
    const words = heroRef.current.querySelectorAll('.word')

    // entrance stagger
    gsap.fromTo(
      words,
      { y: '100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.08,
        delay: 0.3,
      }
    )

    // exit stagger on scroll
    gsap.to(words, {
      y: '-100%',
      opacity: 0,
      duration: 0.6,
      ease: 'power2.in',
      stagger: 0.05,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  const titleLine1 = ['Form', 'follows']
  const titleLine2 = ['silence']

  return (
    <>
      <Navbar />
      <section
        ref={heroRef}
        className="bg-black w-full min-h-screen relative flex items-center justify-center px-6 sm:px-10 md:px-16 overflow-hidden"
      >
        <div className="relative w-full max-w-5xl">
          <h1 className="font-display text-zinc-100 text-[12vw] sm:text-[14vw] md:text-[16vw] lg:text-[15vh] leading-none tracking-tight overflow-hidden">
            <div className="overflow-hidden">
              {titleLine1.map((w, i) => (
                <span key={i} className="word inline-block mr-3">{w}</span>
              ))}
            </div>
            <div className="overflow-hidden">
              {titleLine2.map((w, i) => (
                <span key={i} className="word inline-block">{w}</span>
              ))}
            </div>
          </h1>

          <div className="absolute -top-6 sm:-top-8 left-0 overflow-hidden">
            <h2 className="text-zinc-400 text-xs sm:text-sm font-display leading-tight">
              <span className="word inline-block">Objects stripped</span>
              <br />
              <span className="word inline-block">to their essence</span>
            </h2>
          </div>

          <div className="w-full h-px bg-white mt-4 sm:mt-6" />
        </div>

        <div className="absolute left-6 sm:left-10 md:left-16 bottom-10 sm:bottom-16 md:bottom-20">
          <p className="text-white text-sm sm:text-base font-sans">
            Minimal furniture — Est. 2024
          </p>
          <p className="mt-2 text-xs sm:text-sm text-zinc-500 font-sans">
            Tokyo · Mumbai · Oslo
          </p>
        </div>

        <div className="absolute right-6 sm:right-10 md:right-16 bottom-10 sm:bottom-16 md:bottom-20">
          <p className="font-sans text-zinc-500 text-base sm:text-lg md:text-xl tracking-wide">
            KŌAN STUDIO
          </p>
        </div>

      </section>
    </>
  )
}

export default App