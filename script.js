window.onload = function () {
    let scrolled;
    let timer;

    const btn_top = document.getElementById('btn_top');
    btn_top.addEventListener('click', function () {
        scrolled = window.pageYOffset;
        scrollToTop();
    });

    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 400; // 100 - скорость прокрутки
            timer = setTimeout(scrollToTop, 100);
        } else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }
}


