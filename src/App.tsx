import { CSSProperties, useState } from "react"
import styled from "styled-components"

const Layout = styled.div`
  background-color: darkblue;
  width: 100%;
  height: 100vh;
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



function Ball() {

  const style: CSSProperties = {
    backgroundColor: 'red',
    width: "50px",
    height: "50px",
    borderRadius: "50%"
  }

  const [points, setPoints] = useState(0)

  return <div onClick={() => setPoints(points + 1)} style={style}>
      {points}
  </div>
}

export default function App(){

  return <Layout>

    <Navigation>
      <HomeButton>Home</HomeButton>
      <Points></Points>
    </Navigation>

    <Ball></Ball>

  </Layout>

}