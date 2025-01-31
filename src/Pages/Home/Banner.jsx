import Lottie from "lottie-react";
import mountain from '../../assets/mountain.json';
import vesion from '../../assets/vision-animation.json';
import art from '../../assets/art.json';
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="carousel w-full h-screen md:h-[390] border mt-10 rounded-xl mx-auto">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="flex flex-col md:flex-row mx-auto items-center gap-8 w-4xl">
                    <div className="w-full md:w-1/2 space-y-4">
                        <h2 className="text-2xl font-bold text-gray-700">Mountain view Craft & art</h2>
                        <p className="text-sm text-gray-500">Experience the serenity of nature with our Mountain View-inspired crafts and art collection. Each piece captures the majestic beauty of towering peaks, lush valleys, and tranquil landscapes, bringing a touch of the outdoors into your space. Perfect for nature lovers and art enthusiasts alike.</p>
                        <Link to="/all-art-craft-items"><button className="btn btn-primary rounded-none mt-8">Explore all</button></Link>
                    </div>
                    <Lottie className="w-full md:w-1/2" animationData={mountain} loop={true} />
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="flex flex-col md:flex-row mx-auto items-center gap-8 w-4xl">
                    <div className="w-full md:w-1/2 space-y-4">
                        <h2 className="text-2xl font-bold text-gray-700">Sculpture and Modeli</h2>
                        <p className="text-sm text-gray-500">Experience the serenity of nature with our Mountain View-inspired crafts and art collection. Each piece captures the majestic beauty of towering peaks, lush valleys, and tranquil landscapes, bringing a touch of the outdoors into your space. Perfect for nature lovers and art enthusiasts alike.</p>
                        <Link to="/all-art-craft-items"><button className="btn btn-success rounded-none mt-8">Explore all</button></Link>
                    </div>
                    <Lottie className="w-full md:w-1/2" animationData={art} loop={true} />
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="flex flex-col md:flex-row mx-auto items-center gap-8 w-4xl">
                    <div className="w-full md:w-1/2 space-y-4">
                        <h2 className="text-2xl font-bold text-gray-700">Ceramics and Potte</h2>
                        <p className="text-sm text-gray-500">Experience the serenity of nature with our Mountain View-inspired crafts and art collection. Each piece captures the majestic beauty of towering peaks, lush valleys, and tranquil landscapes, bringing a touch of the outdoors into your space. Perfect for nature lovers and art enthusiasts alike.</p>
                        <Link to="/all-art-craft-items"><button className="btn btn-error rounded-none mt-8">Explore all</button></Link>
                    </div>
                    <Lottie className="w-full md:w-1/2" animationData={vesion} loop={true} />
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>

                </div>
            </div>
        </div>
    );
};

export default Banner;