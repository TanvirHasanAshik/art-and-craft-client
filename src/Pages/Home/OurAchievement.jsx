import { Bounce } from "react-awesome-reveal";
import CountUp from "react-countup";

const OurAchievement = () => {
    return (
        <div className="mb-40 py-20">
            <Bounce>
                <h2 className="text-3xl font-bold text-accent text-center">Our <span className="text-purple-900 border-b-4 border-purple-900 pb-2">Achievement</span></h2>
            </Bounce>
            <div className="mt-20 text-center flex flex-col md:flex-row gap-4">
                <div className="rounded-xl border-2 p-10">
                    <h2 className="text-2xl font-semibold text-purple-900  ">Our Total Projects</h2>
                    <Bounce><CountUp className="text-3xl font-bold text-error" end={500} duration={50} /></Bounce>
                </div>
                <div className="rounded-xl border-2 p-10">
                    <h2 className="text-2xl font-semibold text-purple-900">Our Total Clients</h2>
                    <Bounce><CountUp className="text-3xl font-bold text-error" end={1200} duration={50} /></Bounce>
                </div>
                <div className="rounded-xl border-2 p-10">
                    <h2 className="text-2xl font-semibold text-purple-900">Clients satisfaction</h2>
                    <Bounce><CountUp className="text-3xl font-bold text-error" end={500} duration={50} /><span className="font-bold text-error"> %</span></Bounce>
                </div>
                <div className="rounded-xl border-2 p-10">
                    <h2 className="text-2xl font-semibold text-purple-900">Our Running Projects</h2>
                    <Bounce><CountUp className="text-3xl font-bold text-error" end={100} duration={50} /></Bounce>
                </div>
            </div>

        </div>
    );
};

export default OurAchievement;