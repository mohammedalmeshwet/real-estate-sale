import React from 'react';
import {Container} from 'react-bootstrap';
import Home  from './Home';
import Search from "./Search";
const EditData = () => {
    return (
        <Container>
            <Search/> 
            <Home text="Edit"/>
        </Container>
    );

};
export default EditData;