import React from 'react'

function AboutUs() {
  return (
<>
    <section className='w-full bg-black relative overflow-hidden px-4'>
      <div className='w-full px-3 py-2 bg-white rounded-4xl relative'>
        <div className="flex items-center justify-start my-8">
              <h2 className="flex items-center text-2xl font-bold tracking-wide uppercase text-zinc-800 md:text-3xl font-display ">
                {/* SVG Icon with right border acting as the line */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="w-[1.2em] h-[1.2em] pr-4 mr-4 border-r-2 border-zinc-300 text-zinc-700"
                >
                  {/* Lounge Chair SVG Path */}
                  <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
                  <path d="M3 11h18a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" />
                  <line x1="5" y1="18" x2="3" y2="22" />
                  <line x1="19" y1="18" x2="21" y2="22" />
                </svg>

                {/* Heading Text */}
                <span>Collection</span>
              </h2>
            </div>
      </div>
    </section>
</>
)
}

export default AboutUs