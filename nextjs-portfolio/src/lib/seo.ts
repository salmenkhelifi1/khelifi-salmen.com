const TITLE_MIN = 50;
const TITLE_MAX = 60;
const DESCRIPTION_MIN = 140;
const DESCRIPTION_MAX = 160;

function normalize(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function truncateAtWord(value: string, max: number, min: number) {
  if (value.length <= max) return value;
  const boundary = value.lastIndexOf(" ", max);
  return value.slice(0, boundary >= min ? boundary : max).trim();
}

export function createSeoTitle(primary: string, ...context: string[]) {
  const parts = [...new Set([primary, ...context].map(normalize).filter(Boolean))];
  let title = parts.shift() || "";

  while (title.length < TITLE_MIN && parts.length) {
    title += ` | ${parts.shift()}`;
  }

  return truncateAtWord(title, TITLE_MAX, TITLE_MIN);
}

export function createSeoDescription(...content: string[]) {
  const parts = [...new Set(content.map(normalize).filter(Boolean))];
  let description = "";

  while (description.length < DESCRIPTION_MIN && parts.length) {
    description = normalize(`${description} ${parts.shift()}`);
  }

  return truncateAtWord(description, DESCRIPTION_MAX, DESCRIPTION_MIN);
}
