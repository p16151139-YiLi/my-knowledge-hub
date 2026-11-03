const menu = document.querySelector('.menu');
const nav = document.querySelector('.topbar nav');
if (menu && nav) {
  menu.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}
const search = document.querySelector('#search');
if (search) {
  const notes = [...document.querySelectorAll('#note-list .note')];
  const empty = document.querySelector('#no-results');
  search.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase();
    let count = 0;
    notes.forEach(note => {
      const match = (note.innerText + ' ' + note.dataset.search).toLowerCase().includes(q);
      note.hidden = !match;
      if (match) count++;
    });
    empty.hidden = count !== 0;
  });
}
