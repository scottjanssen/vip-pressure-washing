import React from "react"
import Header from "../components/header"
import { StaticImage } from "gatsby-plugin-image"
import { mainDiv } from "../styles/home.module.scss";
import { Footer } from "../components/footer"

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
                <div className={mainDiv}>
                    <p>LOGO HERE</p>
                    <p>VIP PRESSURE WASHING</p>
                    <p>(999)-999-9999</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Home;