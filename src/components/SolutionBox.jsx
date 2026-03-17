import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { IMG } from '../utils/helpers'

export default function SolutionBox() {
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
    <section ref={sectionRef} className="w-100 float-left sloution-box-con padding-top padding-bottom overflow">
      <Container>
        <div className="sloution-box-content text-md-left text-center">
          <Row>
            <Col lg={5} md={6}>
              <div
                className={`sloution-box-lft-content ${animated ? 'animated slideInLeft' : 'banner-init-left'}`}
                style={animated ? { animationDuration: '0.8s' } : undefined}
              >
                <figure className="mb-0"><img src={IMG('sloution-box-lft-img.png')} alt="solution" /></figure>
              </div>
            </Col>
            <Col lg={7} md={6}>
              <div
                className={`sloution-box-right-content ${animated ? 'animated slideInRight' : 'banner-init-right'}`}
                style={animated ? { animationDuration: '0.8s' } : undefined}
              >
                <figure><img src={IMG('sloution-box-right-img.png')} alt="solution" className="img-fluid" /></figure>
                <h2>Digital Solution for <br />your business</h2>
                <p className="col-lg-11 pl-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="generic"><a href="#footer">Contact Us</a></div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}
