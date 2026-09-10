import { Check, PackageCheck, Ruler, Factory, Layers3, ShieldCheck, Warehouse, Truck, MessageSquareText, ClipboardCheck, Boxes, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Page, { PageHero, Reveal } from '../components/Page'
import CTA from '../components/CTA'

export default function Products(){return <Page>
  <PageHero eyebrow="Our product" title="Aluminium ingots. Pure potential." text="A dependable foundation for downstream manufacturing, supplied with care from casting through dispatch."/>
  <section className="section"><div className="container product-showcase"><Reveal className="product-visual"><img src="/images/ingots-close.jpeg" alt="Aluminium ingots manufactured by Super Prima Metals"/><div className="metal-tag">Al<br/><small>Aluminium</small></div></Reveal><Reveal className="product-details"><p className="eyebrow">Core offering</p><h2>Aluminium ingots</h2><p className="large-copy">Designed for convenient handling and reliable use as industrial input material.</p><ul className="check-list">{['Controlled manufacturing process','Batch-wise material observation','Uniform, stackable form','Secure packing for transit'].map(x=><li key={x}><Check/> {x}</li>)}</ul></Reveal></div></section>
  <section className="section soft"><div className="container"><Reveal className="section-head"><div><p className="eyebrow">Product priorities</p><h2>What matters in every batch.</h2></div></Reveal><div className="values-grid">{[[PackageCheck,'Material consistency','A disciplined approach supports repeatable output across batches.'],[Ruler,'Practical form','Ingot shapes support stacking, storage, handling and onward processing.'],[Factory,'Industrial readiness','Prepared as a dependable input for a range of downstream operations.']].map(([I,t,d])=><Reveal className="value-card" key={t}><I/><h3>{t}</h3><p>{d}</p></Reveal>)}</div></div></section>

  <section className="section product-profile"><div className="container">
    <Reveal className="section-head"><div><p className="eyebrow">Product profile</p><h2>Designed for practical<br/>industrial use.</h2></div><p>Final supply parameters are aligned with the customer's application and agreed commercial requirements.</p></Reveal>
    <div className="profile-grid">
      {[[Layers3,'Form','Solid aluminium ingots arranged for straightforward stacking and handling.'],[ShieldCheck,'Quality approach','Material is observed through a controlled production and review process.'],[Warehouse,'Storage','Compact form supports organised finished-goods storage before dispatch.'],[Truck,'Supply','Grouped and secured to support practical transport to the customer.']].map(([Icon,title,text],i)=><Reveal className="profile-card" delay={i*.06} key={title}><span>0{i+1}</span><Icon/><h3>{title}</h3><p>{text}</p></Reveal>)}
    </div>
  </div></section>

  <section className="product-banner"><img src="/images/ingots-stacked.jpeg" alt="Stacks of finished aluminium ingots ready for packing"/><div className="container product-banner-copy"><Reveal><p className="eyebrow">Finished with care</p><h2>Cast. Checked.<br/>Stacked. Ready.</h2><p>Each stage is organised around dependable material handling and clear batch movement.</p></Reveal></div></section>

  <section className="section soft"><div className="container product-uses-grid">
    <Reveal><p className="eyebrow">Potential applications</p><h2>A starting point for what manufacturers make next.</h2><p className="large-copy">Aluminium ingots are remelted and processed by downstream businesses for casting and manufacturing applications across multiple industries.</p><p className="product-disclaimer">Suitability depends on composition, process and the customer's technical specification. Confirm your intended application with our team before ordering.</p></Reveal>
    <div className="use-list">
      {['General engineering components','Automotive and mobility parts','Electrical product manufacturing','Construction-related components','Secondary casting applications'].map((item,i)=><Reveal key={item}><span>{String(i+1).padStart(2,'0')}</span><h3>{item}</h3></Reveal>)}
    </div>
  </div></section>

  <section className="section supply-section"><div className="container">
    <Reveal className="section-head"><div><p className="eyebrow">From enquiry to supply</p><h2>A clear buying journey.</h2></div><p>We keep the conversation direct so your requirements can move efficiently toward production and delivery.</p></Reveal>
    <div className="supply-flow">
      {[[MessageSquareText,'01','Share your requirement','Tell us the application, expected quantity and delivery location.'],[ClipboardCheck,'02','Align the details','Our team reviews the requirement and discusses the appropriate supply parameters.'],[Boxes,'03','Prepare the order','Production, finished-goods handling and packing are coordinated for the order.'],[Truck,'04','Plan dispatch','The material is secured and prepared for onward transportation.']].map(([Icon,n,title,text],i)=><Reveal className="supply-step" delay={i*.07} key={title}><div><Icon/><span>{n}</span></div><h3>{title}</h3><p>{text}</p></Reveal>)}
    </div>
    <Reveal className="product-enquiry"><div><p className="eyebrow">Have a requirement?</p><h2>Let’s discuss the details.</h2></div><Link className="btn primary" to="/contact">Send an enquiry <ArrowRight size={18}/></Link></Reveal>
  </div></section>

  <section className="section product-faq"><div className="container faq-grid"><Reveal><p className="eyebrow">Product FAQ</p><h2>Useful answers before you enquire.</h2></Reveal><div>
    {[['What product does Super Prima Metals manufacture?','We manufacture aluminium ingots for use as input material in downstream industrial processing.'],['Can I request a particular specification?','Yes. Share the required composition or application with our team so feasibility and supply details can be discussed.'],['How are the ingots prepared for transport?','Finished ingots are grouped, stacked and secured to support organised handling and dispatch.'],['How do I request a quotation?','Use the contact form with your company, quantity, specification and delivery location. Our team can then take the conversation forward.']].map(([q,a],i)=><Reveal className="faq-item" delay={i*.05} key={q}><span>0{i+1}</span><div><h3>{q}</h3><p>{a}</p></div></Reveal>)}
  </div></div></section>
  <CTA/>
 </Page>}
