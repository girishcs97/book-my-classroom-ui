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
    MDBTabsContent,
} from 'mdb-react-ui-kit';
import logo from '../Images/logo.svg';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { SIGNIN_URL, SIGNUP_URL } from '../URLconstants';

const UserAuth = () => {
    const history = useNavigate();
    const [justifyActive, setJustifyActive] = useState('tab1');
    const [btndisabled, setbtnDisabled] = useState(false)
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [mailid, setMailid] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
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
        try {
            const response = await axios({
                method: 'post', url: SIGNUP_URL, data: {
                    name:name,
                    username: username,
                    password: password,
                    confirm_password: confirmPassword,
                    phone_number: phoneNo,
                    email: mailid,
                    course: 'CS'
                }
            });
            if (response && response.status === 200) {
                toast.success("Registered Succesfully")
                setJustifyActive('tab1');
            }
            setUserName('')
            setPassword('')
            setName('')
            setMailid('')
            setPhoneNo('')
            setCourse('')
            setConfirmPassword('')
        }

        catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else if (error.request) {
                toast.error('No response received from the server');
            } else {
                toast.error('Error: ' + error.message);
            }
            setJustifyActive('tab1') // temporary solution
        }

        setbtnDisabled(false)

    }
    const onSignIn = async () => {
        setbtnDisabled(true)
        try {
            const response = await axios({
                method: 'post', url: SIGNIN_URL, data: {
                    username: username,
                    password: password,
                }
            });

            if (response && response.status === 200) {
                toast.success("Login Succesfull")
                history("/faculty")
            }
            setUserName('')
            setPassword('')
        }

        catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else if (error.request) {
                toast.error('No response received from the server');
            } else {
                toast.error('Error: ' + error.message);
            }
        }

        setbtnDisabled(false)
    }
    const onSelectCourse = (e) => {
        console.log("value selected", e.target.value)
        setCourse(e.target.value)
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
                        <div className={`vertical-center border-style ${justifyActive === 'tab1' ? 'login-page' : 'signup-page'}`}>
                            <div className='d-flex flex-row'><img src={logo}
                                height="25"
                                width={25} alt="logo" className="mt-2" />
                                <p className='logo-header'>BookMyClassroom</p>
                            </div>
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
                                    <p className="text-center mt-4">Not a member? <a href="#!" onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>Register</a></p>

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
                                    <MDBRow>
                                        <MDBCol>
                                            <p className='margin-bottom2'>Course</p>
                                            <select name="selectedCourse" className='form-control' onChange={(e) => onSelectCourse(e)}>
                                                <option value="computerscience">Computer Science</option>
                                                <option value="informationtechnology">Information Technology</option>
                                                <option value="dataanalytics">Data Analytics</option>
                                                <option value="projectmanagement">Project Management</option>
                                                <option value="businessanalytics">Business Analytics</option>
                                                <option value="management">Management</option>
                                            </select>
                                        </MDBCol>
                                    </MDBRow>
                                    <button className='btn-sign mt-4' onClick={() => onSignup()} disabled={btndisabled}>Sign Up</button>
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