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
// ===================================
// PŪGĪPHALA ENQUIRY FORM
// ===================================

const enquiryForm = document.getElementById("enquiry-form");
const enquiryFrame = document.getElementById("enquiry-frame");
const formNote = document.getElementById("form-note");

if (enquiryForm && enquiryFrame && formNote) {

  let enquiryPending = false;

  enquiryForm.addEventListener("submit", function () {

    enquiryPending = true;

    formNote.textContent = "Submitting your enquiry...";

  });

  enquiryFrame.addEventListener("load", function () {

    if (!enquiryPending) return;

    enquiryPending = false;

    formNote.textContent =
      "Thank you! Your enquiry has been submitted successfully. We will contact you soon.";

    enquiryForm.reset();

  });

}
