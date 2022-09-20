import React from "react";

interface Props {
    children: React.ReactNode
}

export const WorkContainer: React.FC<Props> = ({children}) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen place-items-center">{children}</div>
)




export const WorkLeft: React.FC<{ progress: number, children: React.ReactNode }> = ({children, progress}) => {
    let translateY = Math.max(0, 50 - progress * 3 * 50)
    if (progress > 0.85) translateY = Math.max(-50,-(progress - 0.85) * 2 * 50)
    return (
        <div className="flex flex-col items-center text-3xl lg:text-3xl h-[30vh] lg:h-auto" style={{
            transform: `translateY(${translateY}px)`
        }}>
            <div className="leading-10">{children}</div>
        </div>
    )
}

export const WorkRight: React.FC<{progress: number, children: React.ReactNode }> = ({ children, progress }) => {
    let translateY = Math.max(-50, -(progress - 0.5) * 50)
    return (
        <div className="flex lg:items-center justify-center" style={{
            transform: `translateY(${translateY}px)`
        }}>
            <div className="w-full max-w-md pt-0 lg:pt-0 px-10 md:px-0">
                {children}
            </div>
        </div>
    )
}