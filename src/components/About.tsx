import Section from "./Section";
import { focusAreas } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" label="about">
      <p className="max-w-2xl text-2xl leading-snug tracking-tight sm:text-3xl">
        HubbleFlow Labs is a multidisciplinary technology company, venture studio, and research laboratory.
      </p>
      <div className="mt-12 grid border border-line md:grid-cols-3 md:divide-x md:divide-line">
        {focusAreas.map((s) => (
          <div key={s.name} className="border-b border-line p-6 last:border-b-0 md:border-b-0">
            <h3 className="font-medium">{s.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
