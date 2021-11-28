import styled from 'styled-components'

export const Container = styled.section`
width:100vw;
height:12vh;
position:relative;
display:flex;
align-items:center;
justify-content:flex-end;
`

export const Logo = styled.img`
width:9.5vw;
position:absolute;
left:7%;
`

export const BoxList = styled.ul`
width:40vw;
height:10vh;
list-style: none;
display:flex;
align-items:center;
justify-content:space-around;
font-size:1.5vw;


`
export const Enter = styled.li`
width:13vw;
height:7vh;
display:flex;
justify-content:center;
align-items:center;
background-color:#FFE4B5;
border-radius:5%;
&:hover{
    cursor:pointer;
}
`

export const BoxItem = styled.li`
font-size:0.8vw;
border:1px solid black;
width:2vw;
height:4vh;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;

`