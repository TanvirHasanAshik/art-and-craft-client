import { FaFacebookSquare, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" text-white bg-purple-950">
            <div className="flex flex-col md:flex-row justify-evenly gap-4 items-center pt-20">
                <div className="flex w-full md:w-fit justify-center px-4">
                    <input type="text" placeholder="Your email type here" className="input input-bordered w-full max-w-xs rounded-none text-purple-950 font-semibold" />
                    <button className="btn glass rounded-none ml-4">Subscribe</button>
                </div>
                <div className="flex text-3xl gap-4">
                    <FaFacebookSquare />
                    <FaGoogle />
                    <FaTwitter />
                    <FaGithub />
                </div>
            </div>
            <div className="h-fit md:h-80 flex flex-col md:flex-row gap-8 py-8 justify-evenly items-center">
                <aside>
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current">
                        <path
                            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
                    <p>
                        ACME Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav className=" flex flex-col">
                    <h6 className="footer-title">Services</h6>
                    <a className="link hover:text-purple-950 ">Branding</a>
                    <a className="link hover:text-purple-950 ">Design</a>
                    <a className="link hover:text-purple-950 ">Marketing</a>
                    <a className="link hover:text-purple-950 ">Advertisement</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="footer-title">Company</h6>
                    <a className="link hover:text-purple-950 ">About us</a>
                    <a className="link hover:text-purple-950 ">Contact</a>
                    <a className="link hover:text-purple-950 ">Jobs</a>
                    <a className="link hover:text-purple-950 ">Press kit</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link hover:text-purple-950 ">Terms of use</a>
                    <a className="link hover:text-purple-950 ">Privacy policy</a>
                    <a className="link hover:text-purple-950 ">Cookie policy</a>
                </nav>
            </div>
        </div>
    );
};

export default Footer;