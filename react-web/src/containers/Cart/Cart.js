import React, {useState, useEffect} from 'react';
import ReservedItem from '../ReservedItem/ReservedItem';
import {CartOuter, ShoppingCartTitle, Purches, Buy, TotalAmount, TotalAmountTitle, Price, CartButtons, BackToCatalogBtn, ContinueBtn} from '../Cart/Cart.styled';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
    let history = useHistory();
    const select = useSelector((state) => state);

    const goBack = () => {
        history.push(`/Shop`);
    }

    const goToCheckout = () => {
        history.push(`/checkout`);
    }

    return(
        <CartOuter>
            <ShoppingCartTitle>Shopping cart</ShoppingCartTitle>
            <Purches>
                {select.reservations.map((value) => {
                    return <ReservedItem value={value}/>
                })}
            </Purches>
            <Buy>
                <TotalAmount>
                    <TotalAmountTitle>Total amount :</TotalAmountTitle>
                    <Price>${select.totalPrice}</Price>
                </TotalAmount>
                <CartButtons>
                    <BackToCatalogBtn onClick={goBack}>Back to Shop</BackToCatalogBtn>
                    <ContinueBtn onClick={goToCheckout}>Continue</ContinueBtn>
                </CartButtons>
            </Buy>
        </CartOuter>
    );
}

export default Cart;