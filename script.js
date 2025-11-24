document.addEventListener('DOMContentLoaded', () => {
    // Tab Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding content
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Accordion Logic (Event Delegation)
    document.addEventListener('click', function (e) {
        // Check if the clicked element or its parent is an accordion header
        if (e.target.matches('.accordion-header') || e.target.closest('.accordion-header')) {
            const header = e.target.matches('.accordion-header') ? e.target : e.target.closest('.accordion-header');

            // Toggle active class
            header.classList.toggle('active');

            // Toggle panel visibility
            const panel = header.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.classList.remove('open');
            } else {
                panel.classList.add('open');
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
    });
});
