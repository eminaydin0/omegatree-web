import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { SITE, SECTION } from '../config/site'
import { IMG } from '../utils/helpers'
import { FooterNavLinks } from './NavLinks'

export default function Footer() {
  const [email, setEmail] = useState('')
  return (
    <section className="w-100 float-left weight-footer-con" id="footer">
      <Container>
        <Row className="wow fadeInUp">
          <Col lg={4} className="col-12">
            <div className="weight-footer-item text-lg-left text-center">
              <figure>
                <img
                  src={IMG(SITE.logoFile)}
                  alt={SITE.name}
                  className="img-fluid"
                  style={{ maxHeight: 48 }}
                  onError={(e) => { e.target.src = IMG(SITE.logoFallback) }}
                />
              </figure>
              <p className="col-lg-11 pl-0 col-12 pr-0">Metabolizmanızı ölçün, sağlığınızı yönetin. {SITE.name} — {SITE.tagline}.</p>
              <div className="social-icon">
                <ul className="mb-0 pl-0">
                  <li className="d-inline-block"><a href="https://omegatree.com.tr/" className="pl-0"><span className="fab fa-facebook-f" /></a></li>
                  <li className="d-inline-block"><a href="https://omegatree.com.tr/"><span className="fas fa-globe" /></a></li>
                  <li className="d-inline-block"><a href="https://omegatree.com.tr/"><span className="fab fa-linkedin-in" /></a></li>
                  <li className="d-inline-block"><a href="mailto:info@omegatree.com.tr"><span className="fas fa-envelope" /></a></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={5} md={8} className="col-12" id={SECTION.contact}>
            <div className="weight-footer-item Contact-info-con text-sm-left text-center">
              <h5>İletişime Geçin</h5>
              <Row className="mt-2 mt-md-3 text-sm-left text-center">
                <Col sm={6} className="mb-3 mb-sm-0">
                  <p className="small mb-3 mb-sm-4">Analiz hizmetlerimiz hakkında detaylı bilgi almak, fiyat teklifi istemek veya danışmanlık için bize ulaşın.</p>
                  <ul className="mb-0 list-unstyled">
                    <li>
                      <span className="d-block">Adres:</span>
                      <p className="mb-0">Yıldırım Beyazıt Mah. Aşık Veysel Blv. Erciyes Üniversitesi Teknoloji Geliştirme Bölgesi İdare Binası ve Kuluçka Merkezi 4 Binası, 38030 Melikgazi/Kayseri</p>
                    </li>
                  </ul>
                </Col>
                <Col sm={6}>
                  <ul className="mb-0 list-unstyled">
                    <li className="mb-3 mb-sm-4">
                      <span className="d-block">E-posta:</span>
                      <a href="mailto:info@omegatree.com.tr">info@omegatree.com.tr</a>
                    </li>
                    <li>
                      <span className="d-block">Telefon:</span>
                      <a href="tel:+905462257467">+90 546 225 74 67</a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={3} md={4} className="col-12">
            <div className="weight-footer-item newsletter-con text-sm-left text-center">
              <h5>Bize Yazın</h5>
              <ul className="mb-0 list-unstyled">
                <li><p>Size en kısa sürede dönüş yapacağız. E-posta adresinizi bırakın, sizinle iletişime geçelim.</p></li>
                <li className="text-sm-left text-center">
                  <input type="email" placeholder="E-posta" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <button type="button">Gönder <span className="fas fa-arrow-right" /></button>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <div className="footer-navbar">
          <FooterNavLinks />
          <p className="d-inline-block mb-0 ml-5">© {SITE.copyrightYear} {SITE.name} A.Ş. Tüm hakları saklıdır.</p>
        </div>
      </Container>
    </section>
  )
}
