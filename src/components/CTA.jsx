import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal } from './Page'
export default function CTA(){return <section className="cta-section"><div className="container"><Reveal className="cta-card"><div><p className="eyebrow">Let’s build something lasting</p><h2>Looking for a dependable aluminium partner?</h2></div><Link className="btn light" to="/contact">Start a conversation <ArrowRight size={18}/></Link></Reveal></div></section>}
