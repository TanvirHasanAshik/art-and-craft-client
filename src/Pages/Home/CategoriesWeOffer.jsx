import { Bounce, Fade } from 'react-awesome-reveal';
import vision from '../../assets/vision-animation.json';
import Lottie from 'lottie-react';
const CategoriesWeOffer = () => {
    return (
        <div className='mx-4 my-40 border p-10 rounded-2xl'>
            {/* section title category we offer */}
            <Bounce>
                <h2 className="text-3xl font-bold text-secondary text-center">Category
                    <span className='text-purple-900 border-b-4 border-purple-900 pb-2 ml-4'>
                        We offer
                    </span>
                </h2>
            </Bounce>

            <Fade cascade>
                <div className='flex flex-col-reverse md:flex-row gap-8 mx-auto mt-4 items-center'>
                    <div className='space-y-6 w-full md:w-1/2 '>
                        <h4 className='text-xl font-semibold'>🎨 Masterpieces That Inspire Creativity</h4>
                        <p className=''>Dive into a world of awe-inspiring art and craft creations. From intricate designs to timeless masterpieces, explore collections that spark imagination and elevate your creativity.</p>
                        <h4 className='text-xl font-semibold'>🧶 Craft Categories Curated for Creative Souls</h4>
                        <p className=''>Whether you're a seasoned artisan or just beginning your creative journey, discover diverse craft categories tailored to every artistic passion — from vibrant paintings to elegant pottery.</p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <Lottie animationData={vision} loop={true} />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default CategoriesWeOffer;