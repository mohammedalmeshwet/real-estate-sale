import React, { useState } from 'react';
import {Col,Row,Form,Button, Container} from 'react-bootstrap';

const SaleForm = (props) => {

      const [validated, setValidated] = useState(false);
      const [finalPrice, setfinalPrice] = useState(props.finalPrice);
      const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);

      };
    
  const style ={
    backgroundColor: "#02020233"
  }
  const Style ={
    backgroundColor: "#282e39b3",
    fontSize:"17px",
    
  }

  const onChangehandler = (event) => {
    console.log(event.target.value);
    setfinalPrice(event.target.value);
  }
      return (
    <Container>
        <Row>

          <Col></Col>
            <Col md={6} className="rounded">
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="p-4 my-2 text-light rounded w-75" style={style}>
            <div>
            <img className="d-block my-3 rounded mw-100" src={props.img} alt="Non"/>

            </div>
    
                <Row className="mb-3 ">
                    <Form.Group as={Col}  controlId="formGridThePrice">
                        <Form.Label>The Price</Form.Label>
                        <Form.Control  
                            required 
                            type="number" 
                            placeholder="The Price Sale"
                            value= {finalPrice !== props.finalPrice ? setfinalPrice(props.finalPrice) : finalPrice}
                            onChange = {onChangehandler}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}  controlId="validationCustom01">
                        <Form.Label>Name Bying</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Name Bying"
                        />
                    </Form.Group>
                </Row>



          <Container fluid>
          <Row>
          
        <Col></Col>
            <Col><Button type="submit"  style={Style} >{props.text}</Button></Col>   
          <Col ></Col>
        </Row>
  </Container> 
          </Form>
            </Col>
        <Col ></Col>
      </Row>
  </Container>


        
        
      );
    
    

};

export default SaleForm;