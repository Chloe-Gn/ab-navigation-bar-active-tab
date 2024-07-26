

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item a');
    const currentPage = window.location.pathname.split('/').pop();
    console.log(currentPage);
    
    navItems.forEach(link => {
        if (link.getAttribute('href') === currentPage){
            link.parentElement.classList.add('active')
        } else {
            link.parentElement.classList.remove('active');
            }
        });
    });
