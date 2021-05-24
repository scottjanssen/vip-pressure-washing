import React from "react"
import Header from "../components/header"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components";

const Main = styled.div`
    font-size: 2em;
    display: flex;
    flex-direction: column;
    color: white;
    position: absolute;
    justify-content: space-between;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 10%;
    gap: 1em;
`

const Home = () => {
    return (
        <div>
            <Header />
            <div>
                <StaticImage
                    src="../../content/assets/homeimage.jpeg"
                    layout="fullWidth"
                    alt="home image"
                />
                <Main>
                    <text>LOGO HERE</text>
                    <text>VIP PRESSURE WASHING</text>
                    <text>(999)-999-9999</text>
                </Main>
            </div>
        </div>
    )
}


export default Home;