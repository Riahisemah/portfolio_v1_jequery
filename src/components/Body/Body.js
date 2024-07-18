import React from 'react'
import {Container} from 'react-bootstrap';


const Body = (props) => {

    return (
    <Container className='text-center' style={{color: "rgb(242, 240, 240)"}}>
        {props.children}
    </Container>
    )
}

export default Body;