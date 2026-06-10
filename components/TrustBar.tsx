import { ShieldCheck, BadgeCheck, MapPin, Headset, Award } from 'lucide-react';

const ITEMS = [
  { icon: Award, label: 'Homologado Anatel' },
  { icon: ShieldCheck, label: 'No mercado desde 2017' },
  { icon: MapPin, label: 'Cobertura nacional' },
  { icon: Headset, label: 'Central humana 24h' },
  { icon: BadgeCheck, label: 'Planos flexíveis' },
];

export function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="container-lp py-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-ink-soft">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-brand-accent" />
              <span className="font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
