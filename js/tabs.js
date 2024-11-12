const tab_buttons = document.querySelectorAll(".tab-btn");
const profiles = document.querySelectorAll(".character-profile");

function clearActiveClasses() {
    tab_buttons.forEach(btn => btn.classList.remove("active"));
    profiles.forEach(profile => profile.classList.remove("active"));
}

function selectCharacter(event) {
    const characterId = event.currentTarget.getAttribute("data-character");

    clearActiveClasses(); // Clear active classes from previous selection

    // Add active class to the selected button and profile
    event.currentTarget.classList.add("active");
    document.getElementById(characterId).classList.add("active");
}

// Add event listeners
tab_buttons.forEach(button => { button.addEventListener("click", selectCharacter); });

// Select the first character by default on page load
tab_buttons[0].click();
