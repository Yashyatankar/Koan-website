import React from 'react'

const collection = [
  {
    id: 1,
    name: "Furniture",
    category: "Seating",
    image: "/img/option-1.jpg",
  },
  {
    id: 2,
    name: "Kitchen Table",
    category: "Tables",
    image: "/img/option-2.jpg",
  },

  {
    id:3,
    name:"Bed",
    category: "BedRoom Furniture",
    image:"/img/option-3.jpg",


  }
];

function CollectionCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {collection.map((item) => (
        <div key={item.id} className="p-4">
          <div className="relative group overflow-hidden rounded-4xl">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-80 object-cover transition-opacity duration-300 group-hover:opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-black text-lg uppercase tracking-widest font-display font-thin">
                {item.category}
              </span>
            </div>
          </div>
          <h3 className="font-semibold mt-2">{item.name}</h3>
          <p className="text-sm text-zinc-600">{item.category}</p>
          <p className="mt-2 font-medium">{item.price}</p>
        </div>
      ))}
    </div>
  );
}

function Collection() {
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
            <CollectionCard/>
      </div>
      
    </section>
</>
)
}

export default Collection