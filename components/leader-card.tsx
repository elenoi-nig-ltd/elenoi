import Image from "next/image";
import type { Leader } from "@/lib/leadership";

export function LeaderCard({ leader, compact = false }: { leader: Leader; compact?: boolean }) {
  return (
    <article className={`leader-card${compact ? " leader-card--compact" : ""}`}>
      <div className="leader-card__portrait">
        <Image src={leader.image} alt={`${leader.name}, ${leader.role}`} fill sizes={compact ? "(max-width: 720px) 50vw, 28vw" : "(max-width: 720px) 100vw, 33vw"} />
      </div>
      <div className="leader-card__details">
        <p className="eyebrow">{leader.role}</p>
        <h3>{leader.name}</h3>
        {leader.bio && <p>{leader.bio}</p>}
      </div>
    </article>
  );
}
