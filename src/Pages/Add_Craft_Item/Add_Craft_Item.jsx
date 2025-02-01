// Desc: Add Craft Item Page
import { useContext, useState } from 'react';
import CommonBanner from '../CommonBanner/CommonBanner';
import Swal from 'sweetalert2'
import { UserContext } from '../AuthContext/AuthContext';
import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';

const Add_Craft_Item = () => {
    const pageName = 'Add Craft Item';
    const [categoryName, setCategoryName] = useState('');
    const { user } = useContext(UserContext);

    const handleCategory = (e) => {
        e.preventDefault();
        setCategoryName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObject = Object.fromEntries(formData);
        const NewFromData = { categoryName, ...formDataObject };
        fetch('http://localhost:5000/craft-items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(NewFromData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Craft data added successfully",
                        icon: "success",
                        draggable: true
                    });
                    e.target.reset();
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <Helmet>
                <title>Add craft Items</title>
            </Helmet>
            <CommonBanner pageName={pageName} />

            {/*add craft category form*/}
            <section>
                <form onSubmit={handleSubmit} className="card-body space-y-2">
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center my-4">
                        <select onChange={handleCategory} className="select select-accent w-full md:w-auto ">
                            <option disabled selected>Please select a category</option>
                            <option>Painting and Drawing</option>
                            <option>Sculpture and Modeling</option>
                            <option>Textile Arts</option>
                            <option>Paper Crafts & Glass Art</option>
                            <option>Ceramics and Pottery</option>
                            <option>Jute & wooden Crafts</option>
                        </select>
                        <input className="btn bg-purple-950 text-white w-full md:w-auto hover:text-black" type="submit" value="Add craft data" />
                    </div>
                    <Fade cascade>
                        {categoryName && <>
                            {/* input photo url, item name */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered input-accent" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Item Name</span>
                                    </label>
                                    <input type="text" name="itemName" placeholder="Item name" className="input input-bordered input-accent" required />
                                </div>
                            </div>

                            {/* input subcategory, price, processing_time */}
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Subcategory name</span>
                                    </label>
                                    <input type="text" name="subcategory" placeholder="subcategory name" className="input input-bordered input-accent" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Price</span>
                                    </label>
                                    <input type="text" name="price" placeholder="Product Price" className="input input-bordered input-accent" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">processing time</span>
                                    </label>
                                    <input type="text" name="processing_time" placeholder="processing time" className="input input-bordered input-accent" required />
                                </div>

                                {/* rating, customization,stock */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Rating</span>
                                    </label>
                                    <select name='rating' className="select select-accent w-full">
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
                                    <select name='customization' className="select select-accent w-full">
                                        <option disabled selected>Please select a Status</option>
                                        <option>Okay</option>
                                        <option>Not okay</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Stock</span>
                                    </label>
                                    <select name='stock' className="select select-accent w-full">
                                        <option disabled selected>Please select a rating</option>
                                        <option>In stock</option>
                                        <option>Made to order</option>
                                    </select>
                                </div>
                            </div>

                            {/* input user name, user email */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">User Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="user name" className="input input-bordered input-accent" value={user?.displayName} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">User Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="user email" className="input input-bordered input-accent" value={user?.email} required />
                                </div>
                            </div>
                            {/* input description */}
                            <div className="grid grid-cols-1 gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Description</span>
                                    </label>
                                    <textarea name="description" placeholder="Description" className="textarea textarea-bordered textarea-accent" required></textarea>
                                </div>
                            </div>
                        </>}
                    </Fade>

                </form>
            </section>
        </>
    );
};

export default Add_Craft_Item;