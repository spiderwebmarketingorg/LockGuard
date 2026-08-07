document.addEventListener("DOMContentLoaded", () => {
  const quoteForm = document.getElementById("quoteForm");
  const formSuccess = document.getElementById("formSuccess");

  // Simple Quote Form Submission Handling
  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Hide form inputs and show success message
      quoteForm.style.display = "none";
      formSuccess.classList.remove("hidden");
    });
  }
});