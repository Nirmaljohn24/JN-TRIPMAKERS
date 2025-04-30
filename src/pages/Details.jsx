import React from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';

const Details = () => {
    return (
        <div className="bg-green-600/20 backdrop-blur-lg shadow-md min-h-screen py-8 px-4 pb-2 pt-4">
            <div className="flex justify-center mt-4 md:mt-8">
                <div className="w-11/12 md:w-4/5 space-y-6">
                    
                    {/* Day 1 */}
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-white shadow-md rounded-lg">
                        <div className="collapse-title font-bold text-green-800">
                            Day 1 - What exciting stuff are we doing?
                        </div>
                        <div className="collapse-content text-sm text-gray-700 font-sans">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>5:00 am - Pickup from Gandhipuram, Coimbatore</li>
                                <li>8:00 am - Breakfast at Udumalaipet</li>
                                <li>10:00 am - Reach Marayoor</li>
                                <li>10:00 am to 11:00 am - Freshup at Marayoor</li>
                                <li>11:00 am to 1:00 pm - Jeep safari to Murugan Para view point and sandalwood forest</li>
                                <li>1:00 pm - Lunch at Marayoor</li>
                                <li>1:30 pm - Start journey to Kanthalloor</li>
                                <li>1:45 pm - Anakottapara View point</li>
                                <li>3:00 pm - Check in to campsite</li>
                                <li>3:00 pm to 4:00 pm - Relaxation</li>
                                <li>4:00 pm - Mild trekking to Brammaram view point (includes strawberry farm visit, Lemongrass valley, and tree house)</li>
                                <li>6:00 pm - Return to campsite</li>
                                <li>7:00 pm - Campfire with music</li>
                                <li>8:30 pm - Dinner</li>
                                <li>9:00 pm to 10:00 pm - Fun games</li>
                                <li>10:00 pm to 6:00 am - Sleeping hours</li>
                            </ul>
                        </div>
                    </div>

                    {/* Day 2 */}
                    <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-white shadow-md rounded-lg">
                        <div className="collapse-title font-bold text-green-800">
                            Day 2 - What's planned?
                        </div>
                        <div className="collapse-content text-sm text-gray-700 font-sans">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>6:30 am - Wake up</li>
                                <li>6:30 am to 7:30 am - Refreshment</li>
                                <li>8:00 am - Breakfast</li>
                                <li>9:00 am - Jeep safari to Kanthalloor waterfalls (offroad)</li>
                                <li>11:00 am - Return to campsite (check out)</li>
                                <li>12:00 pm - Jaggery unit visit</li>
                                <li>1:00 pm - Lunch at Marayoor</li>
                                <li>2:00 pm to 3:30 pm - Shopping in Marayoor (If time permits)</li>
                                <li>3:30 pm - Start Journey to Coimbatore</li>
                                <li>7:30 pm to 8:30 pm - Drop at Gandhipuram, Coimbatore</li>
                            </ul>
                        </div>
                    </div>

                    {/* Package Details */}
                    <div className="border-l-4 border-green-600 bg-white shadow-md rounded-lg p-6 space-y-4">
                        <h2 className="text-2xl font-serif font-bold text-green-700 flex items-center">
                            <FaCheckCircle className="h-6 w-6 text-green-600 mr-2" />
                            Package Details
                        </h2>

                        <div>
                            <h3 className="text-lg font-semibold text-green-600">Inclusions:</h3>
                            <ul className="list-disc pl-6 text-gray-700 font-sans space-y-1">
                                <li>Pickup and Drop at Gandhipuram, Coimbatore</li>
                                <li>5 Times food (Saturday 3 times and Sunday 2 times. Both Veg & Non veg)</li>
                                <li>Tent stay (Options- separate for couples)</li>
                                <li>Men and Women Coordinators</li>
                                <li>Campfire with music</li>
                                <li>Freshup spot</li>
                                <li>View point entry</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-red-600">Exclusions:</h3>
                            <ul className="list-disc pl-6 text-gray-700 font-sans space-y-1">
                                <li>Jeep safari</li>
                                <li>Sunday Dinner</li>
                                <li>Food, snack and refreshments buying outside during travelling</li>
                                <li>Extra activities like zipline, etc</li>
                                <li>Which is not mentioned in inclusions</li>
                            </ul>
                        </div>
                    </div>

                    {/* Things to Keep in Mind */}
                    <div className="border-l-4 border-yellow-500 bg-white shadow-md rounded-lg p-6 space-y-4">
                        <h2 className="text-2xl font-serif font-bold text-yellow-600 flex items-center">
                            <FaExclamationTriangle className="h-6 w-6 text-yellow-500 mr-2" />
                            Things to Keep in Mind
                        </h2>

                        <ul className="list-disc pl-6 text-gray-700 font-sans space-y-1">
                            <li>Mobile network Jio & BSNL only have coverage</li>
                            <li>Follow the instructions of tour coordinators</li>
                            <li>Carrying valuables is not advisable</li>
                            <li>Kindly avoid disposal of waste, especially plastics, in inappropriate manner</li>
                        </ul>
                    </div>

                    {/* Camping Rules */}
                    <div className="border-l-4 border-red-500 bg-white shadow-md rounded-lg p-6 space-y-4">
                        <h2 className="text-2xl font-serif font-bold text-red-600 flex items-center">
                            <FaTimesCircle className="h-6 w-6 text-red-500 mr-2" />
                            Camping Rules
                        </h2>

                        <ol className="list-decimal pl-6 text-gray-700 font-sans space-y-1">
                            <li>Respect co-passengers</li>
                            <li>After 11 pm, no noise is allowed in campsite</li>
                            <li>No smoking inside the tent</li>
                            <li>Strictly no alcohol and smoking</li>
                            <li>Refrain from going outside the camp at night without the permission of the coordinators</li>
                            <li>Need a valid ID proof</li>
                            <li>Eco-Sensitive zone. No littering</li>
                            <li>The number of guests must not exceed as mentioned in the confirmation</li>
                            <li>Damage to the campsite caused by the guest will be charged at the cost of repair or replacement. JN Tripmakers is not responsible for determining compensation; the property owner determines it.</li>
                            <li>Negotiation is not possible</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details;
