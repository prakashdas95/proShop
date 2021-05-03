import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message.js';
import Loader from '../components/Loader.js';
import FormContainer from '../components/FormContainer.js';
import { login } from '../actions/userActions.js';

const LoginScreen = ({ location }) => {
    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(()=.);

    const redirect = location.search ? location.search.split('=')[1] : '/';
    const submitHandler = e => {
        e.preventDefault();
        // Dispatch Login
    };

    return (
        <FormContainer>
            <h1>Sign In</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group control='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group control='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>Sign In</Button>
            </Form>
            <Row className='py-3'>
                <Col>New Customer? <Link to={redirect ? `/register?=${redirect}` : '/register'}>Register</Link></Col>
            </Row>
        </FormContainer>
    );
};

export default LoginScreen;
