import useScrollReveal from '../../hooks/useScrollReveal'
import { brandLogo } from '../../config/brandAssets'

export default function Footer() {
  const footerRef = useScrollReveal({ threshold: 0.08 })

  return (
    <footer id="dtr-footer" ref={footerRef} className="site-footer ot-reveal-section">
      <div className="container ot-reveal ot-delay-1">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-5 small-device-space">
            <img src={brandLogo} alt="OmegaTree" className="dtr-mb-30 footer-logo brand-logo" />
            <p className="dtr-mb-30 footer-slogan">
              Metabolizmanızı ölçün, sağlığınızı yönetin.
            </p>
            <p className="footer-copyright">
              © {new Date().getFullYear()} OmegaTree A.Ş. Tüm hakları saklıdır.
            </p>
          </div>

          <div className="col-12 col-sm-6 col-lg-2 small-device-space">
            <h5>Hızlı Bağlantılar</h5>
            <ul className="dtr-list">
              <li>
                <a href="#features" className="dtr-scroll-link">
                  Özellikler
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="dtr-scroll-link">
                  Nasıl Çalışır?
                </a>
              </li>
              <li>
                <a href="#features2" className="dtr-scroll-link">
                  Uzmanlar İçin
                </a>
              </li>
              <li>
                <a href="#about" className="dtr-scroll-link">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#contact" className="dtr-scroll-link">
                  İletişim
                </a>
              </li>
              <li>
                <a
                  href="https://app.omegatree.com.tr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kit Takip Sistemi
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-lg-2 small-device-space">
            <h5>Hizmetler</h5>
            <ul className="dtr-list">
              <li>
                <a href="#features">MAS-10® Analiz</a>
              </li>
              <li>
                <a href="#features2">Uzmanlar İçin</a>
              </li>
              <li>
                <a href="#contact">İletişim</a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <h5>İletişim</h5>
            <p className="footer-contact-text">
              Yıldırım Beyazıt Mah. Aşık Veysel Blv. Erciyes Üniversitesi Teknoloji
              Geliştirme Bölgesi İdare Binası ve Kuluçka Merkezi 4 Binası, 38030
              Melikgazi/Kayseri
            </p>
            <p>
              <a href="mailto:info@omegatree.com.tr">
                <i className="icon-envelope dtr-mr-5 footer-icon"></i> info@omegatree.com.tr
              </a>
            </p>
            <p>
              <a href="tel:+905462257467">
                <i className="icon-phone-alt dtr-mr-5 footer-icon"></i> +90 546 225 74 67
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
