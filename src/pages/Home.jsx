import React from 'react'
import useFetch from '../hooks/useFetch'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slice/wishlist';
import { addToCart } from '../redux/slice/cartSlice';
function Home() {

  const dispatch = useDispatch()

  const result = useFetch("https://dummyjson.com/products")
  console.log(result);
  return (
    <>
      <div className="row">
        {
          result?.length > 0 ? result.map((product) => (
            <div className="col">
              <MDBCard style={{ width: '300px', height: "500px", margin: '10px' }}>
                <MDBCardImage height={'300px'} src={product.thumbnail} position='top' alt='...' />
                <MDBCardBody>
                  <MDBCardTitle>{product.title}</MDBCardTitle>
                  <MDBCardText>
                    {product.description.slice(0,30) }
                    <br />
                    Price : {product.price}
                  </MDBCardText>
                 <div className="d-flex justify-content-evenly">
                 <MDBBtn onClick={()=>dispatch(addToWishlist(product))} className='bg-light'> <i className='fa-solid fa-heart text-danger fs-3 '></i> </MDBBtn>
                  <MDBBtn onClick={()=>dispatch(addToCart(product))} className='bg-light'> <i className='fa-solid fa-cart-plus text-success fs-3 '></i> </MDBBtn>
                 </div>
                </MDBCardBody>
              </MDBCard>
            </div>
          )) : "null"
        }

      </div>

    </>
  )
}

export default Home