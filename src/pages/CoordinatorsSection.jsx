import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const CoordinatorsSection = () => {
    return (
        <div className="bg-green-600/20 backdrop-blur-lg shadow-md py-10 px-6 md:px-20 text-gray-800 space-y-10">

            {/* Inline Glitter CSS */}
            <style>
                {`
                    @keyframes glitter {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                    .glitter-text {
                        background: linear-gradient(90deg, #ff8a00, #e52e71, #9b00ff, #ff8a00);
                        background-size: 300% 300%;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        animation: glitter 3s ease-in-out infinite;
                    }
                    .font-cursive {
                        font-family: 'Brush Script MT', cursive;
                    }
                `}
            </style>

            {/* Coordinators */}
            <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-green-500">
                <h2 className="text-2xl md:text-3xl font-extrabold text-green-700 font-serif mb-4">
                    📞 Coordinators
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-lg font-medium font-sans">
                    <li className="flex items-center gap-2">
                        <FaPhoneAlt className="text-green-600" /> Joan Emima - <a href="tel:9790493253" className="text-blue-700 hover:underline">9790493253</a>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaPhoneAlt className="text-green-600" /> Siddharth - <a href="tel:9345918221" className="text-blue-700 hover:underline">9345918221</a>
                    </li>
                </ul>
            </div>

            {/* Glitter Thank You Section */}
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-pink-600 glitter-text font-cursive mb-2">
                     Thank You! 
                </h2>
                <p className="text-2xl md:text-3xl font-semibold text-gray-700 glitter-text font-serif">
                    — Team <span className="text-green-700">JN Tripmakers 💚</span>
                </p>
            </div>
        </div>
    );
};

export default CoordinatorsSection;
