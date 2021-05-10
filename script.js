$(document).ready(function() {
    // Scroll presentation
    const nav = document.querySelector('.reveal');

    window.addEventListener('scroll', () => {

        if (window.scrollY > 150) {

            nav.classList.add('reveal-visible');


        } else {

            nav.classList.remove('reveal-visible')
        }



    })

    const nav2 = document.querySelector('.reveal1');

    window.addEventListener('scroll', () => {


        if (window.scrollY > 150) {

            nav2.classList.add('reveal-visible1');

        } else {

            nav2.classList.remove('reveal-visible1')
        }
    })



    const nav3 = document.querySelector('.reveal2');

    window.addEventListener('scroll', () => {


        if (window.scrollY > 200) {

            nav3.classList.add('reveal-visible2');

        } else {

            nav3.classList.remove('reveal-visible2')
        }
    })

    const nav4 = document.querySelector('.reveal3');

    window.addEventListener('scroll', () => {


        if (window.scrollY > 200) {

            nav4.classList.add('reveal-visible3');

        } else {

            nav4.classList.remove('reveal-visible3')
        }
    })

    // Scroll Studie & Work 

    const studieScroll = document.querySelector('.studieInvisible')

    window.addEventListener('scroll', () => {

        if (window.scrollY > 1250) {

            studieScroll.classList.add('studieVisible');

        } else {

            studieScroll.classList.remove('studieVisible');
        }
    })

    const workScroll = document.querySelector('.workInvisible')

    window.addEventListener('scroll', () => {

        if (window.scrollY > 1250) {

            workScroll.classList.add('workVisible');

        } else {

            workScroll.classList.remove('workVisible');
        }
    })

    // TECHNICAL SKILLS
    $('.techHide').click(function() {


        $('.techHide').hide();
        $('.adobeUnshow').addClass('adobe');
        $('.adobeUnshow').removeClass('adobeUnshow');
        $('#technicalSkillsBtn').css('background-color', '#EEEFF2')

    })

    $('.adobe').click(function() {

        $('.techHide').show();
        $('.adobe').addClass('adobeUnshow')
        $('.adobeUnshow').removeClass('adobe')
        $('#technicalSkillsBtn').css('background-color', '#2A324B')


    })
    $('#technicalSkillsBtn').hover(function() {


        $('.techHide').show();
        $('.adobe').addClass('adobeUnshow')
        $('.adobeUnshow').removeClass('adobe')
        $('#technicalSkillsBtn').css('background-color', '#2A324B');

    })


    // LANGUAGES SKILLS 
    $('.show2').click(function() {

        $('.show2').hide();
        $('.unshow').addClass('show');
        $('#languagesBtn').css('background-color', '#EEEFF2')


    })
    $('#languagesBtn').hover(function() {

        $('.show2').show();
        $('.unshow').removeClass('show');
        $('#languagesBtn').css('background-color', '#2A324B');

    })
    $('.unshow').click(function() {


        $('.show2').show();
        $('.unshow').removeClass('show');
        $('#languagesBtn').css('background-color', '#2A324B')

    })

    // SOFT SKILLS











    // PHONE BTN

    const phoneNumber = document.getElementById('phoneNumber');
    const iconPhone = document.getElementById('iconPhone')

    iconPhone.addEventListener('click', () => {

        phoneNumber.classList.add('phoneNumber');
        iconPhone.classList.add('hideBtn');




    })

    phoneNumber.addEventListener('click', () => {

        phoneNumber.classList.remove('phoneNumber');
        iconPhone.classList.remove('hideBtn');

    })

    // DARKMODE 

    $('#darkModeBtn').click(function() {

        $('.citationBloc').removeAttr('id');
        $('.citationBloc').addClass('displayDark');
        $('#subtitle').css('color', '#C97064');
        $('.linkHead').css('background-color', '#C97064');




    })

    $('.displayBtnDark').click(function() {

        $('.citationBloc').Attr('id');
        $('.citationBloc').removeClass('displayDark');
        $('#subtitle').css('color', '#C97064');




    })
















})