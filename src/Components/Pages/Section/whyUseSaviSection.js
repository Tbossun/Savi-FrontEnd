import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import exchangeIcon from '../../../Assests/icons/exchange.svg';
import walletIcon from '../../../Assests/icons/Wallet.svg';
import notificationIcon from '../../../Assests/icons/Notification.svg';
import 'bootstrap/dist/css/bootstrap.min.css';


const WhySaviSection = () => {
  return (
    <section className='bg-light py-5'>
      <Container>
        <h2 className='text-center mb-4'>Why use Savi?</h2>
        <Row className='justify-content-center'>
          <Col xs={12} md={4} className='mb-4'>
            <div className='d-flex flex-column align-items-center'>
              <div className='rounded-circle d-flex justify-content-center align-items-center'>
                <img src={exchangeIcon} alt='exchangeIcon' className='App-logo' />
              </div>
              <h4 className='font-weight-bold mt-3'>Contribution Analytics</h4>
              <div>
                <h6 className='font-weight-light'>
                  Admins gain valuable insights into group contributions and track member participation.
                </h6>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className='mb-4'>
            <div className='d-flex flex-column align-items-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <img src={walletIcon} alt='walletIcon' className='App-logo' />
              </div>
              <h4 className='font-weight-bold mt-3'>Wallet Integration</h4>
              <div>
                <h6 className='font-weight-light'>
                  Add funds to your wallet easily using various payment methods and withdraw securely.
                </h6>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className='mb-4'>
            <div className='d-flex flex-column align-items-center'>
              <div className=' rounded-circle d-flex justify-content-center align-items-center'>
                <img src={notificationIcon} alt='notificationIcon' className='App-logo' />
              </div>
              <h4 className=' font-weight-bold mt-3'>Notifications and Reminders</h4>
              <div >
                <h6 className='font-weight-light'>
                  Stay informed about group activities, cashouts, and important updates.
                </h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhySaviSection;
