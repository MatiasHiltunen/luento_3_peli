import { useState, CSSProperties, useEffect } from "react"
import { randomInteger } from "../tools/common"

type BallProps = {
    x: number
    y: number
}

export function Ball({ x, y }: BallProps) {

    const [maxPoints, setMaxPoints] = useState(1)
    const [points, setPoints] = useState(0)
    const [isAlive, setIsAlive] = useState(true)


    const style: CSSProperties = {
        position: "absolute",
        left: "0px",
        top: "0px",
        backgroundColor: `rgb(${randomInteger(1, 255)}, ${randomInteger(1, 255)}, ${randomInteger(1, 255)})`,
        width: (5 * maxPoints + 40) + "px",
        height: (5 * maxPoints + 40) + "px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        cursor: "pointer",
        transform: `translate(${x}px, ${y}px)`,
        userSelect: "none",
        zIndex: maxPoints
    }



    useEffect(() => {
        const max = randomInteger(1, 10)
        setMaxPoints(max)
    }, [])

    useEffect(() => {

        if (points >= maxPoints) {

            setIsAlive(false)

        }

    }, [points])

    if (!isAlive) {
        return <div style={{
            transform: `translate(${x}px, ${y}px)`,
            width: "50px",
            height: "50px",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}><div>X</div></div>
    }

    return <div onClick={() => setPoints(points + 1)} style={style}>
        {points} / {maxPoints}
    </div>
}