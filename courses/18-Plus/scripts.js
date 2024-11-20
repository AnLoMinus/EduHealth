// Add error handling for modal interactions
function showModal(id) {
  try {
    const modal = document.getElementById(id);
    if (!modal) throw new Error(`Modal with id ${id} not found`);

    modal.style.display = "block";
    trapFocus(modal);
  } catch (error) {
    console.error("Error showing modal:", error);
    // Show user-friendly error message
    showErrorMessage("Sorry, something went wrong. Please try again.");
  }
}

// Add loading states
function showLoading(element) {
  element.classList.add("loading");
  element.setAttribute("aria-busy", "true");
}

function hideLoading(element) {
  element.classList.remove("loading");
  element.setAttribute("aria-busy", "false");
}

// Add focus trap for modals
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  element.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    }
  });
}
