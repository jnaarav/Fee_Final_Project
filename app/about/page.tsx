"use client";
import React from "react";
import {motion} from 'framer-motion';
import {useTheme} from "@/app/store/Theme";
import {FaMoon, FaSun} from "react-icons/fa6";
import {UnderlineHeading} from "@/app/page";

const Page = () => {
    React.useEffect(() => {
        (
            async () => {
                const locomotiveScroll = (await import("locomotive-scroll")).default;
                const LocomotiveScroll = new locomotiveScroll();
            }
        )()
    }, [])
    const {c_backgroundColor, c_color, set_color, set_background_color} = useTheme();
    const [pageChange, setPageChange] = React.useState(false);
    const NavbarOptions: { name: string, link: string }[] = [
        {name: "Home", link: "/"},
        {name: "Dashboard", link: "/dashboard"},
        {name: "Community", link: "/community"},
        {name: "About Us", link: "/about"}
    ]

    return <React.Fragment>
        {pageChange && <motion.div className={`bg-black absolute h-screen w-screen`}></motion.div>}
        <motion.main
            animate={{
                opacity: pageChange ? 0 : 1
            }}
            transition={{
                duration: 1.25
            }}
            className={`${c_backgroundColor === "black" ? `bg-black text-white` : `bg-white text-black`} pb-[5rem] w-screen min-h-screen p-6`}>
            <section>
                <motion.h1
                    animate={{y: 0}}
                    initial={{y: -200}}
                    transition={{
                        duration: 1.26,
                        ease: [0.85, 0, 0.15, 1],
                    }}
                    className={`text-[2.5rem] flex justify-between items-center p-1`}>
                    Website
                    <div>
                        <ul className={`text-[1rem] flex gap-[0.5rem]`}>
                            {NavbarOptions.map((item: { name: string, link: string }, index: number) => {
                                return <motion.li
                                    animate={{y: 0}}
                                    initial={{y: -200}}
                                    transition={{duration: 1.25, ease: [0.85, 0, 0.15, 1], delay: 0.1 * index}}
                                    onClick={() => {
                                        setPageChange(true);
                                        setTimeout(() => {
                                            window.location.assign(item.link)
                                        }, 1000)
                                    }}
                                    key={index}
                                    className={`border-[0.25px] ${c_backgroundColor === "black" ? `border-white hover:bg-white hover:text-black` : `border-black hover:text-white hover:bg-black`} p-2 rounded-full`}>{item.name}</motion.li>
                            })}

                            <motion.li
                                animate={{x: 0}}
                                initial={{x: 500}}
                                transition={{duration: 1.25, delay: 0.1 * 3, ease: [0.85, 0, 0.15, 1]}}
                                onClick={(): void => {
                                    if (c_backgroundColor === "black") {
                                        set_color("black");
                                        set_background_color("white");
                                    } else {
                                        set_color("white");
                                        set_background_color("black");
                                    }
                                }}
                                className={`border-[0.25px] ${c_backgroundColor === "black" ? `border-white hover:bg-white hover:text-black` : `border-black hover:bg-black hover:text-white`} flex justify-center items-center p-2 rounded-full`}
                            >
                                {c_backgroundColor === "black" ? <FaSun size={25}/> : <FaMoon size={25}/>}
                            </motion.li>
                        </ul>
                    </div>
                </motion.h1>
                <motion.h1
                    animate={{x: 0}}
                    initial={{x: -800}}
                    transition={{
                        duration: 1.25,
                        ease: [0.85, 0, 0.15, 1],
                        delay: 0.9
                    }}
                    className={`text-[9rem] leading-[8rem] uppercase font-bold inline-block`}>
                    SelfIntro
                    <motion.div
                        animate={{y: 0, opacity: 1}}
                        initial={{y: 50, opacity: 0}}
                        transition={{
                            duration: 1.25,
                            ease: [0.85, 0, 0.15, 1],
                            delay: 1.8
                        }}
                        className={`bg-green-300 h-[10px] w-full rounded-full`}/>

                </motion.h1>
            </section>

            <section className={`h-[300vh] flex justify-between items-center flex-col w-full  mt-10`}>
                <motion.div
                    className={`h-screen w-full flex relative mt-[10rem]`}>

                    <div className={`bg-white/10 p-6 backdrop-blur-2xl flex-1 h-full`}>
                        <UnderlineHeading text={"Abhishek Garg"}/>
                        <div className={`p-4 text-justify`}>
                            Meet Abhishek Garg force behind our front-end development team. With her
                            exceptional skills in HTML coding and meticulous attention to detail, she crafts stunning
                            web experiences. Not only does she excel in coding, but she also diligently maintains our
                            GitHub repositories, ensuring smooth collaboration and version control. Aarav's
                            dedication and expertise elevate our projects, making her an invaluable asset to our team.
                        </div>

                        <div>
                            <h1 className={`text-[1.6rem] p-4 underline`}>Speciality </h1>
                            <div className={`w-full p-4 flex gap-[1.5rem] `}>
                                <span className={`bg-green-300 p-3 rounded-xl text-black`}>HTML</span>
                                <span className={`bg-green-300 p-3 rounded-xl text-black`}>CSS</span>
                                <span className={`bg-green-300 p-3 rounded-xl text-black`}>Git/GitHub</span>
                            </div>
                        </div>
                    </div>

                    <motion.div

                        className={`bg-green-500 flex stroke-2 stroke-black text-[2.5rem] uppercase font-bold justify-center items-center flex-1 h-full`}>
                        <motion.div
                            data-scroll
                            data-scroll-speed={"0.5"}
                        >
                            Code Structure
                        </motion.div>
                    </motion.div>
                </motion.div>


                <motion.div
                    className={`h-screen w-full flex relative mt-[10rem]`}>

                    <div className={`bg-white/10 p-6 backdrop-blur-2xl flex-1 h-full`}>
                        <UnderlineHeading text={"Aditya Dubey"} />
                        <div className={`p-4 text-justify`}>
                            Aditya Dubey is known for his expertise in Tailwind CSS, a utility-first CSS framework that
                            helps in building responsive and fast UIs. He's likely skilled in using the various utility
                            classes provided by Tailwind CSS to efficiently style web interfaces without having to write
                            custom CSS. His work might involve creating responsive layouts, styling components, and
                            ensuring consistent design across different screen sizes.
                        </div>

                        <div>
                            <h1 className={`text-[1.6rem] p-4 underline`}>Speciality </h1>
                            <div className={`w-full p-4 flex gap-[1.5rem] `}>
                                <span className={`bg-green-300 p-3 rounded-xl text-black`}>CSS</span>
                                <span className={`bg-green-300 p-3 rounded-xl text-black`}>TailwindCSS</span>
                                <span className={`bg-green-300 p-3 rounded-xl text-black`}>TailwindUI Components</span>
                            </div>
                        </div>
                    </div>

                    <motion.div

                        className={`bg-green-500 flex stroke-2 stroke-black text-[2.5rem] uppercase font-bold justify-center items-center flex-1 h-full`}>
                        <motion.div
                            data-scroll
                            data-scroll-speed={"0.5"}
                        >
                            Beautiful Looking Website
                        </motion.div>
                    </motion.div>
                </motion.div>


                <motion.div
                    className={`h-screen w-full flex relative mt-[10rem]`}>

                    <div className={`bg-white/10 p-6 backdrop-blur-2xl flex-1 h-full`}>
                        <UnderlineHeading text={"Aarav jain"}/>
                        <div className={`p-4 text-justify`}>
                            Aarav Jain appears to specialize in TypeScript, a statically typed superset of
                            JavaScript that enhances code quality and developer productivity, particularly in
                            large-scale applications. Additionally, he is proficient in animation work using Framer
                            Motion, React Icons, and GSAP (GreenSock Animation Platform), which are popular libraries
                            for creating smooth and interactive animations in React applications.
                        </div>

                        <div>
                            <h1 className={`text-[1.6rem] p-4 underline`}>Speciality </h1>
                            <div className={`w-full p-4 flex gap-[1.5rem] `}>
                                <span className={`bg-green-300 p-3 rounded-xl text-black`}>TypeScript</span>
                                <span className={`bg-green-300 p-3 rounded-xl text-black`}>Framer Motion</span>
                                <span
                                    className={`bg-green-300 p-3 rounded-xl text-black`}>Custom Animated UI Components</span>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        className={`bg-green-500  flex stroke-2 stroke-black text-[2rem] uppercase font-bold justify-center items-center flex-1 h-full`}>
                        <motion.div
                            data-scroll
                            data-scroll-speed={"0.5"}
                            className={`text-center`}
                        >
                            Actual Front and Back End of Website
                        </motion.div>
                    </motion.div>
                </motion.div>

            </section>
        </motion.main>
    </React.Fragment>
}

export default Page;