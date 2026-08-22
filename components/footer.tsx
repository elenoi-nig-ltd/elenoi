import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-lead wrap">
        <p className="eyebrow">Build with ELENOI</p>
        <h2 className="text-4xl!">Progress is a shared undertaking.</h2>
        <Link
          className="circle-link"
          href="/contact"
          aria-label="Contact ELENOI"
        >
          <ArrowUpRight size={28} aria-hidden="true" />
        </Link>
      </div>
      <div className="footer-grid wrap">
        <div>
          <Link className="brand brand--footer" href="/">
            <span className="brand__mark" aria-hidden="true">
              <i />
              <i />
            </span>
            <span>
              <strong>ELENOI</strong>
              <small>NIG. LTD</small>
            </span>
          </Link>
          <p className="footer-note">
            A diversified Nigerian group creating enterprises that build people,
            communities and enduring value.
          </p>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/about">About us</Link>
          <Link href="/businesses">Our businesses</Link>
          <Link href="/contact">Partnerships</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
        <div>
          <h3>Head office</h3>
          <p>
            <MapPin size={15} aria-hidden="true" /> No. 4 KFF Street, after
            Central Mosque, Gidan Kwano, Minna.
          </p>
          <a href="mailto:elenoi.nig.ltd@gmail.com">elenoi.nig.ltd@gmail.com</a>
          <a href="mailto:flamingotechteam@gmail.com">flamingotechteam@gmail.com</a>
        </div>
      </div>
      <div className="footer-bottom wrap">
        <span>© {new Date().getFullYear()} ELENOI Nig. Ltd.</span>
        <span>Enterprise for lasting progress.</span>
      </div>
    </footer>
  );
}
