
document.getElementById('year').textContent = new Date().getFullYear();

const btn = document.getElementById('hambtn');
const drawer = document.getElementById('mobileNav');
if(btn && drawer){
  btn.addEventListener('click', () => {
    const open = drawer.style.display === 'block';
    drawer.style.display = open ? 'none' : 'block';
    btn.setAttribute('aria-expanded', String(!open));
    drawer.setAttribute('aria-hidden', String(open));
  });
}

const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const body = Array.from(data.entries()).map(([k,v])=> `${k}: ${v}`).join('\n');
    window.location.href = `mailto:hello@silverpoint-solutions.com?subject=Website%20inquiry&body=${encodeURIComponent(body)}`;
  });
}
