export type ReadingTime = {
  minutes: number;
  text: string;
  words: number;
};

export function calculateReadingTime(content: string): ReadingTime {
  // Strip code blocks and markdown markup for cleaner word count
  const cleanText = content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<[^>]*>/g, "")
    .replace(/[#*`~_]/g, "");

  const words = cleanText.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return {
    minutes,
    text: `${minutes} min read`,
    words,
  };
}
