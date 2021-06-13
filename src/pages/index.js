import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { mainDiv, services, servicesOutline, card, cardHeader, testimonials, testimonialsOutline, space, testimonialText, testimonialCard, infoText, cgroup } from "../styles/home.module.scss";
import { Card, Button, ButtonGroup, Text } from "@blueprintjs/core";
import { Divider } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <Layout>
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
                <div className={servicesOutline}>
                    <h3>Services</h3>
                    <div className={services}>
                        <Card elevation={4} className={card}>
                            <div className={cardHeader}>
                                <Text>Residential</Text>
                            </div>
                            <StaticImage
                                src="../../content/assets/house.jpg"
                                layout="fullWidth"
                                alt="house"
                                aspectRatio={16/9}
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
                            <div className={cardHeader}>
                                <Text>Commercial</Text>
                            </div>
                            <StaticImage
                                src="../../content/assets/commercial2.jpg"
                                layout="fullWidth"
                                alt="commercial"
                                aspectRatio={16/9}
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
                            <div className={cardHeader}>
                                <Text>Roof Cleaning</Text>
                            </div>
                            <StaticImage
                                src="../../content/assets/roof.png"
                                layout="fullWidth"
                                alt="roof"
                                aspectRatio={16/9}
                            />
                            <p>VIP pressure washing provides excellent low pressure roof cleaning in Atlanta, GA and surrounding
                            areas with a well trained crew to get the job done.</p>
                            <p>We use only the most up to date techniques and cleaning solutions, assuring you that the job will be done right the first time.</p>
                        </Card>
                    </div>
                    <div className={space}></div>
                    <div className={testimonialsOutline}>
                        <h3>Testimonials</h3>
                        <div className={testimonials}>
                            <Card className={testimonialCard}>
                                <p className={testimonialText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <div className={cgroup}>
                                    <FontAwesomeIcon icon={faUser} />
                                    <Text className={infoText}>Name</Text>
                                    <Divider style={{color: "white"}} orientation={'vertical'} variation={'inset'} flexItem={true}/>
                                    <Text className={infoText}>Hometown</Text>
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
        </Layout>
    )
}


export default Home;