import { Target, Eye, Handshake, Gauge, Factory, Microscope, PackageCheck, Truck, Users, RefreshCw, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Page, { PageHero, Reveal } from '../components/Page'
import CTA from '../components/CTA'

export default function About(){return <Page>
  <PageHero eyebrow="About us" title="Built around better metal." text="SUPER PRIMA METALS PVT LTD is an aluminium ingot manufacturer committed to careful production, responsive service and lasting business relationships."/>
  <section className="section"><div className="container image-story"><Reveal><img src="/images/facility.jpeg" alt="Super Prima Metals facility"/></Reveal><Reveal className="story-copy"><p className="eyebrow">Our story</p><h2>A focused manufacturer with an ambitious outlook.</h2><p>Our operation brings production, quality observation, packing and dispatch together with one objective: to supply aluminium ingots our customers can rely on.</p><p>Led by a hands-on team, we value clarity in communication, discipline on the shop floor and improvement in every cycle.</p></Reveal></div></section>

  <section className="about-statement"><div className="container"><Reveal><span>SUPER PRIMA / 01</span><p>We believe dependable metal begins long before casting. It begins with careful decisions, accountable people and respect for every customer requirement.</p></Reveal></div></section>

  <section className="section soft"><div className="container">
    <Reveal className="section-head"><div><p className="eyebrow">What we do</p><h2>Focused from production<br/>through delivery.</h2></div><p>Our operating model keeps the essential stages connected, making communication clearer and execution more dependable.</p></Reveal>
    <div className="about-capabilities">
      {[[Factory,'Manufacturing','A focused facility for processing and casting aluminium into practical ingot form.'],[Microscope,'Material observation','In-house equipment supports batch-level review and informed quality decisions.'],[PackageCheck,'Finished goods handling','Ingots are organised and secured to support efficient storage and movement.'],[Truck,'Dispatch coordination','Loads are prepared with attention to safe handling and practical delivery planning.']].map(([Icon,title,text],i)=><Reveal className="capability-row" delay={i*.06} key={title}><span>0{i+1}</span><Icon/><h3>{title}</h3><p>{text}</p></Reveal>)}
    </div>
  </div></section>

  <section className="section"><div className="container about-focus-grid">
    <Reveal className="about-focus-copy"><p className="eyebrow">A practical mindset</p><h2>Small enough to stay involved. Serious enough to deliver.</h2><p>Our directors remain close to the business and its day-to-day priorities. That involvement helps us respond quickly, understand requirements clearly and keep responsibility visible throughout the workflow.</p><p>For customers, this means direct communication and a partner who remains attentive from the first conversation to the final dispatch.</p><Link className="text-link" to="/leadership">Meet the leadership team <ArrowRight size={16}/></Link></Reveal>
    <Reveal className="about-focus-visual"><img src="/images/ingots-stacked.jpeg" alt="Organised stacks of finished aluminium ingots"/><div><Users/><strong>Hands-on leadership</strong><span>Close to every stage of the operation</span></div></Reveal>
  </div></section>

  <section className="section workplace-section"><div className="container workplace-grid">
    <Reveal className="workplace-copy"><p className="eyebrow">Behind the operation</p><h2>A workplace built around connected decisions.</h2><p>Production performance depends on more than equipment. Planning, documentation, material observation and coordination all help work move smoothly from enquiry to dispatch.</p></Reveal>
    <Reveal className="workplace-image"><img src="/images/office.jpeg" alt="Office workspace at Super Prima Metals"/><span>Operations workspace</span></Reveal>
    <Reveal className="workplace-image"><img src="/images/lab-wide.jpeg" alt="Quality observation and material analysis workspace"/><span>Material observation</span></Reveal>
  </div></section>
  <section className="section dark-section"><div className="container"><Reveal className="section-head"><div><p className="eyebrow">What guides us</p><h2>Clear principles.<br/>Practical action.</h2></div></Reveal><div className="principles">{[[Target,'Our mission','To manufacture dependable aluminium ingots through disciplined processes and customer-focused service.'],[Eye,'Our vision','To grow into a trusted name in aluminium supply, recognised for consistency and integrity.'],[Handshake,'Our values','Responsibility, transparency and respect in every relationship.'],[Gauge,'Our approach','Measure carefully, work safely and improve continuously.']].map(([I,t,d])=><Reveal key={t} className="principle"><I/><h3>{t}</h3><p>{d}</p></Reveal>)}</div></div></section>

  <section className="section commitment-section"><div className="container commitment-grid">
    <Reveal><p className="eyebrow">Our commitment</p><h2>Progress built on consistency.</h2><p className="large-copy">Growth, for us, means becoming more capable without losing the care and accountability that define how we work today.</p></Reveal>
    <div className="commitment-list">
      <Reveal><RefreshCw/><div><h3>Continuous improvement</h3><p>We review how we work and look for practical ways to improve control, efficiency and output.</p></div></Reveal>
      <Reveal><Handshake/><div><h3>Responsible relationships</h3><p>We value straightforward communication and aim to build partnerships that last beyond one order.</p></div></Reveal>
      <Reveal><Gauge/><div><h3>Quality-led decisions</h3><p>Material integrity and customer requirements remain central to production and dispatch planning.</p></div></Reveal>
    </div>
  </div></section>
  <CTA/>
 </Page>}
