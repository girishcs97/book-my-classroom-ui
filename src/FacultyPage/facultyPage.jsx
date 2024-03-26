import React from 'react';
import './facultyPage.css'
import Header from '../Header/header';

import { useNavigate } from 'react-router-dom'
import { MDBCard, MDBCardHeader, MDBCol, MDBContainer, MDBListGroup, MDBListGroupItem, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';

const FacultyPage = () => {
  const history = useNavigate();

  const onRoomClick = (roomNo) => {
    history('/slotselect', {
      state: {
        room: roomNo,
        loc:'Jonas Clark'
      }
    }
    );
  }

  return (
    <>
      <Header />
      <MDBContainer fluid>
        <div className='mt-4'>
          <MDBRow>
            <MDBCol size='3'>
              <div className='card_data'>
                <MDBCard>
                  <MDBCardHeader><strong>Courses</strong></MDBCardHeader>
                  <MDBListGroup flush>
                    <MDBListGroupItem><span>Design and Analysis of Algorithms</span> <span></span><br /><br /> Time: 6.00 to 9.00 <br /> Days: Wednesday, Loc: JC302</MDBListGroupItem>
                    <MDBListGroupItem><span>Social Informatics</span> <br /><br /> Timeframe: 6.00 to 9.00 <br /> Days: Monday,   Loc: JC102</MDBListGroupItem>
                    <MDBListGroupItem><span>Software Engineering</span><br /><br /><br /></MDBListGroupItem>
                  </MDBListGroup>
                </MDBCard>
              </div>
            </MDBCol>
            <MDBCol size='9'>
              <div>
                <MDBTable responsive striped >
                  <MDBTableHead>
                    <tr>
                      <th scope='col'>Room No</th>
                      <th scope='col'>Location</th>
                      <th scope='col'>Capacity</th>
                      <th scope='col'>Features</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr onClick={e => onRoomClick(102)}>
                      <th scope='row'>102</th>
                      <td>Jonas Clark</td>
                      <td>15</td>
                      <td>Projector<br /> Black Board <br /> White Board <br /> Speakers <br /> Live 360 Camera</td>
                    </tr>
                    <tr onClick={e => onRoomClick(103)}>
                      <th scope='row'>103</th>
                      <td>Jonas Clark</td>
                      <td>60</td>
                      <td>Projector<br /> Black Board <br /> White Board <br /> Speakers <br /> Live 360 Camera</td>
                    </tr>
                    <tr onClick={e => onRoomClick(104)}>
                      <th scope='row'>104</th>
                      <td>Jonas Clark</td>
                      <td>60</td>
                      <td>Projector<br /> Black Board <br /> White Board <br /> Speakers</td>
                    </tr>
                    <tr onClick={e => onRoomClick(202)}>
                      <th scope='row'>202</th>
                      <td>Jonas Clark</td>
                      <td>15</td>
                      <td>Projector<br /> Black Board <br /> White Board <br /> Speakers <br /> Live 360 Camera</td>
                    </tr>
                    <tr onClick={e => onRoomClick(203)}>
                      <th scope='row'>203</th>
                      <td>Jonas Clark</td>
                      <td>60</td>
                      <td>Projector<br /> Black Board <br /> White Board <br /> Speakers <br /> Live 360 Camera</td>
                    </tr>
                    <tr onClick={e => onRoomClick(204)}>
                      <th scope='row'>204</th>
                      <td>Jonas Clark</td>
                      <td>60</td>
                      <td>Projector<br /> Black Board <br /> White Board <br /> Speakers</td>
                    </tr>
                    <tr onClick={e => onRoomClick(302)}>
                      <th scope='row'>302</th>
                      <td>Jonas Clark</td>
                      <td>15</td>
                      <td>Projector<br /> Black Board <br /> White Board <br /> Speakers <br /> Live 360 Camera</td>
                    </tr>
                    <tr onClick={e => onRoomClick(303)}>
                      <th scope='row'>303</th>
                      <td>Jonas Clark</td>
                      <td>60</td>
                      <td>Projector<br /> Black Board <br /> White Board <br /> Speakers <br /> Live 360 Camera</td>
                    </tr>
                    <tr onClick={e => onRoomClick(304)}>
                      <th scope='row'>304</th>
                      <td>Jonas Clark</td>
                      <td>60</td>
                      <td>Projector<br /> Black Board <br /> White Board <br /> Speakers</td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </div>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
    </>
  )
}
export default FacultyPage