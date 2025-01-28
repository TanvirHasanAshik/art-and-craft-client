import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const CommonBanner = ({ pageName }) => {
    return (
        <div className="hero min-h-40"
            style={{
                backgroundImage: "url(https://media.istockphoto.com/id/518185738/photo/child-drawing-top-view-artwork-workplace-with-creative-accessories.jpg?s=612x612&w=0&k=20&c=VquqIgnEQRvjku7UPht4ehNnFPMqmSKwwopUmMjC0kY=)",


            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                    <h1 className="mb-5 text-3xl font-bold">
                        <Typewriter
                            words={[pageName]}
                            loop={0}
                            cursor={true}
                            delaySpeed={10000}
                        />
                    </h1>


                </div>
            </div>
        </div>
    );
};

export default CommonBanner;