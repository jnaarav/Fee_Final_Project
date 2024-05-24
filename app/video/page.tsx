"use client";
import React from "react";
import {UnderlineHeading} from "@/app/page";
import {motion} from "framer-motion";
import {FaMoon, FaSun} from "react-icons/fa6";
import {useTheme} from "@/app/store/Theme";

const Page = () => {


    React.useEffect((): void => {
        (
            async (): Promise<void> => {
                //@ts-ignore
                const locomotiveScroll = (await import("locomotive-scroll")).default;
                const LocomotiveScroll = new locomotiveScroll();
            }
        )()
    }, [])

    const [pageChange, setPageChange] = React.useState(false);
    const NavbarOptions: { name: string, link: string }[] = [
        {name: "Home", link: "/"},
        {name: "Community", link: "/community"},
        {name: "Dashboard", link: "/dashboard"},
    ];

    const {c_backgroundColor, c_color, set_background_color, set_color} = useTheme();
    return <React.Fragment>
        <motion.main
            animate={{opacity: pageChange ? 0 : 1}}
            transition={{opacity: {duration: 1.75}}}
            className={`${c_backgroundColor === "black" ? `bg-black text-white` : `bg-white text-black`} p-6 w-screen max-h-[150vh] h-[150vh] flex flex-col`}
        >
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
                    initial={{x: -1000}}
                    transition={{
                        duration: 1.25,
                        ease: [0.85, 0, 0.15, 1],
                        delay: 0.9
                    }}
                    className={`text-[9rem] leading-[8rem] uppercase font-bold inline-block`}>
                    Video Call
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
            <div className={`flex-1 w-full p-4 flex justify-center items-center`}></div>
        </motion.main>
    </React.Fragment>
}
export default Page;