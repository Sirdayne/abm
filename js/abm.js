$(document).ready(function(){

    // NAVIGATION

    $('body').on('click','.nav-mob' , function(){
        $('.navigation-row').toggleClass('nav-active');
    });










    /*

	                       
    $('body').on('click','.modal-back, .modal-close' , function(){
        $('.modal-back, .modal, .thx, .modal-calc').fadeOut(500);
    });
    
    $('body').on('click','.nav-services' , function(){
        $(this).addClass('nm-active');
    });
    
    $(document).mouseup(function (e) {
        var container = $(".nav-services");
            if (container.has(e.target).length === 0){
                $(".nav-services").removeClass('nm-active');
            }
    });
    
    $('body').on('click','.jk' , function(){
        $('.modal-back, .modal').fadeIn(500);
    });
    
    // BURGER
    $('body').on('click','.burger' , function(){
        $(this).toggleClass('nav-active');
        $('.navigation').toggleClass('nav-active');
    });
    
    // LINE BLOCK
    $('.work-box__left__circle, .work-box__right__circle').addClass('wow fadeInDown');
    $('.work-box__left__line, .work-box__right__line').addClass('wow aniline');
    
    $('.work-box__left .work-box__shadow, .work-box__left .work-box__title, .work-box__left .work-box__text').addClass('wow fadeInLeft');
    $('.work-box__right .work-box__shadow, .work-box__right .work-box__title, .work-box__right .work-box__text').addClass('wow fadeInRight');
    
    //SERVICES BLOCKS
    $('.service-part__text, .service-part__image').addClass('wow fadeInUp');
    $('.service-part__image').attr('data-wow-delay','.7s');
    
    // PROJECTS PAGES PAGINATION
    var paginationIndex = 0;

    function changePagination() {
        if (paginationIndex < 0){
            paginationIndex = 1;
        }

        if (paginationIndex > 1)
        {
           paginationIndex = 0;
        }

        $('.pagination-dot').removeClass('pagination-active');
        $('.pagination-dot').eq(paginationIndex).addClass('pagination-active');

        $('.pro-page').removeClass('pro-active');
        $('.pro-page').eq(paginationIndex).addClass('pro-active');
    }

    $('body').on('click','.pagination-dot' , function(){
        paginationIndex = $('.pagination-dot').index(this);

        changePagination();
    });

    $('body').on('click','.pagination-prev' , function(){
        paginationIndex--;

        changePagination();
    });

    $('body').on('click','.pagination-next' , function(){
        paginationIndex++;

        changePagination();
    });

    */

});

