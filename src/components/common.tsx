import styled from "styled-components"


export const Layout = styled.div`
  background-color: darkblue;
  width: 100%;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const Navigation = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HomeButton = styled.button`

  margin-left: 20px;

`
export const Points = styled.div`

  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: crimson;
  margin-right: 20px;
`