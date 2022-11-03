const str = `
  010-1234-5678
  hail@hail.com
  https://www.omdbapi.com/?apikey=7035c60c&s=frozen
  The quick brown fox jumps over the lazy dog.
  abbcccddddddddddd
`;

console.log(str.match(/d{2,4}/g));
