"use client";
import React from "react";
import {create} from "zustand";
import {AnimatePresence, motion} from "framer-motion";
import {useTheme} from "@/app/store/Theme";
import {FaCheck, FaCross, FaMoon, FaSun} from "react-icons/fa6";
import {MdDelete} from "react-icons/md";
import {UnderlineHeading} from "@/app/page";
import {RxCross1} from "react-icons/rx";

const Dashboard = () => {


    React.useEffect(() => {
        (
            async (): Promise<void> => {
                //@ts-ignore
                const locomotiveScroll = (await import("locomotive-scroll")).default;
                const LocomotiveScroll = new locomotiveScroll();
            }
        )()
    }, [])


    const {c_backgroundColor, c_color, set_background_color, set_color} = useTheme();
    const [current_user_name, set_current_user_name] = React.useState<string | null>("");
    React.useEffect(() => {
        set_current_user_name(localStorage.getItem("user_name"));
    }, [])
    const [pageChange, setPageChange] = React.useState(false);
    const NavbarOptions: { name: string, link: string }[] = [
        {name: "Home", link: "/"},
        {name: "Community", link: "/community"},
        {name: "About US", link: "/about"},
    ];

    const appointments = [
        {doctor_name: "Dr. Smith", mode: "In-person", kind: "Checkup", education: "MD, University of Medical Sciences"},
        {doctor_name: "Dr. Patel", mode: "Virtual", kind: "Consultation", education: "MBBS, Harvard Medical School"},
        {
            doctor_name: "Dr. Lee",
            mode: "In-person",
            kind: "Physical Therapy",
            education: "DPT, University of Physical Therapy"
        },
        {
            doctor_name: "Dr. Garcia",
            mode: "Virtual",
            kind: "Psychological Evaluation",
            education: "PhD , Stanford University"
        },
        {doctor_name: "Dr. Kim", mode: "In-person", kind: "Dental Cleaning", education: "DDS, University of Dentistry"},
        {
            doctor_name: "Dr. Jones",
            mode: "Virtual",
            kind: "Nutrition Counseling",
            education: "MS , Columbia University"
        },
        {doctor_name: "Dr. Nguyen", mode: "In-person", kind: "Eye Exam", education: "OD, Optometry School"},
        {
            doctor_name: "Dr. Taylor",
            mode: "Virtual",
            kind: "Speech Therapy",
            education: "MA , University of Communication Sciences"
        },
        {
            doctor_name: "Dr. Martinez",
            mode: "In-person",
            kind: "X-ray Examination",
            education: "MD, Radiology Residency Program"
        },
        {
            doctor_name: "Dr. Brown",
            mode: "Virtual",
            kind: "Psychiatric Therapy",
            education: "MD , Yale University School of Medicine"
        },
        // Add more appointments as needed
    ];

    const [appointment_state, set_appointment_state] = React.useState([
        "Appointment with Dr.Ali",
        "Video Conference with Dr.Sejal",
    ])
    return <React.Fragment>
        {pageChange && <div className={`absolute top-0 left-0 bg-black h-screen w-screen`}></div>}
        <motion.main
            animate={{opacity: pageChange ? 0 : 1}}
            transition={{opacity: {duration: 1.75}}}
            className={`${c_backgroundColor === "black" ? `bg-black text-white` : `bg-white text-black`} p-6 w-screen min-h-[300vh]`}>

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
                    Dashboard
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


            <section
                className={`h-[70vh] gap-[1rem] flex justify-center py-6 items-center`}>
                <motion.div
                    data-scroll
                    animate={{
                        opacity: 1
                    }}
                    initial={{
                        opacity: 0
                    }}
                    transition={{
                        duration: 1, delay: 1.25
                    }}
                    data-scroll-speed={"0.25"}
                    className={`bg-[#212121] p-6 h-full flex-1 relative rounded-[1.5rem]`}>
                    <h1 className={`text-[2rem] underline`}>All Appointments: </h1>
                    {appointment_state.map((item: string, index: number) => {
                        return <Appointments key={index} array={appointment_state} setArray={set_appointment_state}
                                             text={item}/>
                    })}
                    {appointment_state.length == 0 ? <div className={`py-10`}>No More Appointments</div> : <div></div>}
                </motion.div>

            </section>

            <UnderlineHeading text={"Available Doctors"}/>

            <div className={`grid grid-cols-2 gap-[1rem]`}>
                {appointments.map((item, index) => {
                    return <Doctors array={appointment_state} setArray={set_appointment_state} key={index} index={index}
                                    doctor_name={item.doctor_name} mode={item.mode} kind={item.kind}
                                    education={item.education}/>
                })}
            </div>
        </motion.main>
    </React.Fragment>
}


interface DoctorsType {
    doctor_name: string,
    mode: string,
    kind: string,
    education: string,
    index: number,
    array: string[],
    setArray: Function
}

const Doctors = ({doctor_name, mode, kind, education, index, array, setArray}: DoctorsType) => {

    const [show, setShow] = React.useState(false);
    const input_ref = React.useRef<HTMLTextAreaElement>(null);


    function handleSubmit(): void {
        // @ts-ignore
        const text: string = `${input_ref?.current.value} with ${doctor_name}`;
        setShow(false);
        setArray((prev: any) => [...prev, text]);
    }

    return <React.Fragment>
        <motion.div
            whileInView={{
                y: 0,
                opacity: 1
            }}
            initial={{
                y: 100,
                opacity: 0
            }}
            transition={{
                duration: 0.25, delay: 0.05 * index
            }}
            className={`bg-[#212121] my-10 min-h-[5rem] max-w-[45rem] rounded-[1.5rem] p-6`}>
            <h1 className={`text-[1.5rem] flex justify-between items-center`}>
            <span className={`flex-1`}>
                {doctor_name}
            </span>
                <span className={`text-[1rem]`}>{education}</span>
            </h1>

            <div className={`py-4 flex justify-between items-center text-[1.5rem]`}>
                Kind: {kind}
            </div>
            <button
                onClick={() => setShow(true)}
                className={`bg-green-500 w-full text-white  p-2 rounded-xl gap-[1.5rem]`}>Book
            </button>
        </motion.div>

        <AnimatePresence>
            {show &&
                <motion.div
                    animate={{opacity: 1}}
                    initial={{opacity: 0}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.5, y: {ease: [0.85, 0, 0.15, 1]}}}
                    className={`fixed top-0 left-0 w-screen h-screen bg-black/80 flex justify-center items-center z-[20]`}>

                    <div className={`w-[60%] rounded-2xl bg-[#212121]  flex justify-center items-center flex-col p-8`}>
                        <h1 className={`text-[3rem] flex justify-between items-center w-full text-left`}>
                            <span>Book {doctor_name}</span>
                            <span className={`font-bold`} onClick={() => setShow(false)}><RxCross1 size={25}/></span>
                        </h1>
                        <h3 className={`text-[1.5rem] w-full text-left`}>Degree {education}</h3>
                        <textarea
                            ref={input_ref}
                            className={`w-full bg-transparent text-white mt-5 border-[0.25px] border-white rounded-xl p-2 min-h-[15rem]`}
                            placeholder={`Add description.`}></textarea>
                        <button onClick={handleSubmit}
                                className={`w-full p-4 rounded-xl  bg-green-500 font-semibold mt-5`}>Add Doctor
                        </button>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    </React.Fragment>
}


const Appointments = ({text, array, setArray}: { text: string, array: string[], setArray: Function }) => {
    const {c_backgroundColor} = useTheme();
    const [state, setState] = React.useState(false);

    function handleRemove(toRemove: string) {
        const filtered: string[] = array.filter((item: string): boolean => item !== toRemove);
        setArray(filtered);
    }

    return <div
        className={`p-4 flex ${state ? `hidden` : `block`} justify-between ${c_backgroundColor === "black" ? `bg-black text-white` : `text-black bg-white`} items-center gap-[1.5rem] rounded-xl mt-5`}>
        <span>{text}</span>
        <div className={`flex gap-[0.5rem]`}>
            <motion.button
                onClick={() => handleRemove(text)}
                whileHover={{scale: 1.1}}
                className={`bg-green-400 p-3 text-white rounded-xl`}>
                <FaCheck/>
            </motion.button>
            <motion.button
                onClick={() => handleRemove(text)}
                whileHover={{scale: 1.1}}
                className={`bg-red-400 p-3 text-white rounded-xl`}>
                <MdDelete/>
            </motion.button>
        </div>
    </div>
}


const useDashboardState = create((set): { pageChange: boolean, set_page_change: (something: boolean) => any } => ({
    pageChange: false,
    set_page_change: (something: boolean) => set({pageChange: something})
}))

export default Dashboard;