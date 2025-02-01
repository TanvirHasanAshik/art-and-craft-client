import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommonBanner from "../CommonBanner/CommonBanner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const CraftViewDetails = () => {
    const params = useParams();
    const [craft, setCraft] = useState({});
    const pageName = `${craft?.itemName}`;

    useEffect(() => {
        fetch(`http://localhost:5000/single-craft-item/${params.id}`)
            .then(res => res.json())
            .then(data => setCraft(data))
    }, [params.id])
    return (
        <>
            <Helmet>
                <title>Craft View Details</title>
            </Helmet>
            <CommonBanner pageName={pageName} />
            <section className="my-20">
                <div className="flex flex-col md:flex-row justify-between gap-5 items-center mx-4">
                    <div className=" w-full md:w-1/2 ">
                        <Fade cascade>
                            <LazyLoadImage src={craft?.photo} />
                        </Fade>
                    </div>
                    <div className=" w-full md:w-1/2">
                        <Fade cascade>
                            <div className="border-b-2 pb-4 space-y-4">
                                <h2 className="font-semibold">{craft?.itemName}</h2>
                                <h2 className="font-semibold">${craft?.price}</h2>
                                <h2 className="text-sm text-cyan-950">{craft?.description}</h2>
                            </div>
                            <div className="border-b-2 pb-4 space-y-4">
                                <h2 className="font-semibold">subcategory: {craft?.subcategory}</h2>
                                <h2 className="font-semibold">processing Time: {craft?.processing_time}</h2>
                                <h2 className="text-sm font-semibold text-cyan-950">Customization: {craft?.customization}</h2>
                                <h2 className="text-sm font-semibold text-cyan-950">Produce: {craft?.name}</h2>
                                <h2 className="text-sm font-semibold text-cyan-950">Email: {craft?.email}</h2>
                            </div>
                        </Fade>
                    </div>

                </div>
            </section>
        </>
    );
};

export default CraftViewDetails;