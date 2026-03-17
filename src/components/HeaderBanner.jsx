import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import { IMG } from '../utils/helpers'

export default function HeaderBanner() {
  const [expanded, setExpanded] = useState(false)
  const [bannerAnimated, setBannerAnimated] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setBannerAnimated(true), 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="header-and-banner-con w-100 overflow">
      <div className="header-and-banner-inner-con">
        <header className="header-main-con">
          <Container>
            <div className="header-con">
              <Navbar expand="lg" className="navbar-light p-0">
                <Navbar.Brand href="#" className="p-0">
                  <img src={IMG('logo-img.png')} alt="logo" className="img-fluid" />
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls="navbarSupportedContent"
                  onClick={() => setExpanded(!expanded)}
                  className="p-0"
                />
                <Navbar.Collapse id="navbarSupportedContent" in={expanded} className="justify-content-end">
                  <Nav as="ul" className="navbar-nav">
                    <Nav.Item as="li">
                      <Nav.Link href="#" className="p-0 pl-0 active"><span className="d-block">01</span> Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#services" className="p-0"><span className="d-block">02</span> Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#work" className="p-0"><span className="d-block">03</span> Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#testimonials" className="p-0"><span className="d-block">04</span> Company</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#testimonials" className="p-0"><span className="d-block">05</span> Blog</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </Container>
        </header>
        <section className="banner-main-con">
          <Container>
            <div className="banner-con text-md-left text-center">
              <Row>
                <Col lg={5} md={6} className="d-flex justify-content-center flex-column banner-main-left-con order-md-0 order-2">
                  <div
                    className={`banner-left-con position-relative ${bannerAnimated ? 'animated slideInLeft' : 'banner-init-left'}`}
                    style={bannerAnimated ? { animationDuration: '0.8s' } : undefined}
                  >
                    <h1>We're <br />Design Trend <br />Creators.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="get-started"><a href="#services">Get Started Now</a></div>
                    <span className="d-block">01<small>.</small></span>
                  </div>
                </Col>
                <Col lg={7} md={6} className="d-flex justify-content-lg-end justify-content-center pr-lg-0">
                  <div
                    className={`banner-right-con position-relative ${bannerAnimated ? 'animated slideInRight' : 'banner-init-right'}`}
                    style={bannerAnimated ? { animationDuration: '0.8s' } : undefined}
                  >
                    <figure className="mb-0">
                      <img src={IMG('banner-right-img.png')} alt="banner" />
                    </figure>
                    <div
                      className={`banner-img-detail ${bannerAnimated ? 'animated bounceInUp' : 'banner-init-bounce'}`}
                      style={bannerAnimated ? { animationDuration: '0.8s', animationDelay: '300ms' } : undefined}
                    >
                      <h3 className="mb-0">Actions for <span>Accessibility</span> in Design.</h3>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </div>
    </div>
  )
}
