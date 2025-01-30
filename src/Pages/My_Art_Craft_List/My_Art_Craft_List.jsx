import { Fade } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const My_Art_Craft_List = ({ myCraft, myCrafts, setMyCrafts }) => {
    const {
        _id, categoryName, photo, itemName, price, processing_time, rating, customization, stock, description
    } = myCraft;

    const handleDelete = (id) => {
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
                fetch(`http://localhost:5000/delete-craft-item/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data?.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const newCraft = myCrafts.filter(craft => craft._id !== id);
                            setMyCrafts(newCraft);
                        }

                    })
            }
        });
    }

    return (
        <Fade cascade>
            <section className="w-full lg:w-2/3 border lg:mx-auto min-h-screen md:min-h-60 ">
                {/* craft card */}
                <div className="flex flex-col md:flex-row items-center">
                    {/* craft card image */}
                    <figure className="overflow-hidden w-full h-60 md:w-80 ml-2">
                        <LazyLoadImage className=" w-full md:w-80 h-60 object-cover transform transition-transform duration-500 hover:scale-110" src={photo} />
                    </figure>

                    {/* craft card details */}
                    <div className="mx-auto w-full">
                        <div className="flex m-4 flex-col md:flex-row gap-x-10 bg-amber-100 p-4 rounded-xl">
                            <div className="space-y-1">
                                <p className="text-accent text-sm font-semibold"><span className="text-purple-900 font-semibold">Craft: </span>{itemName}</p>
                                <p className="text-accent text-sm font-semibold"><span className="text-purple-900 font-semibold">price: </span>${price}</p>
                                <p className="text-accent text-sm font-semibold"><span className="text-purple-900 font-semibold">Category: </span>{categoryName}</p>
                                <p className="text-accent text-sm font-semibold"><span className="text-purple-900 font-semibold">process Time: </span>{processing_time}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-accent text-sm font-semibold">
                                    <span className="text-purple-900 font-semibold">customization: </span>{customization}
                                </p>
                                <p className="text-accent text-sm font-semibold">
                                    <span className="text-purple-900 font-semibold">Stock:
                                    </span> {stock}
                                </p>
                                <p className="text-accent text-sm font-semibold">
                                    <span className="text-purple-900 font-semibold">
                                        rating: </span> {rating}</p>
                            </div>
                        </div>
                        <div className="mx-4 text-sm">
                            <p>{description.slice(0, 100)}...
                                <Link
                                    to={`/craft-view-details/${_id}`}
                                    className="btn bg-purple-950 text-white hover:text-black  btn-xs">
                                    view details</Link>
                            </p>
                        </div>

                        {/* update and delete button */}
                        <div className="space-x-4 my-4 flex justify-center ">
                            <Link to={`/update-craft/${_id}`}>
                                <button className="btn btn-accent text-2xl tooltip rounded-sm" data-tip="update"><FaEdit /></button>
                            </Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn btn-error text-2xl tooltip rounded-sm" data-tip="delete"><RiDeleteBin6Line /></button>
                        </div>
                    </div>
                </div>

            </section>


        </Fade>
    );
};

export default My_Art_Craft_List;
