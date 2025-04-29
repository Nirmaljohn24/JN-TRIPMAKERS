import React from 'react';
import { FaClipboardList, FaMoneyCheckAlt, FaInfoCircle } from 'react-icons/fa';

const BookingAndRefund = () => {
    return (
        <div className="bg-green-600/20 backdrop-blur-lg shadow-md py-8 px-4 md:px-16 space-y-10 text-gray-800">
            
            {/* Booking Procedure */}
            <div className="border-l-4 border-blue-500 bg-blue-50 shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-blue-700 flex items-center mb-4 font-serif">
                    <FaClipboardList className="mr-2 text-blue-600" />
                    Booking Procedure
                </h2>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700 font-sans">
                    <li>Fill out the registration form provided by our team.</li>
                    <li>Pay 50% of the total trip cost as an advance to confirm booking.</li>
                    <li>Share your payment receipt via WhatsApp/email for booking confirmation.</li>
                    <li>Pay the remaining 50% balance at least two days or a day before the trip departure.</li>
                    <li>Final trip details (meeting point, contacts) will be shared a day before the departure date.</li>
                </ol>
            </div>

            {/* Cancellation & Refund Policy */}
            <div className="border-l-4 border-red-500 bg-red-50 shadow-md rounded-lg p-6 space-y-4">
                <h2 className="text-2xl font-bold text-red-700 flex items-center font-serif">
                    <FaMoneyCheckAlt className="mr-2 text-red-600" />
                    Cancellation & Refund Policy
                </h2>

                <div className="space-y-2 text-gray-700 font-sans">
                    <h3 className="text-lg font-semibold text-red-600">Cancellation by Participant:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>A week before Trip date: <strong>80% refund</strong> of the total package cost</li>
                        <li>4 - 5 Days before trip date: <strong>50% refund</strong> of the total package cost</li>
                        <li>2 - 3 Days before trip date: <strong>25% refund</strong> of the total package cost</li>
                        <li>A day before or on the trip date: <strong>No Refund</strong></li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-red-600">Cancellation by Organizer:</h3>
                    <p>If the trip is cancelled due to unforeseen reasons (e.g., weather, government restrictions, low participation), a <strong>100% refund</strong> will be provided.</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-red-600">Refund Processing Time:</h3>
                    <p>Refunds will be processed within <strong>2 - 3 working days</strong> after confirmation of cancellation.</p>
                </div>
            </div>

            {/* Notes */}
            <div className="border-l-4 border-yellow-500 bg-yellow-50 shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-yellow-700 flex items-center font-serif">
                    <FaInfoCircle className="mr-2 text-yellow-600" />
                    Notes
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 font-sans">
                    <li>Bookings are confirmed only after advance payment.</li>
                    <li>Limited seats – <strong>First come, First served</strong> basis.</li>
                </ul>
            </div>
        </div>
    );
};

export default BookingAndRefund;
