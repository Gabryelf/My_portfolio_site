// Функция для определения, находится ли элемент в видимой части экрана
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

// Функция для включения видео, когда оно попадает в видимую часть экрана
function playVideoWhenInViewport() {
    var videos = document.querySelectorAll('.video-player video');
    videos.forEach(function(video) {
        if (isInViewport(video.parentNode)) {
            video.play();
        } else {
            video.pause();
        }
    });
}

// Обработчик события прокрутки страницы
window.addEventListener('scroll', function() {
    playVideoWhenInViewport();
});

// Вызываем функцию при загрузке страницы, чтобы проверить видео, которые сразу видны на экране
window.addEventListener('load', function() {
    playVideoWhenInViewport();
});

// Добавляем функциональность для карусели изображений
$('.carousel').carousel();

// Добавляем функциональность для карусели портфолио
$('#portfolioCarousel').carousel({
    interval: 8000 // каждые 8 секунд
});

// Добавляем анимацию для логотипа
$('.logo img').hover(function() {
    $(this).addClass('animated');
}, function() {
    $(this).removeClass('animated');
});
