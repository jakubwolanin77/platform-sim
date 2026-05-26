// Navigation and Global UI logic

document.addEventListener("DOMContentLoaded", () => {
    // Render Sidebar
    const sidebarHtml = `
        <div class="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="var(--color-brand)"/>
                <path d="M2 17L12 22L22 17" stroke="var(--color-brand)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="var(--color-brand)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Platform<span>Sim</span>
        </div>
        <ul class="nav-links">
            <li><a href="dashboard.html" id="nav-dashboard">Dashboard</a></li>
            <li><a href="pensions.html" id="nav-pensions">Pensions (1st & 2nd)</a></li>
            <li><a href="mortgages.html" id="nav-mortgages">Mortgages</a></li>
            <li><a href="pillar-pensions.html" id="nav-pillar">3rd & 4th Pillar</a></li>
            <li><a href="child-funds.html" id="nav-child">Child Funds</a></li>
            <li><a href="investing.html" id="nav-investing">Investing</a></li>
            <li><a href="budget.html" class="nav-budget-btn">Open Budgeting</a></li>
            <li style="margin-top: auto;">
                <a href="index.html" style="color: var(--color-text-muted);">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                    Switch Persona
                </a>
            </li>
        </ul>
    `;
    
    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = sidebarHtml;
        sidebarContainer.classList.add('sidebar');
    }

    // Set Active Link
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage) {
        const linkId = currentPage.replace('.html', '');
        const activeLink = document.getElementById(`nav-${linkId}`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});
