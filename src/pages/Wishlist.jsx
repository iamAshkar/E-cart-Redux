
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { deleteFromWishlist } from '../redux/slice/wishlist';
import { addToCart } from '../redux/slice/cartSlice';
function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)//to get the wishlist array
  const dispatch = useDispatch()
  const handleWishlistCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(deleteFromWishlist(product.id))
  }
  return (
    <div className='d-flex'>
       <div className="row">
        {
          wishlistArray?.length > 0 ? wishlistArray.map((product) => (
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
                 <MDBBtn  onClick={()=>dispatch(deleteFromWishlist(product.id))} className='bg-light'> <i className='fa-solid fa-trash text-danger fs-3 '></i> </MDBBtn>
                  <MDBBtn onClick={()=>handleWishlistCart(product)} className='bg-light'> <i className='fa-solid fa-cart-plus text-success fs-3 '></i> </MDBBtn>
                 </div>
                </MDBCardBody>
              </MDBCard>
            </div>
          )) : "null"
        }

      </div>
    </div>
  )
}

export default Wishlist
