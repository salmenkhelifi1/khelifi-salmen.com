import { CredibilityItem } from "@/data/homepage";
import SectionContainer from "./SectionContainer";

interface CredibilityStripProps {
  items: CredibilityItem[];
}

export default function CredibilityStrip({ items }: CredibilityStripProps) {
  return (
    <div className="credibility-strip py-8">
      <SectionContainer className="credibility-items flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="credibility-item flex items-center gap-3">
              <Icon
                aria-hidden="true"
                className="credibility-icon h-5 w-5 shrink-0 text-[var(--accent)]"
              />
              <span className="text-caption text-[var(--text-secondary)]">
                {item.label}
              </span>
            </div>
          );
        })}
      </SectionContainer>
    </div>
  );
}
