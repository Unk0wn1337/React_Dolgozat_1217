import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'


function Kosar(props) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{props.obj.nev}</Card.Title>
      <Card.Text>
            {props.obj.leiras}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default Kosar