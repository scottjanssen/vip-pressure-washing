import React from "react"
import Header from "../components/header"
import { StaticImage } from "gatsby-plugin-image"
import { mainDiv } from "../styles/home.module.scss";

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
                <div class={mainDiv}>
                    <text>LOGO HERE</text>
                    <text>VIP PRESSURE WASHING</text>
                    <text>(999)-999-9999</text>
                </div>
            </div>
        </div>
    )
}


export default Home;