import { useEffect, useState } from "react";

interface Props {
    prop: string
}

const Flyout: React.FC<Props> = ({prop}) => {

    const [work, setWork] = useState(prop)

    useEffect(() => {
        setWork(prop)
    }, [prop])

    return (
    
    
    <WorkClick
        title={myWorks[work].title}
        subTitle={myWorks[work].subTitle1}
        body={myWorks[work].body}
        subTitle2={myWorks[work].subTitle2}
        body2={myWorks[work].body2}
        body3={myWorks[work].body3}
        stack={myWorks[work].stack}
        image1={myWorks[work].image1}
        code={myWorks[work].code}
        link={myWorks[work].link}
    />
    )
}

export default Flyout;


type attributes = {
    title: any,
    subTitle: string
    body: string,
    subTitle2?: string,
    body2?: string,
    image1: string,
    image2?: string,
    body3?: string,
    stack: any,
    code: string,
    link: string
}

const WorkClick = ({
    title,
    subTitle,
    body,
    subTitle2,
    body2,
    body3,
    image1,
    image2,
    code,
    link,
    stack
}: attributes) => {
    return (
        <>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-full">
            <h3 className="font-bold text-3xl">{title}</h3>
            <h2 className="font-bold text-xl pt-4">{subTitle}</h2>
            <p className="py-4">{body}</p>
            {image1 && <img className="py-4" src={image1} />}
            <h2 className="font-bold text-xl">{subTitle2}</h2>
            {body2 && <p className="py-2">{body2}</p> }
            {image2 && <img className="py-4" src={image2} />}
            {body3 && <p className="py-2">{body3}</p> }
            <h2 className="font-bold text-xl">The Stack</h2>
            {stack.map((s: string) => { return <p>- {s}</p>})}
            <div className="flex justify-between p-4">
            <a href={link} target="_blank" className="link link-primary">Live Site</a>
            <a href={code} target="_blank"className="link link-primary">Source Code</a>
            </div>
            <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">Nice!</label>
            </div>
        </div>
        </div>
        </>
    )
}

export const myWorks = {
    jamescape: {
        image1: "./js1.png",
        title: "JameScape",
        subTitle1: "What is it?",
        body: "A Blog using Discord as a headless CMS. Deploying a bot to monitor a Discord Channel, the determined user can Post, Edit & Remove Content through the chat. This allows the user to stay local to Discord without having to use any other environments while maintaining their website.",
        subTitle2: "Why Discord?",
        body2: "A buddy of mine documents every bit of his online adventures. I said he should share it to the world - people would love it. There are some things that held him back. Learning how to manage and start a site, which site to use, designing the site - the list goes on..",
        body3: "This is when I realized - People are familiar with Discord and find it comfy. So, why not bring blog sites to them? This is where JameScape was built.",
        stack: ["Nextjs", "MongoDB", "TailwindCSS", "Prisma", "Discordjs", "AWS"],
        link: "https://jamescape-web-qolors.vercel.app/",
        code: "https://github.com/Qolors/jamescape-web"
    },

    wallingtonweb: {
        title: "WallingtonWeb",
        subTitle1: "What is it?",
        body: "A JAMStack Build for Wallington Web Services. Assets and color palette provided by them, and code source requested to be privatized. This site includes: functional emailing, Headless CMS for blog posting, content editing, and SSR for on demand dynamic page creation.",
        stack: ["Nextjs", "TailwindCSS", "Sanity CMS"],
        link: "https://wallingtonweb-dev.vercel.app/",
        code: ""

    },
    shinydex: {
        title: "ShinyDex",
        image1: "./shiny1.png",
        subTitle1: "For the Hardcore Players.",
        body: "ShinyDex is an app built for PokemonGo to let users quickly reference and see what methods are available when catching Shiny Pokemon. This app was built to be simiplistic and fast. A custom recommended search is provided with carousel style feed, as well as quick tips on transitioning loads.",
        stack: ["React", "Styled Components", "Framer Motion", "PoGo API"],
        link: "https://shinydex-three.vercel.app/",
        code: "https://github.com/Qolors/shinydex"
    },
    natstat: {
        title: "NatStat",
        image1: "./map1.png",
        subTitle1: "What is it?",
        body: "A live tracker real world Natural Events currently happening. This mobile friendly application lets you view and read up on all current Wildfires, Volcanoes, and Severe Storms happening around the globe.",
        stack: ["React", "Styled Comonents", "Framer Motion", "Google NASA API"],
        link: "https://natstat.vercel.app/",
        code: "https://github.com/Qolors/wildfire"

    }



}