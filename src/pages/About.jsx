import React from 'react'

const About = () => {
    return (
        <>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://cdn.pixabay.com/photo/2023/07/06/09/58/mountain-8110139_1280.jpg)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h3 className="mb-5 text-4xl font-bold italic">
                            JN Trip Makers
                            
                        </h3>
                        <h3 className='font-serif italic text-3xl'>Journey with Joy</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About