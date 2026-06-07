export default function Header() {
  return (
    <>
<div className="dtr-preloader">
        <div className="dtr-preloader-inner">
            <div className="dtr-preloader-img"></div>
        </div>
    </div>
     
    
    
    <div className="dtr-responsive-header fixed-top">
        <div className="container"> 
            
             
            <a href="/"><img src="/assets/images/logo-dark.png" alt="OmegaTree" /></a> 
             
            
            
            <button id="dtr-menu-button" className="dtr-hamburger" type="button"><span className="dtr-hamburger-lines-wrapper"><span className="dtr-hamburger-lines"></span></span></button>
        </div>
        <div className="dtr-responsive-header-menu"></div>
    </div>
     
    
    
    <header id="dtr-header-global" className="fixed-top trans-header">
        <div className="container">
            <div className="d-flex align-items-center justify-content-between"> 
                
                
                <div className="dtr-header-left"> 
                    
                     
                    <a className="logo-default dtr-scroll-link" href="#home"><img src="/assets/images/logo-dark.png" alt="OmegaTree" width="173" /></a> 
                    
                     
                    <a className="logo-alt dtr-scroll-link" href="#home"><img src="/assets/images/logo-dark.png" alt="OmegaTree" width="173" /></a> 
                     
                    
                </div>
                 
                
                
                <div className="dtr-header-right ml-auto">
                    <div className="main-navigation dtr-menu-dark">
                        <ul className="sf-menu dtr-scrollspy dtr-nav dark-nav-on-load dark-nav-on-scroll">
                            <li> <a className="nav-link" href="#home">Ana Sayfa</a> </li>
                            <li> <a className="nav-link" href="#features">Özellikler</a> </li>
                            <li> <a className="nav-link" href="#how-it-works">Nasıl Çalışır?</a> </li>
                            <li> <a className="nav-link" href="#about">Hakkımızda</a> </li>
                            <li> <a className="nav-link" href="#features2">Uzmanlar</a> </li>
                            <li> <a className="nav-link" href="#contact">İletişim</a> </li>
                        </ul>
                    </div>
                </div>
                 
                
                 
                <a href="https://app.omegatree.com.tr/" target="_blank" rel="noopener noreferrer" className="dtr-btn dtr-btn-styled btn-red dtr-ml-30">Uygulamaya Git</a> 
                 
                
            </div>
        </div>
    </header>
    </>
  )
}
