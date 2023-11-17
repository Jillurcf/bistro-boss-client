
import Sectiontitle from "../../Component/SectionTitle/Sectiontitle";
import Menuitem from "../Shared/MenuItem/Menuitem";
import useMenu from "../../Hooks/UseMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item=> item.category === "popular")


  return (
    <section className="mb-12">
      <Sectiontitle
        heading="From Our Menu"
        subHeading="Popular Item"
      ></Sectiontitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <Menuitem key={item.id} item={item}></Menuitem>
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 mt-4">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
