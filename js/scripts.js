window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

document.addEventListener('DOMContentLoaded', () => {
    const blogForm = document.getElementById('blogForm');
    const blogList = document.getElementById('blogList');

    blogForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        const blogItem = document.createElement('li');
        blogItem.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
            <button class="delete-btn">Delete</button>
        `;

        blogList.appendChild(blogItem);

        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
    });

    blogList.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-btn')) {
            const blogItem = e.target.parentElement;
            blogList.removeChild(blogItem);
        }
    });
});
