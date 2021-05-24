import React from 'react'
import styled from "styled-components";

const HeaderDiv = styled.div`
    height: 20%;
    display: flex;
    justify-content: center;
    background-color: rgb(19,36,96);
    z-index: 2;
`

const Header = () => {
    return (
        <HeaderDiv>
            <text
                style={{ color: "white", fontSize: "2em",}}
            >
                MENU HERE
            </text>
        </HeaderDiv>
    )
}

export default Header;