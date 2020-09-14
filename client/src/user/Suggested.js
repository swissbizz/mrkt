import React from 'react'
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBAvatar,
    MDBTooltip
  } from 'mdbreact';

export default function Suggested() {
    return (
        <>
         <h4 className='h4-responsive font-weight-bold mt-3 mb-3'>
              Suggested Friends
            </h4>
            <MDBCard className='px-5 text-center mb-4' style = {{borderRadius: "25px"}}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol lg='3' md='6' className='mb-lg-0'>
              <MDBTooltip
                     domElement
                    tag="span"
                     material
                    placement="top"
                    >
                <a href = 'https://www.linkedin.com/in/jessica-vaiana-cavanagh/' target = "_blank" rel="noopener noreferrer"><MDBAvatar
                  tag='img'
                  src='https://ca.slack-edge.com/T0105GKDN1H-U0109GZP6HH-dcfd7b601289-512'
                  className='rounded-circle z-depth-1 img-fluid'
                  alt='Sample avatar'
                /></a>
                    <span>Jessica Vaiana-Cavanagh</span>
                    </MDBTooltip>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-lg-0'>
              <MDBTooltip
                     domElement
                    tag="span"
                     material
                    placement="top"
                    >
                <a href = 'https://www.linkedin.com/in/yssabel-pangilinan/' target = "_blank" rel="noopener noreferrer"><MDBAvatar
                  tag='img'
                  src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/45330489_10217559092270437_1476428195212296192_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=jVgGWMhFpmMAX-ipYpt&_nc_ht=scontent-sjc3-1.xx&oh=550bf29c26f3f1145fb4e98705d14da9&oe=5F7D6F6A'
                  className='rounded-circle z-depth-1 img-fluid'
                  alt='Sample avatar'
                /></a>
                <span>Yssabel Pangilinan</span>
                    </MDBTooltip>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-lg-0'>
              <MDBTooltip
                     domElement
                    tag="span"
                     material
                    placement="top"
                    >
                <a href = 'https://www.linkedin.com/in/marc-r-martinez/' target = "_blank" rel="noopener noreferrer"><MDBAvatar
                  tag='img'
                  src='https://media-exp1.licdn.com/dms/image/C5603AQHWy72M8yVWmQ/profile-displayphoto-shrink_800_800/0?e=1605139200&v=beta&t=S0JTdPoeys84o4yp1lVfDNaTKR3Hux14rfWzo7d2n2Q'
                  className='rounded-circle z-depth-1 img-fluid'
                  alt='Sample avatar'
                /></a>
                <span>Marc Martinez</span>
                    </MDBTooltip>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-lg-0'>
              <MDBTooltip
                     domElement
                    tag="span"
                     material
                    placement="top"
                    >
                <a href = 'https://www.linkedin.com/in/rafael-jimenez-4b100a1a3/' target = "_blank" rel="noopener noreferrer"><MDBAvatar
                  tag='img'
                  src='https://media-exp1.licdn.com/dms/image/C5603AQFkzMRgr1A15A/profile-displayphoto-shrink_800_800/0?e=1605139200&v=beta&t=B2LcuTGImJZvKgQ7a0cOwq7DZKSspRWmDNePpwOn2oY'
                  className='rounded-circle z-depth-1 img-fluid'
                  alt='Sample avatar'
                /></a>
                 <span>Rafael Jimenez</span>
                    </MDBTooltip>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
          </MDBCard>
            
        </>
    )
}
