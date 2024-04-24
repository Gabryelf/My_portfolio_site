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

$(document).ready(function() {
    // Проверка, когда видео попадает в зону видимости
    $(window).scroll(function() {
        $('.video-player').each(function() {
            if (isElementInViewport($(this))) {
                // Если видео в зоне видимости, воспроизводим его
                $(this).find('video').get(0).play();
            } else {
                // Если видео не в зоне видимости, останавливаем его
                $(this).find('video').get(0).pause();
            }
        });
    });
});

// Функция для проверки, находится ли элемент в зоне видимости
function isElementInViewport(el) {
    var rect = el[0].getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= $(window).height() &&
        rect.right <= $(window).width()
    );
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
