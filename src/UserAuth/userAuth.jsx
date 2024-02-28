import React, { useState } from 'react';
import './userAuth.css';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsPane,
    MDBTabsContent
} from 'mdb-react-ui-kit';
import logo from '../Images/logo.svg';
import axios from 'axios';
import toast from 'react-hot-toast';

const UserAuth = () => {
    const [justifyActive, setJustifyActive] = useState('tab1');
    const [btndisabled, setbtnDisabled] = useState(false)
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [mailid, setMailid] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);
        setUserName('');
        setPassword('');
    };
    const onChangeText = (e, type) => {
        if (type === 'username') {
            setUserName(e.target.value)
        }
        if (type === 'password') {
            setPassword(e.target.value)
        }
        if (type === 'name') {
            setName(e.target.value)
        }
        if (type === 'mailid') {
            setMailid(e.target.value)
        }
        if (type === 'confirmPassword') {
            setConfirmPassword(e.target.value)
        }
        if (type === 'phoneNo') {
            setPhoneNo(e.target.value)
        }
    }

    const onSignup = async () => {
        setbtnDisabled(true)
        setbtnDisabled(false)
        setUserName('');
        setPassword('');

    }
    const onSignIn = async () => {
        setbtnDisabled(true)
        setbtnDisabled(false)

    }
    return (
        <div className='bg-color'>
            <MDBContainer fluid className="">
                <MDBRow>
                    <MDBCol col='10' md='6' style={{ paddingLefteft: '39px' }}>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                            className="custom-img" alt="" style={{ width: '170%', height: '100%' }} />
                    </MDBCol>
                    <MDBCol col='4' md='6'>
                        <div className={`vertical-center border-style ${justifyActive === 'tab1'?'login-page':'signup-page'}`}>
                            <p className='logo-header'>BookMyClassroom</p>
                            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} className='header-title bg-color-cus'>
                                        Login
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'} className='header-title bg-color-cus'>
                                        Register
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>

                            <MDBTabsContent>
                                <MDBTabsPane open={justifyActive === 'tab1'}>
                                    <p className='margin-bottom2'>Username</p>
                                    <MDBInput wrapperClass='mb-4' type='text' placeholder="username" onChange={(e) => onChangeText(e, 'username')} />
                                    <p className='margin-bottom2'>Password</p>
                                    <MDBInput wrapperClass='mb-4' type='password' placeholder="password" onChange={(e) => onChangeText(e, 'password')} />
                                    <button className='btn-sign mb-3' onClick={() => { onSignIn() }} disabled={btndisabled}>Sign In</button>
                                    <p className="text-center">Not a member? <a href="#!" onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>Register</a></p>

                                </MDBTabsPane>

                                <MDBTabsPane open={justifyActive === 'tab2'}>
                                    <MDBRow>
                                        <MDBCol size='md'><p className='margin-bottom2'>Name</p>
                                            <MDBInput wrapperClass='mb-4' type='text' placeholder="name" onChange={(e) => onChangeText(e, 'name')} value={name} />
                                        </MDBCol>
                                        <MDBCol size='md'><p className='margin-bottom2'>Mail Id</p>
                                            <MDBInput wrapperClass='mb-4' type='text' placeholder="mail Id" onChange={(e) => onChangeText(e, 'mailid')} value={mailid} />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol size='md'><p className='margin-bottom2'>Phone No.</p>
                                            <MDBInput wrapperClass='mb-4' type='text' placeholder="Phone No" onChange={(e) => onChangeText(e, 'phoneNo')} value={phoneNo} />
                                        </MDBCol>
                                        <MDBCol size='md'><p className='margin-bottom2'>Username</p>
                                            <MDBInput wrapperClass='mb-4' type='text' placeholder="username" onChange={(e) => onChangeText(e, 'username')} value={username} />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol size='md'><p className='margin-bottom2'>Password</p>
                                            <MDBInput wrapperClass='mb-4' type='password' placeholder="password" onChange={(e) => onChangeText(e, 'password')} value={password} />
                                        </MDBCol>
                                        <MDBCol size='md'><p className='margin-bottom2'>Confirm Password</p>
                                            <MDBInput wrapperClass='mb-4' type='password' placeholder="password" onChange={(e) => onChangeText(e, 'confirmPassword')} value={confirmPassword} />
                                        </MDBCol>
                                    </MDBRow>
                                    <button className='btn-sign' onClick={() => onSignup()} disabled={btndisabled}>Sign Up</button>
                                </MDBTabsPane>

                            </MDBTabsContent>
                        </div>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </div>
    );
}

export default UserAuth;