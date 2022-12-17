import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Loginpage() {
return (
    <div style={{ marginLeft:"100px", marginTop:"50px" }}>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontSize:"40px", marginRight:"420px"}}>Username:</Form.Label>
                <br/>
                <Form.Control type="name" placeholder="Enter Username" style={{ width:"600px", height:"40px", marginTop:"10px", fontSize:"30px" }} />
                <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>
    
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ fontSize:"40px",marginRight:"420px"}}>Password:</Form.Label>
            <br/>
            <Form.Control type="password" placeholder="Enter Password" style={{ width:"600px", height:"40px", marginTop:"10px",marginBottom:"20px", fontSize:"30px" }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{marginRight:"420px",}}>
            <Form.Check type="checkbox" label="Check me out" style={{ marginBottom:"20px", fontSize:"30px"  }} />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ height:"40px", width:"120px", fontSize:"20px", marginTop:"20px" }}>
            Login
        </Button>
        <Button variant="primary" type="submit" href="/Register" style={{ height:"40px", width:"120px", fontSize:"20px", marginTop:"20px", marginLeft:"50px" }}>
            Register
        </Button>
        </Form>
    </div>
);
}


