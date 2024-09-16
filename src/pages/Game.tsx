import { Link } from "react-router-dom"
import { Ball } from "../components/Ball"
import { HomeButton, Layout, Navigation, Points } from "../components/common"
import { useResize } from "../hooks/use_resize"
import { randomInteger } from "../tools/common"

export function Game() {
    const { width, height } = useResize()
  
    
    const allBalls = Array(100).fill(null).map((_,i)=>{
      
      const x = randomInteger(50, width - 50)
      const y = randomInteger(50, height - 50)
  
      return <Ball x={x} y={y} key={i}></Ball>
  
    })
  
    return <Layout>
      <Navigation>
        <Link to={"/"}>Koti</Link>
        <Points></Points>
      </Navigation>
  
      {allBalls}
  
    </Layout>
  
  }