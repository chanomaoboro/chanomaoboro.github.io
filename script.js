document.addEventListener("DOMContentLoaded", () => {

    const navButtons = document.querySelectorAll(".nav-button");
    const contentPanels = document.querySelectorAll(".content-panel");


    navButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const targetId = button.dataset.target;


            // -----------------------------
            // Navigation button
            // -----------------------------

            navButtons.forEach((navButton) => {
                navButton.classList.remove("active");
            });

            button.classList.add("active");


            // -----------------------------
            // Content panel
            // -----------------------------

            contentPanels.forEach((panel) => {
                panel.classList.remove("active");
            });


            const targetPanel = document.getElementById(targetId);

            if (targetPanel) {
                targetPanel.classList.add("active");
            }

        });

    });

});

