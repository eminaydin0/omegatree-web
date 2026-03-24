import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { IMG } from '../utils/helpers'

const LOGO = 'OmegaTree_23Şubat_V1_Beyaz.jpg'

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
                  src={IMG(LOGO)}
                  alt="OmegaTree"
                  className="img-fluid"
                  style={{ maxHeight: 48 }}
                  onError={(e) => { e.target.src = IMG('logo-img.png') }}
                />
              </figure>
              <p className="col-lg-11 pl-0 col-12 pr-0">Metabolizmanızı ölçün, sağlığınızı yönetin. OmegaTree — Doğanın bilimle buluştuğu yer.</p>
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
          <Col lg={2} md={4} sm={4} className="col-6">
            <div className="weight-footer-item quick-item">
              <h5>Hızlı Bağlantılar</h5>
              <ul className="mb-0 list-unstyled">
                <li><span className="fas fa-angle-right" /><a href="#">Ana Sayfa</a></li>
                <li><span className="fas fa-angle-right" /><a href="#ozellikler">Özellikler</a></li>
                <li><span className="fas fa-angle-right" /><a href="#nasil-calisir">Nasıl Çalışır?</a></li>
                <li><span className="fas fa-angle-right" /><a href="#hakkimizda">Hakkımızda</a></li>
                <li><span className="fas fa-angle-right" /><a href="#iletisim">İletişim</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={4} sm={4} className="col-12" id="iletisim">
            <div className="weight-footer-item Contact-info-con text-sm-left text-center">
              <h5>İletişime Geçin</h5>
              <p className="small">Analiz hizmetlerimiz hakkında detaylı bilgi almak, fiyat teklifi istemek veya danışmanlık için bize ulaşın.</p>
              <ul className="mb-0 list-unstyled">
                <li><span className="d-block">Adres:</span><p>Yıldırım Beyazıt Mah. Aşık Veysel Blv. Erciyes Üniversitesi Teknoloji Geliştirme Bölgesi İdare Binası ve Kuluçka Merkezi 4 Binası, 38030 Melikgazi/Kayseri</p></li>
                <li><span className="d-block">E-posta:</span><a href="mailto:info@omegatree.com.tr">info@omegatree.com.tr</a></li>
                <li><span className="d-block">Telefon:</span><a href="tel:+905462257467">+90 546 225 74 67</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={4} sm={4} className="col-12">
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
          <ul className="list-unstyled d-inline-block mb-0">
            <li className="d-inline-block pl-0"><a href="#" className="text-decoration-none text-reset">Ana Sayfa</a></li>
            <li className="d-inline-block"><a href="#ozellikler" className="text-decoration-none text-reset">Özellikler</a></li>
            <li className="d-inline-block"><a href="#nasil-calisir" className="text-decoration-none text-reset">Nasıl Çalışır?</a></li>
            <li className="d-inline-block"><a href="#hakkimizda" className="text-decoration-none text-reset">Hakkımızda</a></li>
            <li className="d-inline-block pr-0"><a href="#iletisim" className="text-decoration-none text-reset">İletişim</a></li>
          </ul>
          <p className="d-inline-block float-lg-end mb-0">© 2025 OmegaTree A.Ş. Tüm hakları saklıdır.</p>
        </div>
      </Container>
    </section>
  )
}
