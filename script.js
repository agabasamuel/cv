// Get the toggle switch and body
const toggleSwitch = document.getElementById("mode-toggle");
const body = document.body;

// Check if dark mode preference is saved in localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    toggleSwitch.checked = true;
}

// Listen for the toggle change event
toggleSwitch.addEventListener("change", function () {
    if (this.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled"); // Save the preference
    } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled"); // Save the preference
    }
});