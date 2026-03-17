import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { IMG } from '../utils/helpers'
import CountUp from './CountUp'

const clients = [
  { img: 'zeplin-icon.png', name: 'Zeplin' },
  { img: 'dropbox-icon.png', name: 'Dropbox' },
  { img: 'shopify-icon.png', name: 'Shopify' },
  { img: 'slack--icon.png', name: 'Slack' },
  { img: 'woocommerce-icon.png', name: 'WooCommerce' },
]

const stats = [
  { value: 25, suffix: '+', label: 'Years\nExperience' },
  { value: 15, suffix: 'K+', label: 'Satisfaction\nClients' },
  { value: 13, suffix: 'K+', label: 'Projects Completed On\n29 Countries' },
]

export default function Clients() {
  return (
    <section className="w-100 float-left padding-top padding-bottom client-con">
      <Container>
        <div className="position-relative dotted-img">
          <div className="genric-heading text-center">
            <h2 className="position-relative">Big Clients</h2>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid <br />idunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="client-box w-100 float-left wow fadeInUp">
            <ul className="list-unstyled w-100 float-left mb-0">
              {clients.map((c, i) => (
                <li key={i} className={i === 0 ? 'ml-0' : i === clients.length - 1 ? 'mr-0' : ''}>
                  <div className="client-box-item text-center">
                    <figure><img src={IMG(c.img)} alt={c.name} className="img-fluid" /></figure>
                    <p className="mb-0">{c.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="static-con wow fadeInUp">
            <Row>
              {stats.map((s, i) => (
                <Col key={i} lg={4} md={4} sm={6} className="d-flex justify-content-center">
                  <h2 className="d-inline-block count"><CountUp end={s.value} /></h2>
                  <h2 className="d-inline-block">{s.suffix}</h2>
                  <p className="d-inline-block mb-0">{s.label.split('\n').map((line, j) => <React.Fragment key={j}>{line}<br /></React.Fragment>)}</p>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </section>
  )
}
