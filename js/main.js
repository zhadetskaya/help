window.onload = function () {
    let body = document.body;
    let menu = document.querySelector('.menu');
    let burger = document.querySelector('.mobile-menu');
    let close = document.querySelector('.close');
    let menuItem = document.querySelectorAll('.menu__item');

    burger.addEventListener('click', function () {
        menu.classList.add('open-modal');
        toggleScrollON();
    })
    close.addEventListener('click', function () {
        menu.classList.remove('open-modal');
        toggleScrollOff();
    })
    function toggleScrollON() {
        body.classList.add('no-scroll');
    }

    function toggleScrollOff() {
        body.classList.remove('no-scroll');
    }
    menuItem.forEach((item) => {
        item.addEventListener('click', function () {
            menu.classList.remove('open-modal');
            toggleScrollOff();
        })
    })

    $('#reserve-button').click(() => {
        let name = $('#name');
        let phone = $('#phone');

        if (name.val() && phone.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val(),
                success: () => {
                    alert('Заявка отправлена.')
                },
                error: () => {
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.')
                }
            });
        } else {
            $('#reserve-error').show();
        }
    });




        const swiper = new Swiper('.swiper', {
            // Optional parameters
            // direction: 'vertical',
            loop: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            spaceBetween:30,
            centeredSlides: true,
            slidesPerView: 3,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            // And if we need scrollbar
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
            // effect: 'coverflow',
            // coverflowEffect:{
            //     rotate: 20,
            //     stretch:50,
            //     slideShadows: true,
            // },
            breakpoints:{
                320:{
                    slidesPerView:1,
                },
                480:{
                    slidesPerView:1,
                },
                992:{
                    slidesPerView:2,
                    centeredSlides: false,
                },
                1400:{
                    slidesPerView:3,
                },
            },
        })

}