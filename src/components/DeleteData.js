import React from 'react';
import {Container} from 'react-bootstrap';
import Home  from './Home';
import Search from "./Search";
const DeleteData = () => {
    return (
        <Container>
            <Search/> 
            <Home text="Delete"/>
        </Container>
    );

};
export default DeleteData;