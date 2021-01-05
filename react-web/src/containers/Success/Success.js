import React from 'react';
import successPurchase from "../../Icons/success.png";
import {SuccessOuter, SuccessImage, SuccessText, SuccessBtn} from '../Success/Success.styled';
import { useHistory } from "react-router-dom";

const Success = () => {
    let history = useHistory();

    const goBack = () => {
        history.push(`/Shop`);
    }

    return(
        <SuccessOuter>
            <SuccessImage src={successPurchase}/>
            <SuccessText>Your order was sent to processing!</SuccessText>
            <SuccessBtn onClick={goBack}>Go back to shop</SuccessBtn>
        </SuccessOuter>
    );
}

export default Success;