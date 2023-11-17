import { Helmet } from "react-helmet-async";
import PopularMenu from "../../PopularMenu/PopularMenu";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimoinals from "../Testimonials/Testimoinals";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bsitro Boss | Home</title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <Testimoinals></Testimoinals>
        </div>
    );
};

export default Home;