import { CSSProperties, useEffect, useState } from "react"
import styled from "styled-components"

const Layout = styled.div`
  background-color: darkblue;
  width: 100%;
  height: 100vh;
  color: white;
`
const Navigation = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HomeButton = styled.button`

  margin-left: 20px;

`
const Points = styled.div`

  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: crimson;
  margin-right: 20px;
`

type BallProps = {
  x: number
  y: number
}

function Ball({x,y}:BallProps) {

  const style: CSSProperties = {
    backgroundColor: 'red',
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    color: "white",
    transform: `translate(${x}px, ${y}px)`
  }

  const [points, setPoints] = useState(0)

  return <div onClick={() => setPoints(points + 1)} style={style}>
      {points}
  </div>
}

function useResize() {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(()=>{
    
    function handleResize() {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return ()=>{
      window.removeEventListener("resize", handleResize) 
    }
  
  }, [])

  return {width, height}

}

function randomInteger(min: number, max: number){

  const random = (Math.random() * (max - min)) + min

  return Math.floor(random)

}

export default function App(){

  const {width, height} = useResize()

  const x = randomInteger(50, width-50)
  const y = randomInteger(50, height-50)

  return <Layout>
    <Navigation>
      <HomeButton>Home</HomeButton>
      <Points></Points>
    </Navigation>

    <Ball x={x} y={y}></Ball>

  </Layout>

}