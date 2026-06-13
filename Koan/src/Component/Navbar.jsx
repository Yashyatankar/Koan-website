import React from 'react'
import '/src/index.css' 

const Navbar = () => {
    const navbar = [
        'home',
        'about us',
        'collections',
        'contact'
    ]

    return (
        <div className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full bg-transparent mix-blend-difference'>

            <div className='text-2xl p-2 ml-6 my-3'>
                <h1 className='font-display tracking-wider text-zinc-100'>
                    KŌAN STUDIO
                </h1>
            </div>
            
            <ul className='flex gap-6 mr-6 px-2'>
            
                {navbar.map((item) => (
                <li
                    key={item}
                    className="
                    relative
                    capitalize
                    font-sans
                    text-zinc-200
                    tracking-wide
                    cursor-pointer
                    transition-colors
                    duration-300
                    hover:text-zinc-600

                    after:content-['']
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:w-0
                    after:h-0.5
                    after:bg-zinc-100
                    after:transition-all
                    after:duration-300

                    hover:after:w-full
                    "
                >
                    {item}
                </li>
                ))}
                        
            </ul>

        </div>
    )
}

export default Navbar