import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Brand from './Brand'
import { nav } from '../data'

export default function Header() {
  const [open, setOpen] = useState(false)
  return <header className="header">
    <div className="container nav-wrap">
      <Brand />
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
        {nav.map(([label, path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)} className={({isActive}) => isActive ? 'active' : ''}>{label}</NavLink>)}
        <NavLink className="nav-cta" to="/contact" onClick={() => setOpen(false)}>Get a quote <ArrowUpRight size={16} /></NavLink>
      </nav>
    </div>
  </header>
}
