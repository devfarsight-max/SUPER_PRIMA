import { motion } from 'framer-motion'

export default function Page({ children, className = '' }) {
  return <motion.main className={className} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-8}} transition={{duration:.35}}>{children}</motion.main>
}

export function Reveal({ children, className = '', delay = 0 }) {
  return <motion.div className={className} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.65,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>
}

export function PageHero({ eyebrow, title, text }) {
  return <section className="page-hero"><div className="container"><Reveal><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="hero-copy">{text}</p></Reveal></div></section>
}
