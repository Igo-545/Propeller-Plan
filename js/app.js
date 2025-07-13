  function contactUsModalClick (){
    $('.contact_us_submit_form').removeClass('hidden');
    $('.contact_us_modal').addClass('hidden');
  }
  $(document).ready(function(){
      /*Smooth scrolling to the section*/
        $('#scroll_to_section, a.packages_nav_link, #scroll_to_form').on('click', function(e){
            e.preventDefault();
            var anchor = $(this).attr('href');
            $('html, body').stop().animate({
                scrollTop: $(anchor).offset().top - 132
            }, 800);
        });
      /* show and close popup */
        $('.button_white').on('click', function(){
            var id = $(this).attr('id');
            $('#' + id + '-popup').show();
            $('body').addClass('visible-hidden');
        });
        $('.popup .popup_close').on('click', function(){
            $(this).parent().hide();
            $('body').removeClass('visible-hidden');
        });
        /* cookies*/
        $('.button-close').on('click', function(){
           $('.cookies-wrapper').addClass('hidden');
            // Enable Google Analytics
            localStorage.setItem('ga_consent', 'granted');
            gtag('consent', 'update', {
                    'analytics_storage': 'granted'
            });
        });
        $('.button-close-decline').on('click', function(){
            $('.cookies-wrapper').addClass('hidden');
            localStorage.setItem('ga_consent', 'denied');
            // Denied Google Analytics
            gtag('consent', 'default', {
                'analytics_storage': 'denied'
                });
        });
        const cookiesAccepted = localStorage.getItem('ga_consent');
            if (!cookiesAccepted) {
              setTimeout(() => {
                $('.cookies-wrapper').removeClass('hidden');
              }, 1000);
            }
        /*Swiper slider*/
         $(('.slider').length)
                new Swiper('.slider',{
                    slidesPerView: 3,
                    spaceBetween: 20,
                    direction: 'horizontal',
                    loop: !0,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    breakepoints:{
                     375: {
                    slidesPerView: 1
                    },   
                     480: {
                    slidesPerView: 1
                    },
                     640: {
                    slidesPerView: 'auto'
                    },
                     960: {
                    slidesPerView: 'auto'
                    },
                     1024: {
                    slidesPerView: 'auto'
                    },
                    1280: {
                        slidersPerView: 3
                    },
                     1440: {
                     slidesPerView: 3
                    },
                    1620: {
                     slidesPerView: 3
                    },
                }
        });
        /*Validation forms*/
        $('.contact_us_button').on('click', function(){
            let lastName = $('#last_name').val();
            let agree = $('#agree').is(':checked');
            validateField(lastName, '#last_name');
            validateEmail();
            validateField(agree, '.contact_us_label');
        });
        $('#last_name').on('keyup', function(){
            let lastName = $('#last_name').val();
            validateField(lastName, '#last_name');
        });
        $('#email').on('keyup', function(){
            validateEmail();
        });
        $('#agree').on('click', function(){
            let agree = $('#agree').is(":checked");
            validateField(agree, '.contact_us_label');
        });
        const submitForm = $('#submit_form');
        if(submitForm){
            submitForm.on('submit', function(e){
                const recaptchaResponse = grecaptcha.getResponse(0);
                if(recaptchaResponse.length === 0 || !validateEmail()){
                    e.preventDefault();
                }
            });
        }
        function validateField(val, fieldId){ 
        if (val){
            $(fieldId).removeClass('has-error');
        } else{
            $(fieldId).addClass('has-error');
        }
        }
        function validateEmail() {
            let email = $('#email').val();
            if (email) {
                const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                let emailValid = email.match(emailRegex);
                if (emailValid) {
                    $('#email').removeClass('has-error');
                    return true;
                } 
                else 
                {
                $('#email').addClass('has-error');
                return false;
                }
            } else {
                $('#email').addClass('has-error');
                return false;
            }
        }
        /*show gradient on scroll*/
        $(window).scroll(function(){
           var scrollPos = $(window).scrollTop(),
               elemPos = $('.about_figures').offset().top + 200;
            if(scrollPos + $(window).height() > elemPos){
              $('.about_gradient').addClass('hidden'); 
                }else{
              $('.about_gradient').removeClass('hidden');  
            }
        });
  });

document.addEventListener('DOMContentLoaded', function(){
    /*Get Url parameters and update form fields*/
    let urlParams = new URLSearchParams(window.location.search);
    processParameter('package', '00NPj000003IVI9');
    function processParameter(package, input){
        const paramValue = urlParams.get(package) || '';
        const inputElement = document.getElementById(input);
        if(inputElement && paramValue){
            inputElement.value = paramValue;
            inputElement.style.display = '';
        }
        const successValue = urlParams.get('success') || '';
        if(successValue){
            $('.contact_us_submit_form').addClass('hidden');
            $('.contact_us_modal').removeClass('hidden');
        }
    }
    /*Navigation menu and scroll animation titles and cards*/
    let e = document.querySelector('.header_humburger'),
        t = document.querySelectorAll('#link_dinamic'), 
        n = (document.querySelectorAll('.menu_nav_link'),
            document.querySelectorAll('.text_block'));
    function o() {
        let e = window.innerHeight;
        n.forEach(t => {
            t.getBoundingClientRect().top < e - 140 ? (t.style.opacity = '1',
            t.style.transform = 'translateY(0)') : (t.style.opacity = '0',
            t.style.transform = 'translateY(60px)');
        });
    }
    e.addEventListener('click', function() {
        document.querySelector('.menu').classList.toggle('open-menu'),
        document.querySelector('body').classList.toggle('visible-hidden'),
        document.querySelector('.header').classList.toggle('element-hidden');
    }),
    t.forEach(e => {
        e.addEventListener('click', () => {
            window.location.reload(!0)
        });
    }),
    o(),
    window.addEventListener('scroll', o);
});
