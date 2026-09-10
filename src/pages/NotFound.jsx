import { Link } from 'react-router-dom'
import Page from '../components/Page'
export default function NotFound(){return <Page><section className="not-found"><p className="eyebrow">404</p><h1>That page isn’t here.</h1><Link className="btn primary" to="/">Return home</Link></section></Page>}
