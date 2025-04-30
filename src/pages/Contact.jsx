import React from 'react';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { SiInstagram } from "react-icons/si";

const Contact = () => {
    return (
        <>
          <div className='bg-green-600/20 backdrop-blur-lg shadow-md'>
              {/* Title */}
              <div className="text-center mb-8 px-4 ">
                <h2 className="text-3xl font-bold border-b-4 inline-block border-green-600 pb-2">
                    Connect With Us & Explore Adventures
                </h2>
                <p className="text-gray-600 mt-2 text-sm">
                    Get all trip details and stay connected through social media!
                </p>
            </div>

            {/* Cards Section */}
            <div className="flex flex-col md:flex-row justify-center gap-8 mt-6 px-4 ">
                {/* Left Card */}
                <div className="card bg-base-100 w-full md:w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://static2.tripoto.com/media/filter/tst/img/1787018/Image/1661506766_blog_cover.jpg.webp"
                            alt="Kanthalloor Camping"
                            className="w-full h-52 object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <span className="badge badge-xs badge-warning">New Adventure</span>
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold mt-3">Kanthalloor Camping 2.0</h2>
                            
                        </div>
                        <p className="text-sm mt-3 text-gray-600">
                            To the Kashmir of Kerala - Strangers Group Trip
                        </p>
                    </div>
                </div>

                {/* Right Card */}
             <div className="card w-full md:w-96 bg-base-100 shadow-sm">
                    <div className="card w-full md:w-96 bg-base-100 shadow-sm">
            <div className="card-body text-sm space-y-4">

                {/* Camping Details */}
                <div>
                    <h2 className="text-lg font-bold text-green-700 mb-2">🏕️ Kanthaloor Camping 2.0 - Kashmir of Kerala</h2>
                    <ul className="list-disc ml-4 space-y-1">
                        <li><strong>Date:</strong> May 17,18 (Saturday & Sunday)</li>
                        <li><strong>Location:</strong> Kanthaloor, Kerala</li>
                        <li><strong>Charges:</strong> ₹3699/person</li>
                        <li><strong>Duration:</strong> 2 Days 1 Night</li>
                        <li><strong>Transport:</strong> Tempo Travellers / 20 Seater Mini Coach</li>
                    </ul>
                </div>

                {/* What's Included */}
                <div>
                    <h3 className="font-bold text-green-700">✅ Inclusions</h3>
                    <ul className="list-disc ml-4 space-y-1">
                        <li>Tent Stay</li>
                        <li>Campfire with Music</li>
                        <li>View Point Entry fee</li>
                        <li>Freshup Spot</li>
                        <li>5 Times Food</li>
                        <li>Both Men & Women Coordinators</li>
                        <li>Pickup & Drop from Coimbatore</li>
                        
                    </ul>
                </div>

                </div>

                       

                       
                    </div>
                </div>
            </div>
          </div>
        </>
    );
};

export default Contact;
