const res = document.getElementById('zad-2__calc__res');
document.getElementById('zad-2__calc').addEventListener('submit', e => {
  e.preventDefault();

  const { fst, snd, typ } = e.currentTarget;

  const fstNum = parseInt(fst.value);
  const sndNum = parseInt(snd.value);

  if (Number.isNaN(fstNum) || Number.isNaN(sndNum)) {
    // TODO: error
    return;
  }

  console.log(fst,snd,typ);

  if (sndNum === 0 && typ.value == 'div') {
    // TODO: error
    return;
  }

  let result = 0;
  switch (typ.value) {
    case 'add':
      result = fstNum + sndNum;
      break;
    case 'sub':
      result = fstNum - sndNum;
      break;
    case 'mul':
      result = fstNum * sndNum;
      break;
    case 'div':
      result = fstNum / sndNum;
      break;
    default:
      // TODO: error
      return;
  }

  res.innerText = result;
});
