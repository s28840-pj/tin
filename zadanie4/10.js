if (typeof window === 'undefined')
  require('./common.js');

function cenzura(blacklist, sentence) {
  let toReplace = [];
  let topIdx = Number.MAX_SAFE_INTEGER;
  while (1) {
    const indicies = blacklist
      .map(word => [sentence.slice(0, topIdx).lastIndexOf(word), word])
      .filter(([i]) => i != -1 && i < topIdx);
    if (indicies.length == 0)
      // No more words to replace
      break;

    const op = indicies.reduce((a, b) => a[0] > b[0] ? a : b);
    topIdx = op[0];
    toReplace.push(op);
  }

  sentence = [...sentence];
  for (const [idx, word] of toReplace)
    sentence.splice(idx, word.length, '*');
  return sentence.join('');
}

// function cenzuraNaive(blacklist, sentence) {
//   for (const word of blacklist)
//     sentence = sentence.replaceAll(word, '*');
//   return sentence;
// }

async function main() {
  const sentence = await ask('Zdanie do ocenzurowania: ');
  const blacklist = await ask('Zakazane slowa: ');
  display(cenzura(blacklist.split(' '), sentence));
  // display(cenzuraNaive(blacklist.split(' '), sentence));
}

main();
