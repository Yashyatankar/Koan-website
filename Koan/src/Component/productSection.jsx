import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProductSection() {
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null);
  const textContentRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const videoWrapper = videoWrapperRef.current;
    const video = videoRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;

    // Force video to mute so browsers don't block autoplay
    if (video) {
      video.muted = true;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=200%",
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      }
    });

    tl.to(videoWrapper, {
      width: "100vw",
      height: "100vh",
      borderRadius: "0rem",
      duration: 2,
      ease: "power2.inOut"
    });

    tl.to(video, {
      scale: 1.05,
      duration: 2,
      ease: "power2.inOut"
    }, "<");

    tl.to(textContentRef.current, {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      duration: 0.5
    });

    tl.fromTo([heading, paragraph], 
      { 
        y: 50, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.3, 
        duration: 1, 
        ease: "power3.out" 
      }, 
      "-=0.2"
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      <section className="h-screen w-full flex items-center justify-center bg-black border-b border-zinc-900">
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Archival Collection</p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight">Symmetry in Space.</h1>
          <p className="text-sm text-zinc-500 animate-bounce mt-8">Scroll Down</p>
        </div>
      </section>

      <section 
        ref={containerRef} 
        className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
      >
        <div 
          ref={videoWrapperRef} 
          className="relative w-[80vw] h-[60vh] md:w-[60vw] md:h-[70vh] rounded-2xl overflow-hidden z-0 will-change-transform"
        >
          <video 
            ref={videoRef}
            className="w-full h-full object-cover scale-110 will-change-transform"
            src="/Vid/product-section-vid.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>

        <div 
          ref={textContentRef}
          className="absolute inset-0 z-10 flex flex-col justify-center items-start px-8 md:px-24 bg-transparent transition-colors duration-300"
        >
          <div className="max-w-2xl space-y-6">
            <h2 
              ref={headingRef} 
              className="text-4xl md:text-7xl font-extralight tracking-tight text-white opacity-0 pointer-events-none"
            >
              The Monolith <br />
              <span className="font-serif italic font-normal">Lounge Chair</span>
            </h2>
            <p 
              ref={paragraphRef} 
              className="text-base md:text-lg text-zinc-300 leading-relaxed font-light tracking-wide opacity-0 pointer-events-none"
            >
              Crafted from premium sustainably sourced ebonized oak and brushed raw aluminum. A stark silhouette designed to anchor modern architectural spaces, offering comfort without sacrificing form.
            </p>
          </div>
        </div>
      </section>

      <section className="h-screen w-full bg-white text-black flex items-center justify-center px-8">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <h3 className="text-3xl md:text-5xl font-light tracking-tight leading-none">
            Radical simplicity, exceptional utility.
          </h3>
          <p className="text-zinc-600 leading-relaxed">
            Every joint is hand-milled. Every angle is deliberately calculated. We strip away the unnecessary noise of modern production to deliver pure, tactile longevity.
          </p>
        </div>
      </section>
    </div>
  );
}