import { Network } from "lucide-react";
import { EcosystemNodeItem } from "@/data/homepage";
import ArchitectureNode from "./ArchitectureNode";

interface ArchitectureDiagramProps {
  nodes: EcosystemNodeItem[];
}

export default function ArchitectureDiagram({ nodes }: ArchitectureDiagramProps) {
  return (
    <div className="glass-panel relative w-full aspect-square rounded-[var(--radius-xl)] flex items-center justify-center overflow-hidden">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        {nodes.map((node, i) => (
          <line
            key={i}
            x1="50%"
            y1="50%"
            x2={node.left}
            y2={node.top}
            className="ecosystem-line"
          />
        ))}
      </svg>
      <div className="ecosystem-hub relative z-10 flex h-16 w-16 items-center justify-center rounded-full text-[var(--accent)]">
        <Network className="h-8 w-8" />
      </div>
      {nodes.map((node, i) => (
        <ArchitectureNode key={i} node={node} />
      ))}
    </div>
  );
}
