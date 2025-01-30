import { useEffect, useState } from "react";
import { Bounce } from "react-awesome-reveal";
import HomeCraftItemSingle from "./HomeCraftItemSingle";

const HomeCraftItemsSection = () => {
    const [categoryName, setCategoryName] = useState('Painting and Drawing');
    const [crafts, setCrafts] = useState([]);
    const [limit, setLimit] = useState(4);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/craft-category-data?category=${categoryName}`)
            .then(res => res.json())
            .then(data => {
                setCrafts(data);
                setLoading(false);
            });

    }, [categoryName]);

    const handleChange = e => {
        const category = e.target.value;
        setCategoryName(category);
    }
    return (
        <>
            {/* section title Craft Items */}
            <Bounce>
                <h2 className="text-3xl text-secondary font-bold text-center my-20">Craft <span className="text-purple-900 border-b-4 border-purple-800 pb-1">Items</span></h2>
            </Bounce>

            {/* Craft items section */}
            <section className="flex flex-col lg:flex-row mx-5 gap-8">
                <form onChange={handleChange} className="space-y-4 w-full lg:w-52">
                    <Bounce className="text-xl bg-purple-900 text-white font-semibold px-4 py-2">Craft Categories</Bounce>
                    <div className="form-control">
                        <label className="cursor-pointer flex items-center gap-2">
                            <input name="radio" type="radio" defaultChecked value="Painting and Drawing" className="checkbox checkbox-secondary" />
                            <span className="label-text">Painting and Drawi</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer flex items-center gap-2">
                            <input name="radio" type="radio" value="Sculpture and Modeling" className="checkbox checkbox-secondary" />
                            <span className="label-text">Sculpture and Modeli</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer flex items-center gap-2">
                            <input name="radio" type="radio" value="Textile Arts" className="checkbox checkbox-secondary" />
                            <span className="label-text">Textile Arts</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer flex items-center gap-2">
                            <input name="radio" type="radio" value="Paper Crafts & Glass Art" className="checkbox checkbox-secondary" />
                            <span className="label-text">Paper Crafts</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer flex items-center gap-2">
                            <input name="radio" type="radio" value="Ceramics and Pottery" className="checkbox checkbox-secondary" />
                            <span className="label-text">Ceramics and Potte</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer flex items-center gap-2">
                            <input name="radio" type="radio" value="Jute & wooden Crafts" className="checkbox checkbox-secondary" />
                            <span className="label-text">Jute & wood</span>
                        </label>
                    </div>
                </form>

                {/* categories craft card display */}
                {crafts.length > 0 ?
                    <div>
                        <span onClick={() => setLimit(crafts.length)} className="text-right cursor-pointer text-purple-500 hover:border-b-2"> See all</span>
                        <div className="grow lg:grow-0 grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-2">

                            {
                                crafts.slice(0, limit).map(craft => <HomeCraftItemSingle
                                    key={craft._id}
                                    craft={craft}
                                />)
                            }
                        </div>
                    </div>
                    :
                    <div className="grow text-center">
                        {
                            loading ? <h2 className="text-xl font-semibold text-success text-center grow">Data loading...</h2> :
                                <h2 className="text-3xl font-bold text-error text-center grow">Data not available</h2>
                        }
                    </div>
                }
            </section>
        </>
    );
};

export default HomeCraftItemsSection;