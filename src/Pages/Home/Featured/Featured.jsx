
import Sectiontitle from '../../../Component/SectionTitle/Sectiontitle';
import featuredImg from '../../../assets/home/featured.jpg'

import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20' >
            <Sectiontitle subHeading="check it out"
            heading="Featured Item"
            >
            </Sectiontitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36'>
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className='md:ml-10 '>
                <p>Aug 20, 2029</p>
                <p className="uppercase">Where can I get some?</p>
                <p className="uppercase">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptas laborum tempora officia? A nulla aperiam nostrum perspiciatis iste. Nesciunt nostrum id reprehenderit voluptatem aspernatur accusamus ipsum. Eveniet, quasi. Perspiciatis?</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </div>

            </div>
                    </div>
    );
};

export default Featured;