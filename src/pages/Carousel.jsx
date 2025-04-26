import React, { useState } from 'react';
import Trip1 from '../assets/Trip (1).jpg';
import Trip2 from '../assets/Trip (2).jpg';
import Trip3 from '../assets/Trip(3).jpg';
import Trip4 from '../assets/Trip(4).jpg';
import Trip5 from '../assets/Trip(5).jpg';
import Trip6 from '../assets/Trip(6).jpg';
import Trip7 from '../assets/Trip(7).jpg';
import Trip8 from '../assets/Trip(8).jpg';
import Trip9 from '../assets/Trip(9).jpg';
import Trip10 from '../assets/Trip (10).jpg';

const games = [
  { img: Trip1 },
  { img: Trip3 },
  { img: Trip4 },
  { img: Trip5 },
  { img: Trip2 },
  { img: Trip6 },
  { img: Trip7 },
  { img: Trip8 },
  { img: Trip9 },
  { img: Trip10 }
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 px-6 md:px-12 bg-green-600/20 backdrop-blur-lg shadow-md text-black">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 border-b-4 border-green-700 inline-block pb-2 capitalize">
        Recent Images
      </h2>

      <div className="flex overflow-x-auto gap-6 scrollbar-hide">
        {games.map((game, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative flex-shrink-0 rounded-2xl cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${
              activeIndex === index ? 'w-[320px] md:w-[500px] shadow-2xl' : 'w-[200px] md:w-[300px]'
            } h-[360px] md:h-[400px]`}
          >
            <img src={game.img} alt={`Game ${index + 1}`} className="w-full h-full object-cover rounded-2xl" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
