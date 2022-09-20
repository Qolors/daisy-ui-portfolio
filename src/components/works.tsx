import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from "./work";



const Works = ({ handling = (x: string) => {} }) => (


    <TileWrapper numOfPages={4}>
        <TileBackground>
            <WorkBackground />
        </TileBackground>
        <TileContent>
            <Tile page={0} renderContent={({ progress }) => (
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <div className="flex flex-col px-10 pt-2 mx-auto">
                        <h1 className="text-5xl font-bold text-left text-primary">JameScape</h1>
                        <p className="text-lg pb-4">A full stack service using Discord as a Headless CMS.</p>
                        <label htmlFor="my-modal-6" className="btn btn-block pointer-events-auto" onClick={() => handling('jamescape')}>Learn More</label>
                        </div>
                    </WorkLeft>
                    <WorkRight progress={progress}>
                        <div>
                        <div className="mockup-phone border-primary shadow-2xl">
                        <div className="camera"></div> 
                        <div className="display">
                            <div className="artboard text-2xl font-bold artboard-demo bg-base-200 phone-1">
                                <img src="./thumbJame.png" className="w-full" />
                            </div>
                        </div>
                        </div>
                        </div>

                    </WorkRight>
                </WorkContainer>
            )}></Tile>
            <Tile page={1} renderContent={({ progress }) => (
                <WorkContainer>
                <WorkLeft progress={progress}>
                    <div className="flex flex-col px-10 pt-2 mx-auto">
                    <h1 className="text-5xl font-bold text-left text-primary">WallingtonWeb</h1>
                    <p className="text-lg pb-4">A Client's custom built Business Site utilizing Sanity Studio.</p>
                    <label htmlFor="my-modal-6" className="btn btn-block pointer-events-auto" onClick={() => handling('wallingtonweb')}>Learn More</label>
                    </div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <div>
                    <div className="mockup-phone border-primary shadow-2xl">
                    <div className="camera"></div> 
                    <div className="display">
                        <div className="artboard text-2xl font-bold artboard-demo bg-base-200 phone-1">
                            <img src="./thumbWallington.png" className="w-full" />
                        </div>
                    </div>
                    </div>
                    </div>

                </WorkRight>
            </WorkContainer>
            )}></Tile>
            <Tile page={2} renderContent={({ progress }) => (
                <WorkContainer>
                <WorkLeft progress={progress}>
                    <div className="flex flex-col px-10 pt-2 mx-auto">
                    <h1 className="text-5xl font-bold text-left text-primary">ShinyDex</h1>
                    <p className="text-lg pb-4">A quick reference app for hardcore PokemonGo players.</p>
                    <label htmlFor="my-modal-6" className="btn btn-block pointer-events-auto" onClick={() => handling('shinydex')}>Learn More</label>
                    </div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <div>
                    <div className="mockup-phone border-primary shadow-2xl">
                    <div className="camera"></div> 
                    <div className="display">
                        <div className="artboard text-2xl font-bold artboard-demo bg-base-200 phone-1">
                            <img src="./thumbShiny.png" className="w-full" />
                        </div>
                    </div>
                    </div>
                    </div>

                </WorkRight>
                </WorkContainer>
            )}></Tile>
            <Tile page={3} renderContent={({ progress }) => (
                <WorkContainer>
                <WorkLeft progress={progress}>
                    <div className="flex flex-col px-10 pt-2 mx-auto">
                    <h1 className="text-5xl font-bold text-left text-primary">NatStat</h1>
                    <p className="text-lg pb-4">A global live feed tracker for natural disasters.</p>
                    <label htmlFor="my-modal-6" className="btn btn-block pointer-events-auto" onClick={() => handling('natstat')}>Learn More</label>
                    </div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <div>
                    <div className="mockup-phone border-primary shadow-2xl">
                    <div className="camera"></div> 
                    <div className="display">
                        <div className="artboard text-2xl artboard-demo font-bold bg-base-200 phone-1">
                            <img src="./thumbStat.png" className="w-full" />
                        </div>
                    </div>
                    </div>
                    </div>

                </WorkRight>
                </WorkContainer>
            )}></Tile>
         </TileContent>
    </TileWrapper>
)
export default Works