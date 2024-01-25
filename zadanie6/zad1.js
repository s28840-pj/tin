const btn1 = document.getElementById('zad-1-btn-1');
const div = document.getElementById('zad-1-div');

function lastDivId() {
  const last = div.children.item(div.childElementCount - 1);
  const [, num] = last.id.split('__');
  return parseInt(num);
}

btn1.addEventListener('click', () => {
  const next = lastDivId() + 1;
  const child = document.createElement('div');
  child.id = `zad-1-div__${next}`;
  child.innerText = `div ${next}`;
  div.appendChild(child);
});

const btn2 = document.getElementById('zad-1-btn-2');

btn2.addEventListener('click', () => {
  if (div.childElementCount > 0)
    div.removeChild(div.children.item(0));
})

const btn3 = document.getElementById('zad-1-btn-3');

let btn3Clicked = false;
btn3.addEventListener('click', () => {
  if (btn3Clicked)
    return;
  btn3Clicked = true;
  const s = document.createElement('style');
  s.innerHTML = `#zad-1-div__3 { background: yellow; }`;
  document.head.appendChild(s);
})

const btn4 = document.getElementById('zad-1-btn-4');

let btn4Clicked = false;
btn4.addEventListener('click', () => {
  for (let d of div.children) {
    if (btn4Clicked) {
      const [, num] = d.id.split('__');
      d.innerText = `div ${num}`;
    } else {
      d.innerText = 'nowy tekst';
    }
  }
  btn4Clicked = !btn4Clicked;
})
