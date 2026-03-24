import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import { IMG } from '../utils/helpers'

const LOGO = 'OmegaTree_23Şubat_V1_Beyaz.jpg'

export default function HeaderBanner() {
  const [expanded, setExpanded] = useState(false)
  const [bannerAnimated, setBannerAnimated] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setBannerAnimated(true), 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="header-and-banner-con omegatree-hero w-100 overflow">
      <div className="header-and-banner-inner-con">
        <header className="header-main-con">
          <Container>
            <div className="header-con">
              <Navbar expand="lg" className="navbar-light p-0">
                <Navbar.Brand href="#" className="p-0">
                  <img src={IMG(LOGO)} alt="OmegaTree" className="img-fluid" style={{ maxHeight: 48 }} onError={(e) => { e.target.src = IMG('logo-img.png') }} />
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls="navbarSupportedContent"
                  onClick={() => setExpanded(!expanded)}
                  className="p-0"
                />
                <Navbar.Collapse id="navbarSupportedContent" in={expanded} className="justify-content-end">
                  <Nav as="ul" className="navbar-nav">
                    <Nav.Item as="li">
                      <Nav.Link href="#" className="p-0 pl-0 active"><span className="d-block">01</span> Ana Sayfa</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#ozellikler" className="p-0"><span className="d-block">02</span> Özellikler</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#nasil-calisir" className="p-0"><span className="d-block">03</span> Nasıl Çalışır?</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#hakkimizda" className="p-0"><span className="d-block">04</span> Hakkımızda</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#iletisim" className="p-0"><span className="d-block">05</span> İletişim</Nav.Link>
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
              <Row className="align-items-center gy-4 gy-lg-0">
                <Col lg={5} md={6} className="d-flex justify-content-center flex-column banner-main-left-con order-md-0 order-2">
                  <div
                    className={`banner-left-con position-relative ${bannerAnimated ? 'animated slideInLeft' : 'banner-init-left'}`}
                    style={bannerAnimated ? { animationDuration: '0.8s' } : undefined}
                  >
                    <h1 className="banner-hero-title mb-0">Metabolik Sağlığınız İçin <br />Kanıta Dayalı Bir Değerlendirme</h1>
                    <p className="banner-hero-lead">MAS-10® ile evde güvenle aldığınız sabit hacimli kan örneği, hedefli metabolomik analizle anlam kazanır. OmegaTree bu verileri beslenme ve yaşam tarzınızla birleştirerek size özel, uygulanabilir ve bilim temelli bir beslenme–yaşam tarzı planı üretir.</p>
                    <div className="get-started banner-hero-cta d-flex flex-wrap align-items-center justify-content-md-start justify-content-center">
                      <a href="#ozellikler">Özellikler</a>
                      <span className="banner-hero-cta-sep d-inline-block" aria-hidden="true">|</span>
                      <a href="#nasil-calisir">Nasıl Çalışır?</a>
                    </div>
                    <span className="banner-step-num d-block">01<small>.</small></span>
                  </div>
                </Col>
                <Col lg={7} md={6} className="d-flex justify-content-lg-end justify-content-center pr-lg-0">
                  <div
                    className={`banner-right-con position-relative ${bannerAnimated ? 'animated slideInRight' : 'banner-init-right'}`}
                    style={bannerAnimated ? { animationDuration: '0.8s' } : undefined}
                  >
                    <figure className="mb-0">
                      <img src={IMG('banner-right-img.png')} alt="OmegaTree" />
                    </figure>
                    <div
                      className={`banner-img-detail ${bannerAnimated ? 'animated bounceInUp' : 'banner-init-bounce'}`}
                      style={bannerAnimated ? { animationDuration: '0.8s', animationDelay: '300ms' } : undefined}
                    >
                      <h3 className="mb-2">
                        Doğanın Bilimle <span>Buluştuğu Yer</span>
                      </h3>
                      <p className="banner-img-sub mb-2">
                        Evde örnek alımından <strong>kişisel rapora</strong> uzanan süreç
                      </p>
                      <div className="banner-img-chips">
                        <span className="banner-chip"><i className="fas fa-vial me-2" />10 µL</span>
                        <span className="banner-chip"><i className="fas fa-microscope me-2" />LC-MS/MS</span>
                        <span className="banner-chip"><i className="fas fa-brain me-2" />AI Öneri</span>
                      </div>
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
