import { useContext, useRef } from "react";
import React from "react";
import { ScrollContext } from "../components/scrollobserver";

const Mast: React.FC = () => {
    
    
    const refContainer = useRef<HTMLDivElement>(null)
    const { scrollY } = useContext(ScrollContext)

    let progress = 0
  
    const { current: elContainer } = refContainer
    if (elContainer) {
      progress = Math.min(1, scrollY / elContainer.clientHeight)
    }

    return (
        
        <div ref={refContainer} style={{ transform: `translateY(-${progress * 20}vh)` }} className="hero min-h-screen bg-base-100 sticky top-0 -z-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="./coffee.gif" className="w-[300px] rounded-2xl drop-shadow-xl" />
        <div>
            <h1 className="text-5xl py-10 pb-10 font-bold">Hey, Im <span className="text-primary">Chris.</span></h1>
            <span className="text-3xl font-bold">I make things Work.</span>
            <p className="text-md text-left py-2 indent-1 max-w-[400px]">I am a self started Software Developer looking to make clients the most efficient product. 
            Constantly keeping up with the latest tech - how can you not? This stuff is exciting. </p>
        </div>
        </div>
        </div>
        
    )

}

export default Mast;