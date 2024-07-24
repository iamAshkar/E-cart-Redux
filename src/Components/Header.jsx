import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBIcon,
    MDBBtn,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const wishlistArray = useSelector((state)=>state.wishlistReducer)//to get the wishlist array
    const cartArray = useSelector((state)=>state.cartReducer)
    return (
        <div>
            <MDBNavbar light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>
                        <MDBIcon fas icon='shopping-cart' color='primary' className='fs-2' />
                        <Link to="/">
                        <h3>ShopNShop</h3>
                        </Link>
                    </MDBNavbarBrand>
                    <div className="d-flex justify-content-end ">
                        <Link to="/wishlist">
                            <div className="row">
                                <MDBIcon fas icon="heart" color='danger' className='fs-2 me-4' />
                                <MDBBtn className='btn btn-secondary w-25'>{wishlistArray.length}</MDBBtn>
                            </div>
                        </Link>
                        <Link to="/cart">
                            <div className="row">
                                <MDBIcon fas icon='shopping-cart' color='success' className='fs-2' />
                                <MDBBtn className='btn btn-secondary w-25'>{cartArray.length}</MDBBtn>
                            </div>
                        </Link>
                    </div>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header