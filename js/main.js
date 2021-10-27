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


}