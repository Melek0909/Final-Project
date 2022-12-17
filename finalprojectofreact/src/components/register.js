
import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import api from './api';

export default function Registerpage() {
    const [name, setName]=useState("")
    const [email,setEmail]=useState("")
    const [password, setPassword]=useState("")

    function Signup(){
        let item={name,password,email}

        const [users,setUsers]=useState(null);
        const adduser=async()=>{
        const response = await api.post("/users")
        setUsers([...users,response.item])}
        }


return (
    <div style={{ marginLeft:"100px", marginTop:"50px" }}>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontSize:"40px", marginRight:"420px"}}>Username:</Form.Label>
                <br/>
                <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="name" placeholder="Enter Username" style={{ width:"600px", height:"40px", marginTop:"10px",marginBottom:"20px", fontSize:"30px" }} />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontSize:"40px", marginRight:"400px"}}>Email address:</Form.Label>
                <br/>
                <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" style={{ width:"600px", height:"40px", marginTop:"10px",marginBottom:"20px", fontSize:"30px" }} />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ fontSize:"40px", marginRight:"420px"}}>Password:</Form.Label>
                <br/>
                <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" style={{ width:"600px", height:"40px", marginTop:"10px",marginBottom:"20px", fontSize:"30px" }} />
            </Form.Group>
            <Button onClick={Signup} variant="primary" type="submit" style={{ height:"40px", width:"240px", fontSize:"20px", marginTop:"20px" }}>
                Submit
            </Button>
        </Form>
    </div>
);
}
