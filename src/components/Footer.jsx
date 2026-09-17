import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin, Mail, Phone } from 'lucide-react'
import Brand from './Brand'
import { nav } from '../data'

export default function Footer() {
  return <footer className="footer">
    <div className="container footer-top">
      <div><Brand light /><p>Precision aluminium. Dependable partnerships.</p></div>
      <div><span className="footer-label">Navigate</span>{nav.map(([n,p]) => <Link key={p} to={p}>{n}</Link>)}</div>
      <div><span className="footer-label">Visit us</span><p className="with-icon"><MapPin size={17}/> <span>G.No.5514, Vaijayanti Niwas, Jaulake Dindori, Manoranjan Bar & Restaurant, Ganesh Nagar, Ozar, Nashik, Maharashtra. 422207</span></p><a className="with-icon" href="mailto:superprimametals5005@gmail.com"><Mail size={17}/> <span>superprimametals5005@gmail.com</span></a><a className="with-icon" href="tel:+917499411025"><Phone size={17}/> <span>7499411025</span></a><Link className="footer-cta" to="/contact">Start an enquiry <ArrowUpRight size={16}/></Link></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Super Prima Metals Pvt Ltd.</span><span>Aluminium ingot manufacturer</span></div>
  </footer>
}
