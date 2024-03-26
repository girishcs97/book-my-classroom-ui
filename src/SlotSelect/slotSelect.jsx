import { MDBBtn, MDBContainer, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/header';

const SlotSelect = () => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [centredModal, setCentredModal] = useState(false);
    const [roomNo, setRoomNo] = useState('');
    const [roomLoc, setRoomLoc] = useState('');
    const [time, setTime] = useState('');
    const [day, setDay] = useState('')
    let location = useLocation();
    const initialSlotDates = {
        '9to12': { 'Monday': 'Design and Analysis of Algorithm', 'Tuesday': '', 'Wednesday': '', 'Thursday': '', 'Friday': '', 'Saturday': '' },
        '12to3': { 'Monday': '', 'Tuesday': '', 'Wednesday': '', 'Thursday': '', 'Friday': '', 'Saturday': '' },
        '3to6': { 'Monday': '', 'Tuesday': '', 'Wednesday': '', 'Thursday': 'Social Informatics', 'Friday': '', 'Saturday': '' },
        '6to9': { 'Monday': '', 'Tuesday': '', 'Wednesday': '', 'Thursday': '', 'Friday': '', 'Saturday': '' }

    }
    const [slotDates, setSlotDates] = useState(initialSlotDates)

    useEffect(() => {
        if (location && location.state && location.state.room && location.state.loc) {
            setRoomNo(location.state.room)
            setRoomLoc(location.state.loc)
        }
    }, [location])

    const onOpenModal = (time, day) => {
        setCentredModal(true)
        setTime(time);
        setDay(day);
    };

    const toggleOpen = () => {
        setCentredModal(true)
    };

    const loadColdata = (i) => {
        const newi = i.replaceAll(' ', '')
        return <><div className='row'>
            <div class="col-sm-1">
                <div class="">
                    <div class="card-body">
                        <p>{i}</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-11'>
                <div className='row'>
                    {days.map((j) => {
                        return <div class="col-sm-2">
                            <div class="card" style={{ 'height': '75px' }} onClick={() => onOpenModal(newi, j)}>
                                <div class="card-body">
                                    {slotDates[newi][j]}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
        </>
    }

    const onLoadCards = () => {
        const timeSlots = ['9 to 12', '12 to 3', '3 to 6', '6 to 9'];
        const tableCards = <div className='row'>
            <div className="col-sm-1">
                <div className="">
                    <div className="card-body">
                    </div>
                </div>
            </div>
            <div className='col-sm-11'>
                <div className='row'>
                    {days.map((i) => {
                        return <div className="col-sm-2">
                            <div className="card d-flex justify-content-center">
                                <div className="card-body">
                                    <p>{i}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
        const timeData = timeSlots.map((i, index) => {
            return (
                <>
                    <br />
                    {loadColdata(i, index)}
                </>
            )
        })
        return <>
            {tableCards}
            {timeData}
        </>;
    }

    const onToggleClose = () => {
        setCentredModal(false)
    }
    // const onCourseSelect = (e) => {
    //     const val = e.target.value;
    //     const data = Object.keys(slotDates).forEach(key => {
    //         if (key === time) {
    //             Object.keys(slotDates[key]).forEach(key1 => {
    //                 if (key1 === day) {
    //                     return { ...slotDates[key], slotDates[key][i]: }
    //                 }
    //             });
    //         }
    //     });
    // }
    return (
        <>
            <Header />
            <div className='m-4'>
                <MDBContainer fluid>
                    <div>
                        <div className="d-flex justify-content-center">
                            <h3>{`${roomLoc} Room ${roomNo}`}</h3>
                        </div>
                    </div>
                    <br />
                    {onLoadCards()}
                    <div>
                    </div>
                    <div>
                        <MDBModal tabIndex='-1' open={centredModal} setOpen={setCentredModal}>
                            <MDBModalDialog centered>
                                <MDBModalContent>
                                    <MDBModalHeader>
                                        <MDBModalTitle>Book Slot</MDBModalTitle>
                                        <MDBBtn className='btn-close' color='none' onClick={onToggleClose}></MDBBtn>
                                    </MDBModalHeader>
                                    <MDBModalBody>
                                        <p>Select Course</p>
                                        <select name="selectCourse" className='form-control'>
                                            <option value="informationtechnology">Software Engineering</option>
                                            <option value="dataanalytics">Social Informatics</option>
                                            <option value="projectmanagement">Design and Analysis of Algorithm</option>
                                        </select>
                                    </MDBModalBody>
                                    <MDBModalFooter>
                                        <button type='button' className='btn btn-secondary' onClick={onToggleClose}>
                                            Close
                                        </button>
                                        <button type='button' className='btn btn-primary' onClick={toggleOpen}>Save</button>
                                    </MDBModalFooter>
                                </MDBModalContent>
                            </MDBModalDialog>
                        </MDBModal>
                    </div>
                </MDBContainer>
            </div>
        </>
    )
};
export default SlotSelect