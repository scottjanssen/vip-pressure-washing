import React from 'react'
import { headerDiv, logo, linksDesktop, link, hamburgerButtonDiv, hamburgerButton, menu, menuLink } from "../styles/header.module.scss";
import { Navbar, NavbarHeading, Button, Menu, MenuItem, Position, MenuDivider, Drawer } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import Media from 'react-media';

const Header = () => {

    const HamburgerMenu = (
        <Menu className={menu}>
            <MenuItem href={"./"} className={menuLink} text="Home"/>
            <MenuDivider/>
            <MenuItem href={"./"} className={menuLink} text="About"/>
            <MenuDivider/>
            <MenuItem href={"./"} className={menuLink} text="Schedule A Cleaning"/>
            <MenuDivider/>
            <MenuItem href={"./"} className={menuLink} text="Contact Us"/>
        </Menu>
        //Come back and do this with Drawer Instead
    );
    return (
        <div className={headerDiv}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </head>
            <Navbar>
                <NavbarHeading className={logo}>Logo Here</NavbarHeading>
                <Media queries={{
                    mobile: "(max-width: 600px)",
                    desktop: "(min-width: 601px)",
                }}>
                    {matches => (
                        <>
                        {matches.mobile &&
                            <div className={hamburgerButtonDiv}>
                                <Popover2
                                    content={HamburgerMenu}
                                    position={Position.RIGHT_TOP}
                                >
                                    <Button className={hamburgerButton}><FontAwesomeIcon icon={faBars}/></Button>
                                </Popover2>
                            </div>
                        }
                        {matches.desktop &&
                            <div className={linksDesktop}>
                                <Link to="/" className={link}>Contact Us</Link>
                                <Link to="/" className={link}>Schedule A Cleaning</Link>
                                <Link to="/" className={link}>About</Link>
                                <Link to="/" className={link}>Home</Link>
                            </div>
                        }
                        </>
                    )}
                </Media>
            </Navbar>
        </div>
    )
}

export default Header;