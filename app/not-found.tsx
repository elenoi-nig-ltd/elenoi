import Link from "next/link";

export default function NotFound() {
  return <section className="not-found wrap"><span>404</span><h1>That page is not part of our portfolio.</h1><Link className="button button--green" href="/">Return home</Link></section>;
}
