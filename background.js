$(document).ready(function(){
    // Функция для загрузки изображений в блок header
    function loadBackgroundImages() {
        var imagesCount = 9; // Количество изображений в папке background
        var currentIndex = 1; // Индекс текущего изображения

        setInterval(function() {
            // Формируем путь к изображению
            var imagePath = 'background/back' + currentIndex + '.jpg';
            // Загружаем изображение в блок backgroundImages
            $('#backgroundImages').css('background-image', 'url(' + imagePath + ')');

            // Увеличиваем индекс текущего изображения
            currentIndex = (currentIndex % imagesCount) + 1;
        }, 10000); // Загружаем каждое изображение на 10 секунд

        setTimeout(function() {
            // Затухание изображения перед сменой
            $('#backgroundImages').fadeOut(5000, function() {
                // Изменяем изображение с обратным эффектом затухания
                setInterval(function() {
                    // Формируем путь к изображению
                    var imagePath = 'background/back' + currentIndex + '.jpg';
                    // Загружаем изображение в блок backgroundImages
                    $('#backgroundImages').css('background-image', 'url(' + imagePath + ')');

                    // Уменьшаем индекс текущего изображения
                    currentIndex = (currentIndex == 1) ? imagesCount : (currentIndex - 1);
                }, 10000); // Загружаем каждое изображение на 10 секунд
            });
        }, 5000); // Затухание на 5 секунд перед сменой изображения
    }

    loadBackgroundImages();
});
