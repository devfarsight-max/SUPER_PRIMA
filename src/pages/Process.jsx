import { Search, Flame, Boxes, Microscope, Package, Truck, ShieldCheck, ClipboardCheck, Users, RefreshCw, ArrowRight, Thermometer, Scale, Warehouse } from 'lucide-react'
import { Link } from 'react-router-dom'
import Page, { PageHero, Reveal } from '../components/Page'
import CTA from '../components/CTA'

const steps=[[Search,'Material selection','Incoming material is reviewed before entering production.'],[Flame,'Melting','Material is processed under controlled operating conditions.'],[Boxes,'Casting','Molten aluminium is cast into practical ingot form.'],[Microscope,'Quality review','Samples are checked using in-house material analysis equipment.'],[Package,'Packing','Finished ingots are grouped and secured for safe handling.'],[Truck,'Dispatch','Loads are organised for efficient, dependable movement.']]
export default function Process(){return <Page>
  <PageHero eyebrow="Our process" title="Control at every stage." text="A clear, disciplined flow turns raw material into dispatch-ready aluminium ingots."/>
  <section className="section"><div className="container process-layout"><div className="process-sticky"><p className="eyebrow">From input to output</p><h2>Six steps.<br/>One standard.</h2><img src="/images/lab.jpeg" alt="Material analysis equipment in the Super Prima Metals quality lab"/></div><div className="steps">{steps.map(([I,t,d],i)=><Reveal className="step" key={t}><span>{String(i+1).padStart(2,'0')}</span><I/><div><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></div></section>

  <section className="process-belief"><div className="container"><Reveal><p className="eyebrow">Our process philosophy</p><h2>Quality is built into the flow—not added at the end.</h2><p>From the way material enters production to the way finished ingots leave the facility, each stage contributes to dependable output.</p></Reveal></div></section>

  <section className="section soft"><div className="container">
    <Reveal className="section-head"><div><p className="eyebrow">Production controls</p><h2>Attention where<br/>it matters most.</h2></div><p>A disciplined process depends on clear checks, responsible handling and communication between each stage.</p></Reveal>
    <div className="control-grid">
      {[[Search,'Input review','Material is observed before processing so the team can make informed production decisions.'],[Thermometer,'Process awareness','Operating conditions are monitored through the melting and casting workflow.'],[Scale,'Batch handling','Material movement is organised to support traceable, orderly production activity.'],[Microscope,'Sample observation','In-house analysis equipment supports material review during the quality process.'],[Warehouse,'Finished goods care','Completed ingots are stacked and kept ready for planned packing and dispatch.'],[Truck,'Load preparation','Packed material is arranged for practical handling and onward transportation.']].map(([Icon,title,text],i)=><Reveal className="control-card" delay={(i%3)*.06} key={title}><div><span>{String(i+1).padStart(2,'0')}</span><Icon/></div><h3>{title}</h3><p>{text}</p></Reveal>)}
    </div>
  </div></section>

  <section className="section process-quality"><div className="container quality-grid">
    <Reveal className="quality-photo"><img src="/images/lab.jpeg" alt="Material analysis station used during quality observation"/><span>In-house observation</span></Reveal>
    <Reveal className="quality-copy"><p className="eyebrow">Quality approach</p><h2>Observe. Record. Improve.</h2><p>Quality control is a working discipline that supports decisions throughout production. Our team uses material observation, practical checks and responsible handling to keep each batch aligned with the agreed requirement.</p><div className="quality-points">
      <div><ShieldCheck/><span><strong>Material focus</strong>Review at relevant production stages</span></div>
      <div><ClipboardCheck/><span><strong>Clear checks</strong>A consistent approach to observation</span></div>
      <div><Users/><span><strong>Team ownership</strong>Responsibility stays visible throughout</span></div>
      <div><RefreshCw/><span><strong>Improvement</strong>Lessons carried into the next cycle</span></div>
    </div></Reveal>
  </div></section>
  <section className="wide-image"><img src="/images/loading.jpeg" alt="Aluminium ingots being loaded for dispatch"/><div><p className="eyebrow">Ready to move</p><h2>Made here.<br/>Moving forward.</h2></div></section>

  <section className="section dispatch-story"><div className="container dispatch-grid">
    <Reveal><p className="eyebrow">Packing & dispatch</p><h2>The final stage deserves the same care as the first.</h2><p className="large-copy">Finished aluminium ingots are grouped, stacked and secured to support safe handling and efficient transport.</p><Link className="text-link" to="/contact">Discuss your delivery requirement <ArrowRight size={16}/></Link></Reveal>
    <div className="dispatch-list">
      {['Finished ingots organised into manageable groups','Stacks prepared for stable handling and loading','Material secured for movement during transportation','Dispatch coordinated around agreed order requirements'].map((text,i)=><Reveal key={text}><span>0{i+1}</span><p>{text}</p></Reveal>)}
    </div>
  </div></section>

  <section className="section process-gallery-section"><div className="container"><Reveal className="section-head"><div><p className="eyebrow">On the floor</p><h2>A closer look at<br/>our material flow.</h2></div></Reveal><div className="process-gallery"><Reveal><img src="/images/ingots-close.jpeg" alt="Fresh aluminium ingots after casting"/><span>Finished ingots</span></Reveal><Reveal><img src="/images/ingots-stacked.jpeg" alt="Aluminium ingots stacked inside the facility"/><span>Organised stacking</span></Reveal><Reveal><img src="/images/dispatch.jpeg" alt="Packed aluminium ingots inside a transport vehicle"/><span>Load preparation</span></Reveal><Reveal><img src="/images/truck-facility.jpeg" alt="Transport vehicle positioned at the facility"/><span>Dispatch movement</span></Reveal></div></div></section>

  <section className="section process-faq"><div className="container faq-grid"><Reveal><p className="eyebrow">Process FAQ</p><h2>How the work moves forward.</h2></Reveal><div>
    {[['How many main stages are in the process?','Our website presents six core stages: material selection, melting, casting, quality review, packing and dispatch.'],['Where does quality review happen?','Observation is integrated into the workflow, supported by in-house material analysis equipment and practical production checks.'],['How are finished ingots handled?','They are organised and stacked before being grouped and secured for dispatch.'],['Can production be aligned to a specific requirement?','Share the intended application and material requirement with our team so feasibility can be reviewed before an order is agreed.']].map(([q,a],i)=><Reveal className="faq-item" delay={i*.05} key={q}><span>0{i+1}</span><div><h3>{q}</h3><p>{a}</p></div></Reveal>)}
  </div></div></section>
  <CTA/>
 </Page>}
