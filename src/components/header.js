import React, {Component} from 'react'
import { headerDiv, logo, linksDesktop, link, hamburgerButtonDiv, hamburgerButton, menu, menuLink, menuHeader, closeButton, mobileLinks, divider } from "../styles/header.module.scss";
import { Navbar, NavbarHeading, Button, Menu, MenuItem, Position, MenuDivider, Text, Classes } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import Media from 'react-media';

class Header extends Component {

    constructor(props){
        super(props);
        this.state ={
            popOpen: false
        };

        this.OnOpen = this.OnOpen.bind(this);
        this.OnClose = this.OnClose.bind(this);
    }

    OnOpen(){
        this.setState({
            popOpen: true
        });
    }

    OnClose(){
        this.setState({
            popOpen: false
        });
    }

    render(){

        const HamburgerMenu = (
            <Menu className={menu}>
                <div className={menuHeader}>
                    <FontAwesomeIcon icon={faTimes} size="2x" onClick={this.OnClose} className={closeButton}></FontAwesomeIcon>
                    <Text className={logo}>LOGO HERE</Text>
                </div>
                <div className={mobileLinks}>
                    <MenuItem href={"./"} className={menuLink} text="Home"/>
                    <MenuDivider/>
                    <MenuItem href={"./"} className={menuLink} text="About"/>
                    <MenuDivider/>
                    <MenuItem href={"./"} className={menuLink} text="Schedule A Cleaning"/>
                    <MenuDivider/>
                    <MenuItem href={"./"} className={menuLink} text="Contact Us"/>
                </div>
            </Menu>
        );

        return (
            <div className={headerDiv}>
                <Navbar>
                    <NavbarHeading className={logo}>LOGO HERE</NavbarHeading>
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
                                        autoFocus={true}
                                        usePortal={false}
                                        isOpen={this.state.popOpen}
                                        canEscapeKeyClose={true}
                                        onClose={this.OnClose}
                                    >
                                        <Button className={hamburgerButton} onClick={this.OnOpen}><FontAwesomeIcon icon={faBars}/></Button>
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
}

export default Header;