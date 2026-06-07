import { brandLogo } from '../../config/brandAssets'
import useHeaderScrollSpy from '../../hooks/useHeaderScrollSpy'

const navItems = [
  { id: 'home', href: '#home', label: 'Ana Sayfa' },
  { id: 'features', href: '#features', label: 'Özellikler' },
  { id: 'how-it-works', href: '#how-it-works', label: 'Nasıl Çalışır?' },
  { id: 'features2', href: '#features2', label: 'Uzmanlar' },
  { id: 'about', href: '#about', label: 'Hakkımızda' },
  { id: 'contact', href: '#contact', label: 'İletişim' },
]

export default function Header() {
  const activeId = useHeaderScrollSpy()

  return (
    <>
      <div className="dtr-preloader ot-preloader">
        <div className="dtr-preloader-inner ot-preloader-inner">
          <div className="ot-preloader-content">
            <img src={brandLogo} alt="OmegaTree" className="ot-preloader-logo" />
            <p className="ot-preloader-tagline">Metabolik Sağlık</p>
            <div className="ot-preloader-bar" aria-hidden="true">
              <span className="ot-preloader-bar-fill"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="dtr-responsive-header fixed-top">
        <div className="container">
          <a href="/">
            <img src={brandLogo} alt="OmegaTree" className="brand-logo" />
          </a>

          <button id="dtr-menu-button" className="dtr-hamburger" type="button">
            <span className="dtr-hamburger-lines-wrapper">
              <span className="dtr-hamburger-lines"></span>
            </span>
          </button>
        </div>
        <div className="dtr-responsive-header-menu"></div>
      </div>

      <header id="dtr-header-global" className="fixed-top trans-header">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="dtr-header-left">
              <a className="logo-default dtr-scroll-link" href="#home">
                <img src={brandLogo} alt="OmegaTree" className="brand-logo" />
              </a>

              <a className="logo-alt dtr-scroll-link" href="#home">
                <img src={brandLogo} alt="OmegaTree" className="brand-logo" />
              </a>
            </div>

            <div className="dtr-header-right ml-auto">
              <div className="main-navigation dtr-menu-dark">
                <ul className="sf-menu dtr-scrollspy dtr-nav dark-nav-on-load dark-nav-on-scroll">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        className={`nav-link${activeId === item.id ? ' active' : ''}`}
                        href={item.href}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href="https://app.omegatree.com.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="dtr-btn dtr-btn-styled btn-red dtr-ml-30"
            >
              Uygulamaya Git
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
