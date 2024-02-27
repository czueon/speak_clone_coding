// JavaScript 코드
document.addEventListener('DOMContentLoaded', function () {
    var depth1Elements = document.querySelectorAll('.depth1');
    var depth1_1Elements = document.querySelectorAll('.depth1-1');
    var m1Elements = document.querySelectorAll('.m1');
    var m2Elements = document.querySelectorAll('.m2');
    var m3Elements = document.querySelectorAll('.m3');
    var menuElements = document.querySelectorAll('.menu');
    var langElements = document.querySelectorAll('#lang');
    var svgElements = document.querySelectorAll('.svg');

    depth1Elements.forEach(function (depth1Element) {
        depth1Element.addEventListener('click', function () {
            // 클릭될 때마다 'active' 클래스를 토글
            this.classList.toggle('active');
        });
    });

    depth1_1Elements.forEach(function (depth1_1Element) {
        depth1_1Element.addEventListener('click', function () {
            // 클릭될 때마다 'active' 클래스를 토글
            this.classList.toggle('active');
        });
    });

    m1Elements.forEach(function (m1Element) {
        m1Element.addEventListener('click', function () {
            // 클릭될 때마다 'active' 클래스를 토글
            this.classList.toggle('active');
        });
    });

    m2Elements.forEach(function (m2Element) {
        m2Element.addEventListener('click', function () {
            // 클릭될 때마다 'active' 클래스를 토글
            this.classList.toggle('active');
        });
    });

    m3Elements.forEach(function (m3Element) {
        m3.addEventListener('click', function () {
            // 클릭될 때마다 'active' 클래스를 토글
            this.classList.toggle('active');
        });
    });

    menuElements.forEach(function (menuElement) {
        menuElement.addEventListener('click', function () {
            // 클릭될 때마다 'active' 클래스를 토글
            this.classList.toggle('active');
        });
    });

    langElements.forEach(function (langElement) {
        langElement.addEventListener('click', function () {
            // 클릭될 때마다 'active' 클래스를 토글
            this.classList.toggle('active');
        });
    });
    
    svgElements.forEach(function (svgElement) {
        svgElement.addEventListener('click', function () {
            // 클릭될 때마다 'active' 클래스를 토글
            this.classList.toggle('active');
        });
    });
});