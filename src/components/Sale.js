import React from "react";
import Search from "./Search";
import Home from './Home';
import { Container } from "react-bootstrap";
const Sale = () => {
    return(
        <Container>
            <Search/> 
            <Home text="Sale"/>
        </Container>
    );
}
export default Sale;