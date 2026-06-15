import React from 'react'


function AboutUs() {
  return (
  <>
    <section className='w-full h-screen relative bg-black py-3 px-2'>

      <div className='w-full h-1/2 text-white absolute top-30 left-0 grid grid-cols-2'>
        <div className='w-auto h-full mx-5 my-2 relative p-4'>
            <h1 className=' font-display font-extrabold text-4xl top-0 left-0 mb-4'> 
              Objects stripped <br />
              to their essence.
            </h1>

            <p>
              Every piece begins with a question: what can be removed? We work backward from excess, toward form that serves only what is necessary — material, proportion, silence.
            </p><br />

            <p>
              The result is furniture that disappears into a room, then quietly defines it.
            </p><br />

            <p>
              OUR PROCESS
            </p>
        </div>

        <div className='bg-black m-2 overflow-hidden rounded-4xl'>
          <img 
            src="img/About-img-1.jpg" 
            alt="" 
            className='w-full h-full object-cover '
          />
        </div>
      

      </div>

      <div className='grid grid-cols-3 absolute text-zinc-400 bottom-10 left-0 w-full h-1/4'>

        <div className='relative m-2'>
          <h1 className='absolute top-1/2 ml-8 font-display'><span className='text-5xl mb-2'>12</span><br />YEARS OF CRAFT </h1>
        </div>
        
        <div className='relative m-2'>
          <h1 className='absolute top-1/2 ml-8 font-display'><span className='text-5xl mb-2'>100%</span><br />SUSTAINABLE MATERIALS </h1>
        </div>

        <div className='relative m-2'>
          <h1 className='absolute top-1/2 ml-8 font-display'><span className='text-5xl mb-2'>240</span><br />PIECES SHIPPED </h1>
        </div>

      </div>

    </section>
  </>
  )
}

export default AboutUs