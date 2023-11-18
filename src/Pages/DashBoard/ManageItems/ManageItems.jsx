import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Sectiontitle from "../../../Component/SectionTitle/Sectiontitle";
import useMenu from "../../../Hooks/UseMenu";
import Swal from "sweetalert2";

const ManageItems = () => {
  const [menu] = useMenu();

  const handleDeleteItem = item => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        }
      });
  }
  return (
    <div>
      <Sectiontitle
        heading="Mange All Items"
        subHeading="Hurry Up"
      ></Sectiontitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index)=> 
                   <tr key={item._id}>
                   <td>
                     {index + 1}
                   </td>
                   <td>
                     <div className="flex items-center gap-3">
                       <div className="avatar">
                         <div className="mask mask-squircle w-12 h-12">
                           <img
                             src={item.image}
                             alt="Avatar Tailwind CSS Component"
                           />
                         </div>
                       </div>
                     </div>
                   </td>
                   <td>
                    {item.name}
                   </td>
                   <td className="text-right">$ {item.price}</td>
                   <td>
                   <button
               
                 className="btn btn-ghost btn-lg bg-orange-500"
               >
                <FaEdit className="text-white"></FaEdit>
               
               </button>
                   </td>
                   <td>
                   <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                   </td>
                 </tr>
                )}
           
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
