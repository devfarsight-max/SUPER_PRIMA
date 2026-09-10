import {
  UserRound,
  Target,
  ShieldCheck,
  Handshake,
  TrendingUp,
  Factory,
  Users,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Page, { PageHero, Reveal } from "../components/Page";
import CTA from "../components/CTA";
import { directors } from "../data";

export default function Leadership() {
  return (
    <Page>
      <PageHero
        eyebrow="Leadership"
        title="Three leaders. One direction."
        text="A closely involved leadership team shapes our standards, strengthens our relationships and keeps Super Prima moving forward."
      />
      <section className="section">
        <div className="container leadership-grid">
          {directors.map((p, i) => (
            <Reveal className="leader-card" delay={i * 0.08} key={p.name}>
              <div className="portrait">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.name}, Director at Super Prima Metals`}
                  />
                ) : (
                  <div className="portrait-placeholder">
                    <UserRound />
                    <span>SS</span>
                  </div>
                )}
                <span className="leader-no">0{i + 1}</span>
              </div>
              <p className="eyebrow">{p.role}</p>
              <h2>{p.name}</h2>
              <p>{p.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="leadership-intro">
        <div className="container">
          <Reveal>
            <span>LEADERSHIP / 01</span>
            <h2>Visible leadership creates visible accountability.</h2>
            <p>
              At Super Prima Metals, direction is shaped close to the operation.
              The directors stay connected to customers, production priorities
              and the decisions that influence consistent output.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <Reveal className="section-head">
            <div>
              <p className="eyebrow">How we lead</p>
              <h2>
                Shared standards.
                <br />
                Complementary focus.
              </h2>
            </div>
            <p>
              Each director contributes to one coordinated approach built around
              responsibility, responsiveness and steady progress.
            </p>
          </Reveal>
          <div className="leadership-pillars">
            {[
              [
                Target,
                "Clear direction",
                "Set practical priorities and keep the team aligned around quality and customer requirements.",
              ],
              [
                ShieldCheck,
                "Responsible decisions",
                "Balance production needs, material considerations and long-term business integrity.",
              ],
              [
                Handshake,
                "Direct relationships",
                "Keep communication straightforward and remain accessible to customers and partners.",
              ],
              [
                TrendingUp,
                "Measured growth",
                "Build capability thoughtfully while protecting the standards that earn customer trust.",
              ],
            ].map(([Icon, title, text], i) => (
              <Reveal
                className="leadership-pillar"
                delay={i * 0.06}
                key={title}
              >
                <div>
                  <span>0{i + 1}</span>
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section leadership-operation">
        <div className="container leadership-operation-grid">
          <Reveal className="operation-photo">
            <img
              src="/images/facility.jpeg"
              alt="Super Prima Metals production facility"
            />
            <div>
              <Factory />
              <span>Leadership close to the operation</span>
            </div>
          </Reveal>
          <Reveal className="operation-copy">
            <p className="eyebrow">From direction to action</p>
            <h2>Leadership that reaches the shop floor.</h2>
            <p>
              Good decisions matter most when they translate into daily
              practice. Our leadership team works to connect company priorities
              with the people and processes responsible for delivering them.
            </p>
            <div className="operation-points">
              <div>
                <Users />
                <span>
                  <strong>Team alignment</strong>Clear priorities across the
                  workflow
                </span>
              </div>
              <div>
                <ClipboardCheck />
                <span>
                  <strong>Process awareness</strong>Attention to production and
                  quality needs
                </span>
              </div>
              <div>
                <Handshake />
                <span>
                  <strong>Customer focus</strong>Requirements heard and
                  communicated
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="quote-section">
        <div className="container">
          <Reveal>
            <p>
              “We believe quality is not a checkpoint. It is a habit built into
              every stage of the work.”
            </p>
            <span>— The leadership team</span>
          </Reveal>
        </div>
      </section>

      <section className="section leadership-vision">
        <div className="container vision-grid">
          <Reveal>
            <p className="eyebrow">Looking ahead</p>
            <h2>Building trust, one dependable batch at a time.</h2>
          </Reveal>
          <Reveal>
            <p className="large-copy">
              Our ambition is to grow Super Prima Metals into a trusted
              aluminium supply partner while staying grounded in the qualities
              that matter: consistent work, honest communication and responsible
              delivery.
            </p>
            <p>
              As the company moves forward, the leadership team remains focused
              on improving operational discipline, strengthening customer
              relationships and developing capability at a sustainable pace.
            </p>
            <Link className="btn dark" to="/contact">
              Start a conversation <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="leadership-responsibility">
        <div className="container responsibility-grid">
          <Reveal>
            <strong>01</strong>
            <h3>People</h3>
            <p>
              Create an environment where responsibility, safe work and mutual
              respect are valued.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <strong>02</strong>
            <h3>Product</h3>
            <p>
              Keep material consistency and dependable execution at the centre
              of production.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <strong>03</strong>
            <h3>Partnerships</h3>
            <p>
              Build lasting relationships through clarity, responsiveness and
              reliable follow-through.
            </p>
          </Reveal>
        </div>
      </section>
      <CTA />
    </Page>
  );
}
