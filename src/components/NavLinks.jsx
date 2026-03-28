import React from 'react'
import { Nav } from 'react-bootstrap'
import { NAV_ITEMS } from '../config/site'

export function HeaderNavLinks() {
  return (
    <Nav as="ul" className="navbar-nav">
      {NAV_ITEMS.map((item) => (
        <Nav.Item as="li" key={item.id}>
          <Nav.Link
            href={item.href}
            className={`p-0 ${item.id === 'home' ? 'pl-0 active' : ''}`}
          >
            <span className="d-block">{item.num}</span> {item.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  )
}

export function FooterNavLinks() {
  return (
    <ul className="list-unstyled d-inline-block mb-0">
      {NAV_ITEMS.map((item, i) => (
        <li
          key={item.id}
          className={`d-inline-block ${i === 0 ? 'pl-0' : ''} ${i === NAV_ITEMS.length - 1 ? 'pr-0 mr-5' : ''}`}
        >
          <a href={item.href} className="text-decoration-none text-white">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
