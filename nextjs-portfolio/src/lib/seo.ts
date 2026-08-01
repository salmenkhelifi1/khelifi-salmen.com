const TITLE_MIN = 50;
const TITLE_MAX = 60;
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
  let title = truncateAtWord(parts.shift() || "", TITLE_MAX, TITLE_MIN);

  // Append context parts only when they fit whole, and skip the ones that do
  // not. Slicing a part to fit is what produced titles like
  // "FoundPeers | Salmen Khelifi | An" — the project tagline cut to one word.
  // A title short of TITLE_MIN reads better than one ending in a fragment.
  while (title.length < TITLE_MIN && parts.length) {
    const candidate = `${title} | ${parts.shift()}`;
    if (candidate.length <= TITLE_MAX) {
      title = candidate;
    }
  }

  return title;
}

function finishSentence(value: string) {
  return /[.!?]$/.test(value) ? value : `${value}.`;
}

// Descriptions get quoted verbatim by AI answer engines, so a cut has to land
// on a clause boundary and read as a finished thought, not a dangling fragment.
function truncateAtClause(value: string, max: number) {
  if (value.length <= max) return finishSentence(value);
  const punctuation = Math.max(
    value.lastIndexOf(".", max - 1),
    value.lastIndexOf("!", max - 1),
    value.lastIndexOf("?", max - 1),
    value.lastIndexOf(",", max - 1),
    value.lastIndexOf(";", max - 1),
    value.lastIndexOf(":", max - 1),
  );
  if (punctuation > 0) {
    const ending = value[punctuation];
    return /[.!?]/.test(ending)
      ? value.slice(0, punctuation + 1).trim()
      : `${value.slice(0, punctuation).trim()}.`;
  }
  return finishSentence(truncateAtWord(value, max - 1, 1));
}

export function createSeoDescription(content: string) {
  return truncateAtClause(normalize(content), DESCRIPTION_MAX);
}
