import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../Hooks/UseMenu";
import Sectiontitle from "../../../Component/SectionTitle/Sectiontitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const deserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Main cover */}
      <Cover img={menuImg} title="Our Menu"></Cover>
      <Sectiontitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></Sectiontitle>
      {/* Offered Menu Item */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desert Menu Item */}
      <MenuCategory
        title="dessert"
        items={deserts}
        img={desertImg}
      ></MenuCategory>
      {/* Pizza Menu Item */}
      <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
      {/* Salad */}
      <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
      {/* soup */}
      <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
