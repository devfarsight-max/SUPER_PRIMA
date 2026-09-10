import { Link } from 'react-router-dom'

export default function Brand({ light = false }) {
  return <Link className={`brand ${light ? 'brand-light' : ''}`} to="/" aria-label="Super Prima Metals home">
    <img className="brand-logo" src="/images/super-prima-logo-transparent.png" alt="Super Prima Metals Private Limited logo" width="1536" height="1024" />
  </Link>
}
