// Before publishing, replace this with the business email that should receive enquiries.
const CONTACT_EMAIL = 'Hellopugiphala@gmail.com';

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '✕' : '☰';
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('enquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = `Pūgīphala enquiry — ${form.get('interest')}`;
  const body = [
    `Name: ${form.get('name')}`,
    `Enquiry type: ${form.get('interest')}`,
    `Contact: ${form.get('reply')}`,
    '',
    'Message:',
    form.get('message') || '(No additional message)'
  ].join('\n');
  const note = document.getElementById('form-note');
  if (!CONTACT_EMAIL || CONTACT_EMAIL === 'YOUR_EMAIL_HERE') {
    note.textContent = 'Website preview only: add your business email in script.js (CONTACT_EMAIL) to enable enquiry submission.';
    note.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    return;
  }
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  note.textContent = 'Your email app should open with the enquiry pre-filled. Please send the email to complete your enquiry.';
});
