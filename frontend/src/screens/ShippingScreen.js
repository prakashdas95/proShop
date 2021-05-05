import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer.js';
import CheckoutSteps from '../components/CheckoutSteps.js';
import { saveShippingAddress } from '../actions/cartActions.js';

const ShippingScreen = ({ history }) => {
    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;

    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.postalCode);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, postalCode, country }));
        history.push('/payment');
    };
    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group control='address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Address'
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group control='city'>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter City'
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group control='postalCode'>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter postalCode'
                        value={postalCode}
                        onChange={e => setPostalCode(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group control='country'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Country'
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type="submit" variant='primary'>Continue</Button>
            </Form>
        </FormContainer>
    );
};

export default ShippingScreen;
