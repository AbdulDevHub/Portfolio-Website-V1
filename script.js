// ------------------------ TABS FUNCTIONS ------------------------
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
/**
 * Function to open a specific tab by name.
 *
 * @param {string} tabName - The name of the tab to be opened
 * @return {void} 
 */
function openTab(tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}


// ------------------------ SIDE MENU FUNCTIONS ------------------------
let sideMenu;
document.addEventListener('DOMContentLoaded', (event) => {
  sideMenu = document.getElementById('sideMenu');
});

/**
 * Opens the side menu by setting the right CSS property of the sideMenu element to "0".
 *
 * @return {void} This function does not return anything.
 */
function openMenu() {
  sideMenu.style.right = "0";
}

/**
 * Closes the side menu by setting the right position of the side menu element to "-200px".
 *
 * @return {void} This function does not return anything.
 */
function closeMenu() {
  sideMenu.style.right = "-200px";
}

// ------------------------ FORMSPREE CONTACT FORM ------------------------
const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    // Submit the form to Formspree
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      // Display success message
      msg.innerHTML = "Message Sent Successfully";

      // Reset the form
      form.reset();

      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
    } else {
      throw new Error("Form submission failed");
    }
  } catch (error) {
    console.error("Error!", error.message);
  }
});
