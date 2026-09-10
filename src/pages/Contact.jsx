import { MapPin, Mail, Phone, Clock3, PackageCheck, Scale, FlaskConical, Truck, MessageSquareText, ClipboardCheck, Factory, Handshake } from 'lucide-react'
import Page, { PageHero, Reveal } from '../components/Page'

export default function Contact(){
 return <Page><PageHero eyebrow="Contact" title="Let’s talk aluminium." text="Tell us what you need and our team will be ready to discuss your requirements."/>
 <section className="section"><div className="container"><Reveal className="contact-copy"><p className="eyebrow">Start an enquiry</p><h2>A direct line to our team.</h2><p>Contact us by email or phone to discuss your product requirement, expected quantity and delivery location.</p><div className="contact-detail"><MapPin/><div><strong>Location</strong><span>G.No.5514, Vaijayanti Niwas, Jaulake Dindori, Manoranjan Bar & Restaurant, Ganesh Nagar, Ozar, Nashik, Maharashtra. 422207</span></div></div><div className="contact-detail"><Mail/><div><strong>Email</strong><a href="mailto:sunetrasardar123@gmail.com">sunetrasardar123@gmail.com</a></div></div><div className="contact-detail"><Phone/><div><strong>Phone</strong><a href="tel:+917875155370">7875155370</a></div></div><div className="contact-detail"><Clock3/><div><strong>Business enquiries</strong><span>Monday–Saturday</span></div></div></Reveal>
</div></section>

 <section className="section contact-prepare"><div className="container">
   <Reveal className="section-head"><div><p className="eyebrow">Prepare your enquiry</p><h2>The right details help<br/>us respond clearly.</h2></div><p>Providing a few practical details at the beginning helps our team understand the requirement and prepare a more useful response.</p></Reveal>
   <div className="enquiry-details">
     {[[PackageCheck,'Product requirement','Tell us that you need aluminium ingots and mention the intended downstream use.'],[Scale,'Expected quantity','Share the approximate order quantity or recurring supply requirement.'],[FlaskConical,'Material specification','Include the required composition, grade reference or other agreed technical parameters.'],[Truck,'Delivery location','Provide the destination so dispatch requirements can be considered.']].map(([Icon,title,text],i)=><Reveal className="enquiry-card" delay={i*.06} key={title}><span>0{i+1}</span><Icon/><h3>{title}</h3><p>{text}</p></Reveal>)}
   </div>
 </div></section>

 <section className="contact-route"><div className="container route-grid">
   <Reveal><p className="eyebrow">What happens next</p><h2>From first message to a useful conversation.</h2></Reveal>
   <div className="route-steps">
     {[[MessageSquareText,'01','We receive your enquiry','Your product and contact details provide the starting point.'],[ClipboardCheck,'02','We review the requirement','The team considers specification, quantity and delivery needs.'],[Factory,'03','We align on feasibility','Relevant supply and production details are discussed directly.'],[Handshake,'04','We take it forward','Once aligned, the commercial conversation can proceed.']].map(([Icon,n,title,text],i)=><Reveal key={title} className="route-step" delay={i*.05}><div><Icon/><span>{n}</span></div><h3>{title}</h3><p>{text}</p></Reveal>)}
   </div>
 </div></section>

 <section className="section visit-section"><div className="container visit-grid">
   <Reveal className="visit-photo"><img src="/images/facility.jpeg" alt="Super Prima Metals facility in Maharashtra"/><span><MapPin/> Maharashtra, India</span></Reveal>
   <Reveal className="visit-copy"><p className="eyebrow">Our facility</p><h2>Where material becomes momentum.</h2><p>Our manufacturing operation brings aluminium ingot production, material observation, finished-goods handling and dispatch preparation together at one facility.</p><p>For business visits, transport coordination or exact location details, please arrange directly with our team before travelling.</p><div className="visit-note"><Clock3/><div><strong>Visits by prior arrangement</strong><span>Coordinate date, time and access with the company team.</span></div></div></Reveal>
 </div></section>

 <section className="section contact-faq"><div className="container faq-grid"><Reveal><p className="eyebrow">Contact FAQ</p><h2>Before you get in touch.</h2></Reveal><div>
   {[['What should I include in a quotation request?','Please include your company name, expected quantity, material specification, intended use and delivery location.'],['Can I enquire about repeat or bulk supply?','Yes. Email or call us with the expected quantity and frequency to discuss bulk or repeat supply.'],['Can I arrange a facility visit?','Business visits should be coordinated with the company team in advance so the appropriate people can be available.']].map(([q,a],i)=><Reveal className="faq-item" delay={i*.05} key={q}><span>0{i+1}</span><div><h3>{q}</h3><p>{a}</p></div></Reveal>)}
 </div></div></section>
 </Page>}
