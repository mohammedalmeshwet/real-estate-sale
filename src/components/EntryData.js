import React, { useState} from 'react';
import {Col,Row,Form,Button, Container} from 'react-bootstrap';
import axios from 'axios';


const EntryData = (props) => {
        const [data, setData] = useState({position:"", realPrice:0, numbrofstock:5});

      const handleSubmit = (event) => {
        event.preventDefault(); 
        
        const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnaGFpdGgiLCJpYXQiOjE2Mzg5NTA2NzcsImV4cCI6MTYzOTAzNzA3N30.HXEiniZRcFvDxXwz-UKFvy3fbat-rtg4LSAOsmxNuGmzDiiA3jPAsNJmFtWp3gr9L3rx1PYKnS-ssPxgQ_iCXg" ;
        
        axios.post('http://localhost:8080/property/add', 
        data,{
                headers: {
                  Authorization : `Bearer ${accessToken}`,
                }
        }
        ).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
      };
    const style = {
                    Form : {
                        backgroundColor: "#02020233"
                      },
                    Button : {
                        backgroundColor: "#282e39b3",
                        fontSize:"17px",
                  }
                }

      return (
    <Container >
        <Row>
          <Col></Col>
            <Col md={6} className="rounded">
            <Form noValidate  onSubmit={handleSubmit} className="p-4 my-5 text-light rounded" style={style.Form}> 
                {props.text === "Edit" ? <img className="d-block my-3 w-100 rounded" style={{height : "50vh"}} src={props.img} alt="Non"/> : null}
            <Row className="mb-3">
              <Form.Group as={Col}  controlId="position">
                <Form.Label>Position</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Position"
                  name="position"
                  onChange={e => setData({...data,position:e.target.value})}
                  value={data.position}
                />
              </Form.Group>
            </Row>
  
          <Row className="mb-3">
            <Form.Group as={Col}  controlId="realPrice" name="realPrice">
                <Form.Label>real Price</Form.Label>
                <Form.Control  
                    required 
                    type="number" 
                    placeholder="Real Price"
                    id="realPrice"
                    name="realPrice"
                    onChange={e => setData({...data,realPrice:e.target.value})}
                    value={data.realPrice}
                  />
              </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}  controlId="numbrofstock" name="numbrofstock">
                <Form.Label>Number Of Stock</Form.Label>
                <Form.Control  
                    required 
                    type="number" 
                    placeholder="Number Of Stock"
                    onChange={e => setData({...data,numbrofstock:e.target.value})}
                    value={data.numbrofstock}
                  />
                </Form.Group>
          </Row>
          <Container fluid>
          <Row>
          
        <Col></Col>
            <Col><Button type="submit"  style={style.Button} >{props.text} Data</Button></Col>   
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

export default EntryData;