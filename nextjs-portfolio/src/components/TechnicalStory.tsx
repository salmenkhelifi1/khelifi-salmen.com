import { TechnicalDepthItem } from "@/data/homepage";

interface TechnicalStoryProps {
  item: TechnicalDepthItem;
  index?: number;
}

export default function TechnicalStory({ item, index = 0 }: TechnicalStoryProps) {
  const Icon = item.icon;
  return (
    <div
      className={`modern-card reveal rounded-[var(--radius-xl)] p-8 md:p-10 flex flex-col ${item.span}`.trim()}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="service-icon mb-8 flex h-14 w-14 items-center justify-center rounded-[var(--radius-md)]">
        <Icon className="h-7 w-7 text-[var(--text-secondary)]" />
      </div>
      <h3 className="mb-4 text-h3">{item.title}</h3>
      <p className="text-body-regular text-[var(--text-secondary)]">
        {item.description}
      </p>
    </div>
  );
}
