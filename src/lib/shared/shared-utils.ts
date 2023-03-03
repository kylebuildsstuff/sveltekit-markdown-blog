/**
 * https://stackoverflow.com/questions/18679576/counting-words-in-string
 */
export const countWords = (str: string) => {
  return str.trim().split(/\s+/).length;
};

export function estimateReadingTime(words: number): number {
  // fixed for now, avg reading speed is 250wpm
  const wordsPerMinute = 200;
  // reading time stats
  let minutes = words / wordsPerMinute;
  minutes = Math.ceil(parseFloat(minutes.toFixed(2)));
  // Math.round used to resolve floating point funkiness
  //   http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
  // const time = Math.round(minutes * 60 * 1000);

  return minutes;
}

// https://stackoverflow.com/questions/1053902/how-to-convert-a-title-to-a-url-slug-in-jquery
export function sluggify(text: string) {
  if (!text) {
    return '';
  }

  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w-_ ]+/g, '')
    .replace(/ +/g, '-');
}
