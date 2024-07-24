import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, emptyCart } from '../redux/slice/cartSlice';

function Cart() {

  const cartArray = useSelector((state => state.cartReducer))
  const dispatch = useDispatch()

  const [cartTotal,setCartTotal]=useState('')

  const getCartTotal=()=>{
    if(cartArray.length>0){
      setCartTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setCartTotal(0)
    }
  }
  const handleCartOrder=()=>{
    dispatch(emptyCart())
    alert("Your cart order has been placed...")
  }
  useEffect(()=>{
    getCartTotal()
  },[cartArray])

  return (
    <div className='mt-5'>
      <Row className='d-flex justify-content-evenly'>
        <Col className='me-5'>

          <Table striped bordered hover size="sm" className='m-5 shadow' >
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cartArray?.length > 0 ? cartArray.map((product, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{product.title}</td>
                    <td><img src={product.thumbnail} width={'100px'} alt="" /></td>
                    <td>{product.price}</td>
                    <td>
                      <button className='btn' onClick={() => dispatch(deleteFromCart(product.id))}><i className='fa-solid fa-trash text-danger'></i></button>
                    </td>
                  </tr>
                )) : "No products available"
              }


            </tbody>
          </Table>
        </Col  >
        <Col className='m-5 border shadow d-flex justify-content-center'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Cart Summary</Card.Title>
              <Card.Text>
                <p>Total Cart Item : {cartArray.length}</p>
                <p>Total Price :{cartTotal}</p>

              </Card.Text>
              <Button onClick={()=>handleCartOrder()} variant="secondary">Checkout</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </div>
  )
}

export default Cart