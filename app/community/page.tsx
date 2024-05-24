"use client";
import React from "react";
import {useTheme} from "@/app/store/Theme";
import {motion} from "framer-motion";
import {FaMoon, FaSun} from "react-icons/fa6";
import {UnderlineHeading} from "@/app/page";


const CommunityStories = () => {

    React.useEffect(() => {
        (
            async () => {
                const locomotiveScroll = (await import("locomotive-scroll")).default;
                const LocomotiveScroll = new locomotiveScroll();
            }
        )()
    }, [])
    const {c_backgroundColor, c_color, set_background_color, set_color} = useTheme();
    const [pageChange, setPageChange] = React.useState(false);
    const NavbarOptions: { name: string, link: string }[] = [
        {name: "Home", link: "/"},
        {name: "Dashboard", link: "/dashboard"},
        {name: "About Us", link: "/about"}
    ]

    const patientStories = [
        {
            name: "John Doe",
            inner_text: "John was diagnosed with cancer at a young age. He underwent multiple rounds of chemotherapy and radiation therapy, but unfortunately, the cancer continued to spread. Despite the treatments, John's condition deteriorated rapidly. He experienced intense pain and discomfort, and simple everyday tasks became increasingly difficult for him. His family and friends rallied around him, offering love and support, but it was a challenging time for everyone involved. Eventually, John's body grew weaker, and he passed away peacefully surrounded by his loved ones. His story serves as a reminder of the devastating impact cancer can have on individuals and their families.",
            tags: ["cancer", "chemotherapy"],
            type: ["Tragic Medical Story"]
        },
        {
            name: "Jane Smith",
            inner_text: "Jane was born with a congenital heart defect that required multiple surgeries throughout her life. Despite the challenges, she remained optimistic and determined to live life to the fullest. She pursued her passions and dreams, never letting her condition hold her back. However, as she grew older, her heart condition worsened, and she began experiencing more frequent episodes of chest pain and shortness of breath. Her doctors informed her that she would need a heart transplant to survive. Jane underwent the transplant surgery, but sadly, her body rejected the new heart, and she passed away shortly after. Her story is a testament to her strength and resilience in the face of adversity.",
            tags: ["congenital heart defect", "heart transplant"],
            type: ["Tragic Medical Story"]
        },
        {
            name: "Michael Johnson",
            inner_text: "Michael was a young athlete with a promising future ahead of him. He excelled in sports and dreamed of one day playing professionally. However, his dreams were shattered when he was involved in a car accident that left him paralyzed from the waist down. Overnight, Michael's life changed drastically. He had to relearn how to perform even the most basic tasks and adjust to life in a wheelchair. Despite the challenges, Michael remained determined to pursue his passion for sports. He discovered wheelchair basketball and dedicated himself to the sport, eventually becoming a Paralympic champion. His story is one of resilience and determination in the face of adversity.",
            tags: ["paralysis", "wheelchair basketball"],
            type: ["Tragic Medical Story"]
        },
        {
            name: "Emily Rodriguez",
            inner_text: "Emily was a vibrant young woman with a passion for travel and adventure. She had always dreamed of exploring the world and experiencing different cultures. However, her plans were put on hold when she was diagnosed with a rare autoimmune disease that left her bedridden for months at a time. Despite the setbacks, Emily refused to let her illness define her. She used her time in bed to start a blog where she documented her experiences and offered support to others going through similar struggles. Eventually, Emily's condition worsened, and she was hospitalized for treatment. Despite the best efforts of her doctors, Emily passed away surrounded by her loved ones. Her story is a reminder to cherish every moment and live life to the fullest.",
            tags: ["autoimmune disease", "bedridden"],
            type: ["Tragic Medical Story"]
        },
        {
            name: "David Thompson",
            inner_text: "David was a devoted husband and father of two young children. He worked hard to provide for his family and always put their needs above his own. However, his life was turned upside down when he was diagnosed with early-onset Alzheimer's disease. David's memory began to deteriorate rapidly, and simple everyday tasks became increasingly challenging for him. He struggled to remember his wife's name or his children's faces, and he became increasingly withdrawn and frustrated. Despite the best efforts of his family to care for him, David's condition continued to decline, and he eventually required round-the-clock care in a nursing home. His story is a heartbreaking reminder of the devastating impact of Alzheimer's disease on individuals and their families.",
            tags: ["Alzheimer's disease", "memory loss"],
            type: ["Tragic Medical Story"]
        },
        {
            name: "Sarah Wilson",
            inner_text: "Sarah was a young mother of three who was passionate about fitness and healthy living. She enjoyed spending time outdoors and participating in marathons and triathlons. However, her life took a tragic turn when she was diagnosed with a rare genetic disorder that caused her muscles to weaken and deteriorate over time. Despite the diagnosis, Sarah remained determined to stay active and continue pursuing her passions. She adapted her workouts to accommodate her changing abilities and sought out experimental treatments in the hopes of finding a cure. However, as the years went by, Sarah's condition continued to worsen, and she eventually became confined to a wheelchair. Despite the challenges, Sarah remained positive and focused on spending quality time with her family. Her story is a testament to the power of perseverance and the importance of cherishing every moment.",
            tags: ["genetic disorder", "muscle weakness"],
            type: ["Tragic Medical Story"]
        },
        {
            name: "Thomas Brown",
            inner_text: "Thomas was a successful businessman who seemed to have it all – a loving family, a thriving career, and good health. However, his life took a tragic turn when he was diagnosed with a rare form of leukemia. Thomas was forced to put his career on hold and focus all of his energy on fighting the disease. He underwent multiple rounds of chemotherapy and experimental treatments, but unfortunately, his condition continued to worsen. Despite the grim prognosis, Thomas remained optimistic and determined to beat the odds. He spent his final days surrounded by his loved ones, cherishing every moment and making the most of the time he had left. His story is a reminder of the fragility of life and the importance of living each day to the fullest.",
            tags: ["leukemia", "chemotherapy"],
            type: ["Tragic Medical Story"]
        },
        {
            name: "Olivia Martinez",
            inner_text: "Olivia was a dedicated nurse who spent her days caring for others in need. She was passionate about her work and took great pride in making a difference in the lives of her patients. However, tragedy struck when Olivia was diagnosed with a rare neurological disorder that caused her muscles to gradually weaken and deteriorate. Despite the diagnosis, Olivia continued to work as long as she could, determined to help as many people as possible. However, as her condition worsened, she was eventually forced to retire from nursing. Despite the challenges, Olivia remained positive and focused on enjoying the time she had left with her family and friends. Her story is a reminder of the resilience of the human spirit and the importance of finding joy in the face of adversity.",
            tags: ["neurological disorder", "muscle weakness"],
            type: ["Tragic Medical Story"]
        },
        {
            name: "Daniel White",
            inner_text: "Daniel was a talented musician with a bright future ahead of him. He dreamed of touring the world and sharing his music with audiences everywhere. However, his dreams were shattered when he was diagnosed with a rare form of muscular dystrophy that gradually robbed him of his ability to play music. Despite the diagnosis, Daniel refused to give up on his passion. He adapted his playing style to accommodate his changing abilities and continued to perform for as long as he could. However, as his condition worsened, he was eventually forced to retire from music altogether. Despite the challenges, Daniel remained grateful for the time he had spent making music and focused on cherishing the memories he had created. His story is a reminder of the power of music to uplift the soul and bring joy to even the darkest of times.",
            tags: ["muscular dystrophy", "musician"],
            type: ["Tragic Medical Story"]
        }
    ]

    return <React.Fragment>
        {pageChange && <div className={`w-screen absolute min-h-screen bg-black`}></div>}
        <motion.main
            animate={{
                opacity: pageChange ? 0 : 1
            }}
            transition={{
                duration: 1.25
            }}
            className={`p-6 ${c_backgroundColor === "black" ? `bg-black text-white` : `bg-white text-black`} w-screen `}>
            <section>
                <motion.h1
                    animate={{y: 0}}
                    initial={{y: -200}}
                    transition={{
                        duration: 1.26,
                        ease: [0.85, 0, 0.15, 1],
                    }}
                    className={`text-[2.5rem] flex justify-between items-center p-1`}>
                    Community
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
                    initial={{x: -700}}
                    transition={{
                        duration: 1.25,
                        ease: [0.85, 0, 0.15, 1],
                        delay: 0.9
                    }}
                    className={`text-[9rem] leading-[8rem] uppercase font-bold inline-block`}>
                    Stories
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

            <div className={`w-full flex justify-center items-end pt-10 h-[70vh] gap-[0.5rem]`}>
                <motion.div
                    data-scroll
                    data-scroll-speed={"0.1"}
                    animate={{
                        height: "60%"
                    }}
                    initial={{
                        height: "0%"
                    }}
                    transition={{
                        duration: 1.25,
                        delay: 0.25,
                        ease: [0.85, 0, 0.15, 1]
                    }}
                    className={`bg-green-200 flex-1 h-[60%] rounded-t-[1.5rem]`}>

                </motion.div>
                <motion.div
                    data-scroll
                    data-scroll-speed={"0.2"}
                    animate={{
                        height: "70%"
                    }}
                    initial={{
                        height: "0%"
                    }}
                    transition={{
                        duration: 1.25,
                        delay: 0.25,
                        ease: [0.85, 0, 0.15, 1]
                    }}
                    className={`bg-green-300 flex-1 h-[70%] rounded-t-[1.5rem]`}>

                </motion.div>
                <motion.div
                    data-scroll
                    data-scroll-speed={"0.3"}
                    animate={{
                        height: "80%"
                    }}
                    initial={{
                        height: "0%"
                    }}
                    transition={{
                        duration: 1.25,
                        delay: 0.40,
                        ease: [0.85, 0, 0.15, 1]
                    }}
                    className={`bg-green-400 flex-1 h-[80%] rounded-t-[1.5rem]`}>

                </motion.div>
                <motion.div
                    data-scroll
                    data-scroll-speed={"0.4"}
                    animate={{
                        height: "90%"
                    }}
                    initial={{
                        height: "0%"
                    }}
                    transition={{
                        duration: 1.25,
                        delay: 0.55,
                        ease: [0.85, 0, 0.15, 1]
                    }}
                    className={`bg-green-500 flex-1 h-[90%] rounded-t-[1.5rem]`}>

                </motion.div>
            </div>

            <section className={`w-full `}>
                <UnderlineHeading text={"Outgoing Communities"}/>
                {patientStories.map((item, index) => {
                    return <BlogPost key={index} inner_text={item.inner_text} name={item.name} tags={item.tags} type={item.type} index={index} />
                })}
            </section>
        </motion.main>
    </React.Fragment>
}


interface BlogPostInterface {
    inner_text: string,
    name: string,
    tags: string[],
    type: string[],
    index: number
}

const BlogPost = ({inner_text, name, tags, type, index}: BlogPostInterface) => {
    const {c_backgroundColor, c_color} = useTheme();
    return <motion.div
        className={`my-20 ${c_backgroundColor === "black" ? `bg-[#212121] text-black` : `bg-black text-white`} p-6 w-full mx-2  rounded-[2rem] flex flex-col`}>
        <div className={`flex justify-between items-center text-[1.25rem]`}>
            <div className={`text-white flex gap-[1rem] items-center`}>
                <div
                    className={`bg-green-400 text-white h-[5rem] flex uppercase justify-center items-center font-bold aspect-square rounded-[1rem]`}>
                    {name.split("")[0]}
                </div>
                <h1 className={`text-[3.5rem] inline-block`}>
                    {name}'s Story
                </h1>
            </div>

            <div>
                <ul className={`flex gap-[0.5rem]`}>
                    {tags.map((item: string, index: number) => {
                        return <li key={index}
                                   className={`border-[0.25px] ${c_backgroundColor === "black" ? `border-white text-white` : `border-black text-black`} p-2 rounded-full`}>
                            {item}
                        </li>
                    })}
                </ul>
            </div>
        </div>

        <div
            className={`w-full flex-1 my-10 ${c_backgroundColor === "black" ? `text-white` : `text-white`} w-full text-justify text-[1.5rem] h-[25rem]`}>
            {inner_text}
        </div>
        <button className={`bg-green-400 p-4 rounded-2xl w-full uppercase font-bold`}>
            View Full Blog
        </button>
    </motion.div>
}

const FirstBlogPost = ({inner_text, name, tags, type, index}: BlogPostInterface) => {
    const {c_backgroundColor, c_color} = useTheme();
    return <motion.div
        data-scroll
        data-scroll-speed={"0.5"}
        className={`${c_backgroundColor === "black" ? `bg-[#212121] text-black` : `bg-black text-white`} p-6 w-full mx-2 min-h-[95vh] rounded-[2rem]`}>
        <div className={`flex justify-between items-center text-[1.25rem]`}>
            <div className={`text-white flex gap-[1rem] items-center`}>
                <div
                    className={`bg-green-400 text-white h-[5rem] flex uppercase justify-center items-center font-bold aspect-square rounded-[1rem]`}>
                    {name.split("")[0]}
                </div>
                <h1 className={`text-[3.5rem] inline-block`}>
                    {name}'s Story
                </h1>
            </div>

            <div>
                <ul className={`flex gap-[0.5rem]`}>
                    {tags.map((item: string, index: number) => {
                        return <li key={index}
                                   className={`border-[0.25px] ${c_backgroundColor === "black" ? `border-white text-white` : `border-black text-black`} p-2 rounded-full`}>
                            {item}
                        </li>
                    })}
                </ul>
            </div>
        </div>

        <div
            className={`w-full my-10 ${c_backgroundColor === "black" ? `text-white` : `text-white`} w-full text-justify text-[1.5rem] h-[25rem]`}>
            {inner_text}
        </div>
    </motion.div>
}

export default CommunityStories;