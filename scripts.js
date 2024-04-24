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

// Функция для выбора случайного невидимого блока и его отображения
function showRandomBlock() {
    var blocks = document.querySelectorAll('.text-block:not(.visible)');
    if (blocks.length > 0) {
        var randomIndex = Math.floor(Math.random() * blocks.length);
        blocks[randomIndex].classList.add('visible');
    }
}

// Функция для скрытия всех видимых блоков
function hideAllBlocks() {
    var blocks = document.querySelectorAll('.text-block.visible');
    blocks.forEach(function(block) {
        block.classList.remove('visible');
    });
}

// Обработчик клика по кнопке "Еще факты"
document.getElementById('showMoreButton').addEventListener('click', function() {
    hideAllBlocks(); // Сначала скрываем все видимые блоки
    showRandomBlock(); // Затем показываем случайный невидимый блок
});

// Показываем один случайный блок при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    showRandomBlock();
});


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
