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
                            <h2 className="text-2xl font-bold">Kanthalloor Camping 2.0</h2>
                            <span className="text-sm font-semibold">3 – 4 May</span>
                        </div>
                        <p className="text-sm mt-1 text-gray-600">
                            To the Kashmir of Kerala - Strangers Group Trip
                        </p>
                    </div>
                </div>

                {/* Right Card */}
                <div className="card w-full md:w-96 bg-base-100 shadow-sm">
                    <div className="card-body">
                        <ul className="mt-4 flex flex-col gap-2 text-sm">
                            <li>✓ Tent stay</li>
                            <li>✓ 5 Times Food</li>
                            <li>✓ Both Men & Women Coordinators</li>
                            <li>✓ Pickup & Drop from Coimbatore</li>
                        </ul>

                        <div className="mt-4">
                            <h3 className="font-bold">Do's</h3>
                            <ul className="list-disc ml-4 text-sm text-green-700">
                                <li>Follow the coordinator's instructions</li>
                                <li>Respect fellow travelers and nature</li>
                                <li>Stay hydrated and active</li>
                            </ul>
                        </div>

                        <div className="mt-2">
                            <h3 className="font-bold">Don'ts</h3>
                            <ul className="list-disc ml-4 text-sm text-red-700">
                                <li>Don't consume alcohol or drugs</li>
                            </ul>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-4 justify-center items-center text-center">
                            <span className="text-lg font-semibold w-full md:w-auto">Contact Us :</span>

                            <a href="https://wa.me/919790493253" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="text-4xl text-green-500" />
                            </a>

                            <a href="https://www.facebook.com/share/1RfUjQY5Mf/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-3xl text-blue-500" />
                            </a>

                            <a href="https://www.instagram.com/jntripmakers?igsh=MTBuZm04ZjNnem5pdA==" target="_blank" rel="noopener noreferrer">
                                <SiInstagram className="text-3xl" style={{ color: '#E4405F' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    );
};

export default Contact;
