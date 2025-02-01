import { useContext, useEffect, useState } from "react";
import { UserContext } from "../AuthContext/AuthContext";
import CommonBanner from "../CommonBanner/CommonBanner";
import My_Art_Craft_List from "../My_Art_Craft_List/My_Art_Craft_List";
import { Helmet } from "react-helmet";

const My_Art_Craft_Lists = () => {
    const { user } = useContext(UserContext);
    const pageName = `My art and craft list (${user.displayName})`;
    const [myCrafts, setMyCrafts] = useState([]);
    const [limit, setLimit] = useState(3);
    useEffect(() => {

        fetch(`http://localhost:5000/my-craft?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyCrafts(data));

    }, [user?.email])

    return (
        <>
            <Helmet>
                <title>My Art Craft Lists</title>
            </Helmet>
            <CommonBanner pageName={pageName} />
            <section className="my-20 ">
                <div className="grid grid-cols-1 mx-4 gap-8">
                    {
                        myCrafts.slice(0, limit).map(myCraft => <My_Art_Craft_List
                            key={myCraft._id}
                            myCraft={myCraft}
                            myCrafts={myCrafts}
                            setMyCrafts={setMyCrafts}
                        />)
                    }
                </div>
                <div className="flex justify-center my-8">
                    {limit <= myCrafts.length && <button
                        onClick={() => setLimit(limit + 3)}
                        className="btn mx-auto text-white bg-purple-700 rounded-none hover:text-black"
                    >See more</button>}
                </div>
            </section>
        </>
    );
};

export default My_Art_Craft_Lists;