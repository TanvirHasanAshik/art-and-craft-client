import { Fade } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const HomeCraftItemSingle = ({ craft }) => {
    const { _id, photo, itemName, customization, stock, rating } = craft;
    const navigate = useNavigate()

    return (
        <Fade cascade>
            <div onClick={() => navigate(`/craft-view-details/${_id}`)} className="card card-compact border w-full md:w-52 rounded-none cursor-pointer">
                <figure className="overflow-hidden">
                    <LazyLoadImage className="w-full h-40 object-cover transform transition-transform duration-500 hover:scale-110" src={photo} />
                </figure>
                <div className="card-body">
                    <h2 className=" font-bold text-md">{itemName.slice(0, 22)}</h2>
                    <p className="text-purple-900 text-sm">Customization: {customization}</p>
                    <p className="text-purple-900 text-sm">Stock: {stock}</p>
                    <p className="text-purple-900 text-sm">Rating: {rating}</p>
                </div>
            </div>
        </Fade>


    );
};

export default HomeCraftItemSingle;