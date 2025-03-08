document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const toggleButton = document.getElementById("theme-toggle");
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleButton.textContent = "☀️"; // Sun icon for light mode
        } else {
            localStorage.setItem("theme", "light");
            toggleButton.textContent = "🌙"; // Moon icon for dark mode
        }
    });

    // Check stored theme preference on page load
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleButton.textContent = "☀️";
    }

    // Contact Button Toggle
    window.toggleContact = function () {
        let contactDetails = document.getElementById("contact-details");
        if (contactDetails.style.display === "none" || contactDetails.style.display === "") {
            contactDetails.style.display = "block";
        } else {
            contactDetails.style.display = "none";
        }
    };

    // Project List Logic
    const projects = [
        { name: "Portfolio Website", link: "https://github.com/shreyaguptajnvb/webd" },
        { name: "Leo Assistant (Voice AI)", link: "https://github.com/shreya19042001/Leo-voice-assistant" },
    ];

    const viewProjectsBtn = document.querySelector(".btn.blue");
    const projectList = document.getElementById("project-list");

    if (viewProjectsBtn) {
        viewProjectsBtn.addEventListener("click", function (event) {
            event.preventDefault();
            projectList.innerHTML = ""; // Clear previous content

            projects.forEach(project => {
                const projectItem = document.createElement("div");
                projectItem.innerHTML = `<p><strong>${project.name}</strong> - <a href="${project.link}" target="_blank">GitHub</a></p>`;
                projectItem.style.marginBottom = "10px";
                projectList.appendChild(projectItem);
            });
        });
    }
});