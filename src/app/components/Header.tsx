'use client'
import React from 'react'
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OffCanvasHeader from './OffCanvasHeader';

const Header = () => {
  return (
    <>
      <Navbar key={'false'} expand={false} className="bg-body-tertiary mb-3">
        <Container fluid>
          <div className='header-row'>
            <div className='header-left'>
              <div className='btn-show-category-offcanvas'>
                <OffCanvasHeader placement={"top"} name={"Show category"} />
              </div>
              <div className='line'></div>
            </div>
            <div className='header-center'></div>
            <div className='header-right'>
              <div className='btn-search'></div>
              <div className='line'></div>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
