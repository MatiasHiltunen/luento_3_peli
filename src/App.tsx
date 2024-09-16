import { useState } from "react"
import { supabase } from "./supabase"
import { HomeButton, Layout, Navigation } from "./components/common"
import { RankingList } from "./components/RankingList"


export default function App() {

  const [nickname, setNickname] = useState("")

  const startGame = async ()=>{
    
    const {data, error} = await supabase.from('ranking').insert([
      {
        nickname: nickname,
        points: 0
      }
    ]).select()

    console.log("data: ", data, " error: ", error)

  }

  return <Layout>

    <Navigation>
      <HomeButton>Home</HomeButton>
    </Navigation>

    <label>Nimerkki</label>
    <input value={nickname} onChange={(e)=> setNickname(e.target.value)}></input>
    <button onClick={startGame}>Peliin!</button>

    {nickname}

    <RankingList></RankingList>
  </Layout>

}