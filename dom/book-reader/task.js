sizes = document.getElementsByClassName('font-size');
book = document.getElementById('book');

for (let i = 0; i < sizes.length; i++) {
    sizes[i].onclick = () => {
        curr = document.getElementsByClassName('font-size_active');
        curr[0].classList.remove('font-size_active');
        sizes[i].classList.add('font-size_active');
        if (sizes[i].classList.contains('font-size_small')) {
            book.className = 'book book_fs-small';
        } else if (sizes[i].classList.contains('font-size_big')) {
            book.className = 'book book_fs-big';
        } else {
            book.className = 'book';
        };
        return false;
    };
};