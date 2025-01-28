import { useContext } from "react";
import { UserContext } from "../AuthContext/AuthContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const AllCraftTable = ({ craftItem }) => {
    const { _id, subcategory, description, stock, itemName, photo } = craftItem;
    return (
        <tr >
            <td>
                <Fade cascade>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <LazyLoadImage src={photo} />

                            </div>
                        </div>
                        <div>
                            <div className="font-semibold text-neutral">{itemName}</div>
                        </div>
                    </div>
                </Fade >
            </td>
            <td>
                <Fade cascade>
                    <div className="font-semibold text-gray-700">{subcategory}</div>
                </Fade >
            </td>
            <td>
                <Fade cascade>
                    <div className="text-sm text-neutral">{description.slice(0, 50)}...</div>
                </Fade >
            </td>
            <td>
                <Fade cascade>
                    <div className="font-semibold text-neutral">{stock}</div>
                </Fade >
            </td>
            <th>
                <Fade cascade>
                    <Link
                        to={`/craft-view-details/${_id}`}
                        className="btn bg-purple-950 text-white hover:text-black  btn-xs">
                        view details</Link>
                </Fade >

            </th>
        </tr >
    );
};

export default AllCraftTable;