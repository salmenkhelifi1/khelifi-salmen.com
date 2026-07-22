import React from "react";

interface TradeOffTableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  caption?: string;
}

export default function TradeOffTable({
  headers,
  rows,
  caption,
}: TradeOffTableProps) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] shadow-[var(--glass-shadow)]">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[500px]">
          {caption && (
            <caption className="p-3 text-xs font-semibold text-[var(--text-tertiary)] bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)]">
              {caption}
            </caption>
          )}
          <thead>
            <tr className="border-b border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]">
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-[var(--accent)]"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-subtle)] text-sm">
            {rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className="transition-colors hover:bg-[var(--glass-bg-elevated)]"
              >
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className="px-4 py-3.5 text-[var(--text-secondary)] align-top"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
