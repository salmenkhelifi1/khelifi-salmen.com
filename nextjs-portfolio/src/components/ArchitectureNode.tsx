import { EcosystemNodeItem } from "@/data/homepage";

interface ArchitectureNodeProps {
  node: EcosystemNodeItem;
}

export default function ArchitectureNode({ node }: ArchitectureNodeProps) {
  const Icon = node.icon;
  return (
    <div
      className="ecosystem-node absolute z-10 flex flex-col items-center justify-center gap-1 h-16 w-16 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
      style={{ left: node.left, top: node.top, transform: "translate(-50%, -50%)" }}
    >
      <Icon className="h-5 w-5" />
      <span className="text-[9px] font-semibold uppercase tracking-wider">
        {node.label}
      </span>
    </div>
  );
}
