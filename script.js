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

  let enquirySubmitted = false;

  enquiryForm.addEventListener("submit", function () {
    enquirySubmitted = true;
    formNote.textContent = "Submitting your enquiry...";
  });

  window.addEventListener("message", function (event) {

    if (!event.data ||
        event.data.type !== "pugiphala-enquiry") {
      return;
    }

    if (event.data.status === "success") {

      formNote.textContent =
        "Thank you! Your enquiry has been submitted successfully. We will contact you soon.";

      enquiryForm.reset();

    } else {

      formNote.textContent =
        "Sorry! We couldn't submit your enquiry. Please try again or email us directly.";

    }

    enquirySubmitted = false;
  });
}
