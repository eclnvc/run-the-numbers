function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle('active');
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function openNav() {
    document.getElementById("mySidebar").style.width = "100px";
    document.querySelector(".main-content").style.marginLeft = "100px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.querySelector(".main-content").style.marginLeft= "0";
}
document.getElementById('view-button').addEventListener('click', function() {
    const selectElement = document.getElementById('cv-select');
    const selectedValue = selectElement.value;

    if (selectedValue) {
        const iframeContainer = document.getElementById('iframe-container');
        iframeContainer.innerHTML = `<iframe src="${selectedValue}"></iframe>`;
    } else {
        alert('Please choose a CV from the dropdown menu.');
    }
});