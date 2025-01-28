import { useEffect, useState } from 'react';
import AllCraftTable from '../AllCraftTable/AllCraftTable';

const All_Art_And_Craft_Items = () => {

    const [craftItems, setCraftItems] = useState([]);
    const [query, setQuery] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/all-craft-items/?skip=${query}`)
            .then(res => res.json())
            .then(data => {
                setCraftItems([...craftItems, ...data]);
            })
    }, [query]);

    return (
        <div className='my-20'>
            <div className="overflow-x-auto">

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Art & Craft</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            craftItems?.map(craftItem => <AllCraftTable
                                key={craftItem._id}
                                craftItem={craftItem}
                            />)
                        }
                    </tbody>
                </table>
            </div>


            {craftItems?.length !== query &&
                < button
                    className="btn block mx-auto text-white bg-purple-800 my-4"
                    onClick={() => setQuery(craftItems?.length)}
                >
                    Show more</button>}
        </div >
    );
};

export default All_Art_And_Craft_Items;