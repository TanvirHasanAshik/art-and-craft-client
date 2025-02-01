import { Helmet } from "react-helmet";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <Helmet>
                <title>{error.statusText}</title>
            </Helmet>
            <div className="h-screen flex flex-col justify-center items-center">
                <Link to='/' className="text-center mb-4 hover:border-b-2 text-blue-600">Home</Link>
                <h1 className="font-bold text-4xl md:text-8xl text-error">
                    {error.status + ' ' + error.statusText}
                </h1>
            </div>
        </>
    );
};

export default NotFound;