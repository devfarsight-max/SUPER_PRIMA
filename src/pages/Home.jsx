import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Sparkles, Truck, ChevronDown, Flame, Microscope, PackageCheck, Factory, Car, Cable, HardHat, Boxes } from 'lucide-react'
import Page, { Reveal } from '../components/Page'
import CTA from '../components/CTA'
import { gallery } from '../data'

export default function Home(){return <Page>
  <section className="home-hero">
    <div className="hero-photo" />
    <div className="hero-shade" />
    <div className="container hero-inner">
      <motion.div initial={{opacity:0,y:34}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
        <p className="eyebrow hero-eyebrow">Made in India · Built for industry</p>
        <h1>Strength,<br/><em>cast in aluminium.</em></h1>
        <p className="hero-copy">SUPER PRIMA METALS manufactures aluminium ingots with a clear focus on consistency, purity and dependable supply.</p>
        <div className="hero-actions"><Link className="btn primary" to="/products">Explore our product <ArrowRight size={18}/></Link><Link className="text-link light-link" to="/about">Discover our story</Link></div>
      </motion.div>
      <div className="hero-proof"><div><strong>01</strong><span>Focused product.<br/>Focused expertise.</span></div><div><strong>03</strong><span>Directors driving<br/>one shared vision.</span></div></div>
    </div>
    <a className="scroll-cue" href="#intro"><ChevronDown/> Scroll to explore</a>
  </section>

  <section id="intro" className="section intro"><div className="container intro-grid">
    <Reveal><p className="eyebrow">Who we are</p><h2>Metal that performs.<br/>A partner that delivers.</h2></Reveal>
    <Reveal delay={.1}><p className="large-copy">We transform aluminium into reliable ingots for industrial applications—combining hands-on manufacturing, material testing and careful dispatch.</p><Link className="text-link" to="/about">More about Super Prima <ArrowRight size={16}/></Link></Reveal>
  </div></section>

  <section className="section soft"><div className="container">
    <Reveal className="section-head"><div><p className="eyebrow">Why Super Prima</p><h2>Made with intention.<br/>Delivered with confidence.</h2></div><p>Every batch reflects our commitment to material integrity and customer trust.</p></Reveal>
    <div className="values-grid">
      {[['01',ShieldCheck,'Quality first','Controlled production and material testing for dependable output.'],['02',Sparkles,'Consistent finish','Carefully cast ingots with clean form and repeatable quality.'],['03',Truck,'Dispatch ready','Secure packing and practical logistics from our facility to yours.']].map(([n,Icon,t,d],i)=><Reveal className="value-card" delay={i*.08} key={t}><span>{n}</span><Icon/><h3>{t}</h3><p>{d}</p></Reveal>)}
    </div>
  </div></section>

  <section className="numbers-band"><div className="container numbers-grid">
    <Reveal><strong>01</strong><span>Core product</span><p>Dedicated aluminium ingot manufacturing</p></Reveal>
    <Reveal delay={.08}><strong>06</strong><span>Process stages</span><p>From material review through dispatch</p></Reveal>
    <Reveal delay={.16}><strong>03</strong><span>Directors</span><p>One closely aligned leadership team</p></Reveal>
    <Reveal delay={.24}><strong>100%</strong><span>Quality focus</span><p>Care at every production checkpoint</p></Reveal>
  </div></section>

  <section className="section"><div className="container split-feature"><Reveal className="feature-image"><img src={gallery[1].src} alt={gallery[1].alt}/><span>Finished goods</span></Reveal><Reveal className="feature-copy"><p className="eyebrow">Our product</p><h2>Aluminium ingots, made for what comes next.</h2><p>Reliable raw material begins with disciplined production. Our ingots are prepared for efficient handling, transport and use across downstream applications.</p><Link className="btn dark" to="/products">View product details <ArrowRight size={18}/></Link></Reveal></div></section>

  <section className="section applications"><div className="container">
    <Reveal className="section-head"><div><p className="eyebrow">Built for industry</p><h2>One material.<br/>Many possibilities.</h2></div><p>Aluminium ingots provide the starting point for manufacturers across a broad range of industrial sectors.</p></Reveal>
    <div className="application-grid">
      {[[Factory,'General engineering'],[Car,'Automotive components'],[Cable,'Electrical products'],[HardHat,'Construction materials'],[Boxes,'Casting applications']].map(([Icon,title],i)=><Reveal className="application-card" delay={i*.06} key={title}><Icon/><span>0{i+1}</span><h3>{title}</h3></Reveal>)}
    </div>
    <Reveal><p className="applications-note">Application suitability depends on the required alloy composition and customer specification. Speak with our team to discuss your requirement.</p></Reveal>
  </div></section>

  <section className="section process-preview"><div className="container">
    <Reveal className="process-title"><p className="eyebrow">How we work</p><h2>From careful selection<br/>to confident dispatch.</h2><Link className="text-link" to="/process">See our complete process <ArrowRight size={16}/></Link></Reveal>
    <div className="process-track">
      {[[Flame,'01','Melt','Controlled processing'],[Boxes,'02','Cast','Practical ingot form'],[Microscope,'03','Verify','Material observation'],[PackageCheck,'04','Deliver','Packed for transit']].map(([Icon,n,title,text],i)=><Reveal className="process-mini" delay={i*.09} key={title}><div className="process-icon"><Icon/></div><span>{n}</span><h3>{title}</h3><p>{text}</p></Reveal>)}
    </div>
  </div></section>

  <section className="section gallery-section"><div className="container">
    <Reveal className="section-head"><div><p className="eyebrow">Inside Super Prima</p><h2>Real work.<br/>Real output.</h2></div><p>A look at our facility, finished aluminium ingots, quality setup and dispatch activity.</p></Reveal>
    <div className="home-gallery">
      <Reveal className="gallery-main"><img src="/images/facility.jpeg" alt="Exterior of the Super Prima Metals facility"/><span>Our facility</span></Reveal>
      <Reveal className="gallery-small"><img src="/images/lab.jpeg" alt="In-house material testing setup"/><span>Quality observation</span></Reveal>
      <Reveal className="gallery-small"><img src="/images/dispatch.jpeg" alt="Aluminium ingots securely packed for dispatch"/><span>Prepared for dispatch</span></Reveal>
    </div>
    <div className="home-gallery-strip">
      <Reveal><img src="/images/lab-wide.jpeg" alt="Alternate view of the in-house aluminium analysis station"/><span>Testing setup</span></Reveal>
      <Reveal delay={.06}><img src="/images/loading.jpeg" alt="Team loading aluminium ingots into a transport vehicle"/><span>Loading activity</span></Reveal>
      <Reveal delay={.12}><img src="/images/truck-facility.jpeg" alt="Goods vehicle at the Super Prima Metals facility"/><span>Dispatch movement</span></Reveal>
    </div>
  </div></section>

  <section className="section leadership-preview"><div className="container leadership-home-grid">
    <Reveal><p className="eyebrow">People behind the metal</p><h2>Leadership that stays close to the work.</h2><p className="large-copy">Sunetra Sardar, Mayuresh Sardar and Tejas Sardar lead with shared responsibility—keeping quality, service and sustainable growth at the centre of every decision.</p><Link className="btn dark" to="/leadership">Meet our directors <ArrowRight size={18}/></Link></Reveal>
    <Reveal className="leadership-collage"><img src="/images/sunetra.jpeg" alt="Sunetra Sardar, Director"/><img src="/images/mayuresh.jpeg" alt="Mayuresh Sardar, Director"/><img src="/images/tejas.jpeg" alt="Tejas Sardar, Director"/><div><strong>03</strong><span>Directors.<br/>One vision.</span></div></Reveal>
  </div></section>
  <CTA />
 </Page>}
