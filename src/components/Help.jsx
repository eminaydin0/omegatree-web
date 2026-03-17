import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { IMG } from '../utils/helpers'

export default function Help() {
  const [animated, setAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true)
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="w-100 float-left padding-top padding-bottom help-con overflow">
      <Container>
        <div className="help-box-content">
          <Row>
            <Col lg={5} md={6}>
              <div
                className={`sloution-box-lft-content position-relative help-left-con ${animated ? 'animated slideInLeft' : 'banner-init-left'}`}
                style={animated ? { animationDuration: '0.8s' } : undefined}
              >
                <div className="client-details-box like-con">
                  <figure><img src={IMG('like-icon.png')} alt="like" className="img-fluid" /></figure>
                  <p>Unlimied Likes</p>
                </div>
                <div className="client-details-box designer-con">
                  <p>Designer</p>
                  <figure className="mb-0 d-inline-block"><img src={IMG('designer-img.png')} alt="designer" className="img-fluid" /></figure>
                  <span>/15</span>
                </div>
                <figure className="mb-0"><img src={IMG('help-left-img.png')} alt="help" /></figure>
                <div className="client-details-box commetns-con">
                  <figure><img src={IMG('commetns-img.png')} alt="comments" className="img-fluid" /></figure>
                  <p>15K+ Commetns</p>
                </div>
              </div>
            </Col>
            <Col lg={7} md={6}>
              <div
                className={`sloution-box-right-content help-right-con ${animated ? 'animated slideInRight' : 'banner-init-right'}`}
                style={animated ? { animationDuration: '0.8s' } : undefined}
              >
                <figure><img src={IMG('help-right-icon.png')} alt="icon" className="img-fluid" /></figure>
                <h2>How can <span className="position-relative">Dezvu</span> help your business?</h2>
                <p className="col-lg-10 pl-0 pr-0">In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justoullam dictum felis eu pede mollis pretium teger tinciduntras dapibu imperdiets.</p>
                <p className="col-lg-10 pl-0 pr-0">Vivamus elementum semper nisi. Aenean vulputate eleif end tellus.</p>
                <div className="generic"><a href="#footer">Learn More</a></div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}
