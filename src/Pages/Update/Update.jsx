import { useLoaderData, useNavigate } from "react-router-dom";
import CommonBanner from "../CommonBanner/CommonBanner";
import Swal from "sweetalert2";

const Update = () => {
    // const { id } = useParams();
    const craftData = useLoaderData();
    const { customization, description, itemName, photo, price, processing_time, rating, stock, subcategory, _id } = craftData;

    const pageName = `Update your ${itemName}`;
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObject = Object.fromEntries(formData);
        fetch(`http://localhost:5000/update-a-craft/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formObject)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Your data updated successfully",
                        icon: "success",
                        draggable: true
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/my-craft-list')
                        }
                    });
                }
            })
    }

    return (
        <>
            <CommonBanner pageName={pageName} />
            <section>
                <form onSubmit={handleSubmit} className="card-body space-y-2">
                    {/* input photo url, item name */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered input-accent" defaultValue={photo} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Item Name</span>
                            </label>
                            <input type="text" name="itemName" placeholder="Item name" className="input input-bordered input-accent" defaultValue={itemName} required />
                        </div>
                    </div>

                    {/* input subcategory, price, processing_time */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Subcategory name</span>
                            </label>
                            <input type="text" name="subcategory" placeholder="subcategory name" className="input input-bordered input-accent" defaultValue={subcategory} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Product Price" className="input input-bordered input-accent" defaultValue={price} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">processing time</span>
                            </label>
                            <input type="text" name="processing_time" placeholder="processing time" className="input input-bordered input-accent" defaultValue={processing_time} required />
                        </div>

                        {/* rating, customization,stock */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Rating</span>
                            </label>
                            <select name='rating' className="select select-accent w-full"
                                defaultValue={rating}
                            >
                                <option disabled selected>Please select a rating</option>
                                <option>One star</option>
                                <option>Two star</option>
                                <option>Three star</option>
                                <option>Four star</option>
                                <option>Five star</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Customization</span>
                            </label>
                            <select name='customization' defaultValue={customization} className="select select-accent w-full">
                                <option disabled selected>Please select a Status</option>
                                <option>Okay</option>
                                <option>Not okay</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Stock</span>
                            </label>
                            <select name='stock' defaultValue={stock} className="select select-accent w-full">
                                <option disabled selected>Please select a rating</option>
                                <option>In stock</option>
                                <option>Made to order</option>
                            </select>
                        </div>
                    </div>

                    {/* input description */}
                    <div className="grid grid-cols-1 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Description</span>
                            </label>
                            <textarea name="description" defaultValue={description} placeholder="Description" className="textarea textarea-bordered textarea-accent" required></textarea>
                        </div>
                    </div>
                    <input className="btn bg-purple-950 text-white w-full md:w-auto hover:text-black" type="submit" value="Update" />
                </form>
            </section>
        </>
    );
};

export default Update;