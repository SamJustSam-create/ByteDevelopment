// Footer year
const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

// Contact form: submit to Formspree in place so the visitor stays on the page.
(() => {
  const form = document.querySelector('.contact-form');
  const note = form?.querySelector('[data-form-note]');
  const button = form?.querySelector('button[type="submit"]');
  if (!form || !note || !button) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    button.disabled = true;
    note.textContent = 'Sending…';
    note.className = 'form-note';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('Bad response');
      form.reset();
      note.textContent = "Thanks. I'll reply within a business day.";
      note.className = 'form-note success';
    } catch {
      note.textContent = 'Something went wrong. Email hello@bytedevelopment.com.au instead.';
      note.className = 'form-note error';
    } finally {
      button.disabled = false;
    }
  });
})();
