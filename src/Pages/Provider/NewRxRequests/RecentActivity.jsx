import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbare from '../../../Compunents/Navbar.jsx';
import Footer from '../../../Compunents/Footer.jsx';
import AllContent from './RecentPageAllComponents.jsx';
export const RecentActivity = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [colContent, setColContent] = useState(<AllContent />);

  const handleTabClick = (tabName, content) => {
    setActiveTab(tabName);
    setColContent(content);
  };
  return (
    <div>
      <Navbare activetab='Provider' bgcolor='transparent' />

      <Container className='pt-5'>
        <div className='mt-5' style={{ width: '80%' }}>
          <Row className='mb-3'>
            <h6>Recent Activity</h6>
          </Row>
          <Row>
            <Col xl={2}>
              <Row>
                <Col className='shadow' style={{ height: '80vh' }}>
                  <div
                    className='text-center my-5 '
                    style={{
                      backgroundColor:
                        activeTab === 'All' ? '#FAB915' : 'transparent',
                      borderRadius: activeTab === 'All' ? '0 15px 15px 0' : '0',
                      color: activeTab === 'All' ? '#FFF' : '#FAB915',
                    }}
                    onClick={() => handleTabClick('All', <AllContent />)}
                  >
                    <p>All</p>
                  </div>
                  <div
                    className='text-center my-5 '
                    style={{
                      backgroundColor:
                        activeTab === 'Messages' ? '#FAB915' : 'transparent',
                      borderRadius:
                        activeTab === 'Messages' ? '0 15px 15px 0' : '0',
                      color: activeTab === 'Messages' ? '#FFF' : '#FAB915',
                    }}
                    onClick={() =>
                      handleTabClick('Messages', 'Content for Messages')
                    }
                  >
                    <p>Messages</p>
                  </div>
                  <div
                    className='text-center my-5 '
                    style={{
                      backgroundColor:
                        activeTab === 'Labs' ? '#FAB915' : 'transparent',
                      borderRadius:
                        activeTab === 'Labs' ? '0 15px 15px 0' : '0',
                      color: activeTab === 'Labs' ? '#FFF' : '#FAB915',
                    }}
                    onClick={() => handleTabClick('Labs', 'Content for Labs')}
                  >
                    <p>Labs</p>
                  </div>
                  <div
                    className='text-center my-5 '
                    style={{
                      backgroundColor:
                        activeTab === 'RX' ? '#FAB915' : 'transparent',
                      borderRadius: activeTab === 'RX' ? '0 15px 15px 0' : '0',
                      color: activeTab === 'RX' ? '#FFF' : '#FAB915',
                    }}
                    onClick={() => handleTabClick('RX', 'Content for RX')}
                  >
                    <p>RX</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl={9} className='shadow ms-4'>
              <Row className='p-4'>{colContent}</Row>
            </Col>
          </Row>
        </div>
      </Container>

      <Footer />
    </div>
  );
};
export default RecentActivity;
