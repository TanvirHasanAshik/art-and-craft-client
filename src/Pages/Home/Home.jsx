import { Helmet } from 'react-helmet';
import Banner from './Banner';
import CategoriesWeOffer from './CategoriesWeOffer';
import HomeCraftItemsSection from './HomeCraftItemsSection';
import OurAchievement from './OurAchievement';

const Home = () => {

    return (
        <>
            <Helmet>
                <title>Art & craft | Home</title>
            </Helmet>
            <Banner />
            <HomeCraftItemsSection />
            <CategoriesWeOffer />
            <OurAchievement />
        </>
    );
};

export default Home;