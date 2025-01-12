import { useEffect, useState } from "react"

export default function Cursor() {
    const [mouse, setMouse] = useState({
        x: 1920/2,
        y: 1080/2
    })

    useEffect(() => {
        const event = (ev: MouseEvent) => {
            setMouse({
                x: ev.clientX,
                y: ev.clientY
            });
        };

        document.addEventListener("mousemove", event)

        return () => document.removeEventListener("mousemove", event)
    }, [])
    return (
        <div
        className="fixed w-[50px] opacity-10 blur-lg h-[50px] rounded-full bg-yellow-500" 
        style={{
            "top": `${mouse.y - 12}px`,
            "left": `${mouse.x -20}px`
        }}></div>
    )
}