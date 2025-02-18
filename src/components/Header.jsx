import {useState} from "react";
import {Link} from "react-router-dom";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="bg-gray-300">
            <div className="container mx-auto w-9/10 md:w-3/4 py-1 px-2 md:px-6 ">
                <div className="flex items-center justify-between text-black">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={`${import.meta.env.BASE_URL}/icons/logo.png`} alt="logo" className="w-12 h-12"/>
                        <p className="font-bold text-md md:text-2xl font-serif">AltayCosmos</p>
                    </Link>
                    <nav>
                        <section className="MOBILE-MENU flex lg:hidden">
                            <div
                                className="HAMBURGER-ICON space-y-2"
                                onClick={() => setIsNavOpen((prev) => !prev)}
                            >
                                <span className="block h-0.5 w-8 bg-gray-600"></span>
                                <span className="block h-0.5 w-8 bg-gray-600"></span>
                                <span className="block h-0.5 w-8 bg-gray-600"></span>
                            </div>

                            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                                <div
                                    className="absolute top-0 right-0 px-8 py-8"
                                    onClick={() => setIsNavOpen(false)}
                                >
                                    <svg
                                        className="h-8 w-8 text-gray-600"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18"/>
                                        <line x1="6" y1="6" x2="18" y2="18"/>
                                    </svg>
                                </div>
                                <ul className="flex flex-col items-center justify-between min-h-[250px]">
                                    <li className="my-8 uppercase hover:text-cyan-600">
                                        <Link to="/tours">Туры</Link>
                                    </li>
                                    <li className="my-8 uppercase hover:text-cyan-600">
                                        <Link to="/gallery">Галерея</Link>
                                    </li>
                                    <li className="my-8 uppercase hover:text-cyan-600">
                                        <a href="#feedbacks">Отзывы</a>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <ul className="hidden space-x-8 lg:flex">
                            <li className="my-8 uppercase hover:text-cyan-600">
                                <Link to="/tours">Туры</Link>
                            </li>
                            <li className="my-8 uppercase hover:text-cyan-600">
                                <Link to="/gallery">Галерея</Link>
                            </li>
                            <li className="my-8 uppercase hover:text-cyan-600">
                                <a href="#feedbacks">Отзывы</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
