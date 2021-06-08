import React from "react"
import Header from "../components/header"
import { StaticImage } from "gatsby-plugin-image"
import { mainDiv, services, servicesOutline, card, cardHeader, testimonials, testimonialsOutline, space, testimonialText, testimonialCard, infoText, cgroup } from "../styles/home.module.scss";
import { Card, Button, ButtonGroup } from "@blueprintjs/core";
import { Divider } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../components/footer"

const Home = () => {
    return (
        <div>
            <Header />
            <div>
                <StaticImage
                    src="../../content/assets/homeimage.jpg"
                    layout="fullWidth"
                    alt="home image"
                />
                <div className={mainDiv}>
                    <p>LOGO HERE</p>
                    <p>VIP PRESSURE WASHING</p>
                    <p>(999)-999-9999</p>
                </div>
                <StaticImage
                    src="../../content/assets/bricks.png"
                    layout="fullWidth"
                    alt="home image"
                />
                <div class={servicesOutline}>
                    <h3>Services</h3>
                    <div class={services}>
                        <Card elevation={4} className={card}>
                            <div class={cardHeader}>
                                <text>Residential</text>
                            </div>
                            <StaticImage
                                src="../../content/assets/house.jpg"
                                layout="fullWidth"
                                alt="house"
                                aspectRatio={16/9}
                                height={200}
                            />
                            <ul>
                                <li>House Pressure Washing</li>
                                <li>Deck Pressure Washing</li>
                                <li>Roof Cleaning</li>
                                <li>Gutter Cleaning</li>
                                <li>Fence Cleaning</li>
                                <li>Poolside and Patio Cleaning</li>
                                <li>Driveway and Sidewalk Cleaning</li>
                            </ul>
                        </Card>
                        <Card elevation={4} className={card}>
                            <div class={cardHeader}>
                                <text>Commercial</text>
                            </div>
                            <StaticImage
                                src="../../content/assets/commercial2.jpg"
                                layout="fullWidth"
                                alt="commercial"
                                aspectRatio={16/9}
                                height={200}
                            />
                            <ul>
                                <li>Gas Station Pressure Washing</li>
                                <li>Shopping Center Pressure Washing</li>
                                <li>Building Pressure Washing</li>
                                <li>Parking Lot Pressure Washing</li>
                                <li>Drive-Thru Pressure Washing</li>
                                <li>Sidewalk Cleaning</li>
                                <li>Sign Cleaning</li>
                            </ul>
                        </Card>
                        <Card elevation={4} className={card}>
                            <div class={cardHeader}>
                                <text>Roof Cleaning</text>
                            </div>
                            <StaticImage
                                src="../../content/assets/roof.png"
                                layout="fullWidth"
                                alt="roof"
                                aspectRatio={16/9}
                                height={200}
                            />
                            <p>VIP pressure washing provides excellent low pressure roof cleaning in Atlanta, GA and surrounding
                            areas with a well trained crew to get the job done.</p>
                            <p>We use only the most up to date techniques and cleaning solutions, assuring you that the job will be done right the first time.</p>
                        </Card>
                    </div>
                    <div class={space}></div>
                    <div class={testimonialsOutline}>
                        <h3>Testimonials</h3>
                        <div class={testimonials}>
                            <Card className={testimonialCard}>
                                <p class={testimonialText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <div className={cgroup}>
                                    <FontAwesomeIcon icon={faUser} />
                                    <text class={infoText}>Name</text>
                                    <Divider style={{color: "white"}} orientation={'vertical'} variation={'inset'} flexItem={true}/>
                                    <text class={infoText}>Hometown</text>
                                </div>
                            </Card>
                        </div>
                    <ButtonGroup large={true} style={{paddingTop: "2em"}}>
                        <Button><FontAwesomeIcon icon={faArrowLeft}/></Button>
                        <Button><FontAwesomeIcon icon={faArrowRight}/></Button>
                    </ButtonGroup>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Home;