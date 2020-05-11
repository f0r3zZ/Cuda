window.addEventListener('DOMContentLoaded', function () {
    let burger = document.querySelector('.burger'),
        headerMenu = document.querySelector('.header-nav'),
        tabWrapper = document.querySelector('.portfolio-tabs-btns'),
        tabContent = document.getElementsByClassName('portfolio-tab'),
        tabBtn = document.getElementsByClassName('tab-btn');

    function hideTab(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTab(1);

    function showTab(b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTab(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    tabWrapper.addEventListener('click',function (event) {
        let target = event.target;
        if (target.className == 'tab-btn') {
            for (let i = 0; i < tabBtn.length; i++) {
                if (target == tabBtn[i]) {
                    showTab(i);
                    break;
                }
            }
            console.log('s');
        }

    })

    burger.addEventListener('click', function () {
        headerMenu.classList.toggle('showHeader');
        burger.classList.toggle('activeBurger');
    });
});