import { CredibilityItem } from "@/data/homepage";
import SectionContainer from "./SectionContainer";

interface CredibilityStripProps {
  items: CredibilityItem[];
}

export default function CredibilityStrip({ items }: CredibilityStripProps) {
  return (
    <section className="credibility-strip py-8">
      <SectionContainer className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center gap-3">
              <Icon className="h-5 w-5 text-[var(--accent)]" />
              <span className="text-caption text-[var(--text-secondary)]">
                {item.label}
              </span>
            </div>
          );
        })}
      </SectionContainer>
    </section>
  );
}
