import { useEffect, useState } from "react"

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("")
    const fullText = "Welcome To My Portfolio"

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index))
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 1000)
            }
        }, 100);

        return () => clearInterval(interval)
    }, [onComplete])

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center px-4 text-center">
            <div className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg font-mono font-bold break-words">
                {text} <span className="animate-blink ml-1"> | </span>
            </div>

            <div className="w-[120px] h-[2px] bg-gray-800 rounded relative overflow-hidden sm:w-[150px] md:w-[180px] lg:w-[200px]">
                <div className="w-[40%] h-full bg-blue-800 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                    {" "}
                </div>
            </div>
        </div>
    )
}