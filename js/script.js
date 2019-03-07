$(document).ready(function(){

  //OCULTA EL CARRITO Y EL LOGIN EN DESKTOP AL MOSTRAR CUALQUIER DROPDOWN MENÚ.
  $('.nav-menu').hover(
    function(){
      if( !$('.nav-cart-list').hasClass('visibility') ){
        $('.nav-cart-list').toggleClass('visibility');
      }
      if( !$('.nav-signIn-dropdown').hasClass('visibility') ){
        $('.nav-signIn-dropdown').toggleClass('visibility');
      }
    },
    function(){ }
  );

  //DESPLIEGA EL MENÚ DE LO ÚLTIMO.
  $('.nav-last').hover(
    function(){ $('.nav-last-list').show(); },
    function(){ $('.nav-last-list').hide(); }
  );

  //DESPLIEGA EL MENÚ DE HOGAR.
  $('.nav-home').hover(
    function(){ $('.nav-home-list').show(); },
    function(){ $('.nav-home-list').hide(); }
  );

  //DESPLIEGA EL MENÚ DE TECNO.
  $('.nav-tecno').hover(
    function(){ $('.nav-tecno-list').show(); },
    function(){ $('.nav-tecno-list').hide(); }
  );

  //DESPLIEGA EL MENÚ DE MODA.
  $('.nav-vogue').hover(
    function(){ $('.nav-vogue-list').show(); },
    function(){ $('.nav-vogue-list').hide(); }
  );

  //DESPLIEGA EL MENÚ DE HOBBIES.
  $('.nav-hobbies').hover(
    function(){ $('.nav-hobbies-list').show(); },
    function(){ $('.nav-hobbies-list').hide(); }
  );

  //DESPLIEGA EL MENÚ DE DEPORTES.
  $('.nav-sports').hover(
    function(){ $('.nav-sports-list').show(); },
    function(){ $('.nav-sports-list').hide(); }
  );

  //DESPLIEGA LA BARRA DE BÚSQUEDA.
  $('.nav-search').hover(
    function(){ 
      $('.nav-search-dropdown').show();
      if( !$('.nav-menu-list').hasClass('visibility') )
        $('.nav-menu-list').toggleClass('visibility');
    },
    function(){ $('.nav-search-dropdown').hide(); }
  );

  //DESPLIEGA EL DROPDOWN DEL MENÚ, OCULTA EL DEL CARRITO.
  $('.menu-toggle').click(
    function(){ 
      $('.nav-menu-list').toggleClass('visibility'); 
      if( !$('.nav-cart-list').hasClass('visibility') )
        $('.nav-cart-list').toggleClass('visibility');
    }
  );

  //DESPLIEGA EL DROPDOWN DEL CARRITO, OCULTA EL DEL MENÚ.
  $('.nav-cart-group').hover(
    function(){ 
      $('.nav-cart-list').toggleClass('visibility');
      if( !$('.nav-menu-list').hasClass('visibility') )
        $('.nav-menu-list').toggleClass('visibility');
      if( !$('.nav-signIn-dropdown').hasClass('visibility') )
        $('.nav-signIn-dropdown').toggleClass('visibility');
    },
    function(){
      $('.nav-cart-list').toggleClass('visibility');
    }
  );

  //DESPLIEGA EL DROPDOWN DEL LOGIN, OCULTA EL DEL MENÚ.
  $('.nav-signIn').click(
    function(){ 
      $('.nav-signIn-dropdown').toggleClass('visibility');
      if( !$('.nav-menu-list').hasClass('visibility') )
        $('.nav-menu-list').toggleClass('visibility');
      if( !$('.nav-cart-list').hasClass('visibility') )
        $('.nav-cart-list').toggleClass('visibility');
    }
  );

  //ACCIONES AL RESPONSIVE.
  $(window).on('resize', function(){

    //OCULTA EL MENÚ DROPDOWN MOBILE SI LA PANTALLA OBTIENE EL TAMAÑO DE DESKTOP.
    if ( window.innerWidth > 800 && !$('.nav-menu-list').hasClass('visibility') ) {
      $('.nav-menu-list').toggleClass('visibility');
    }

    //MUEVE DE POSICIÓN LOS MAS VENDIDOS AL HACER RESIZE.
    if ( window.innerWidth < 801) {
      $('.mostSoldContainer').insertBefore('.featuresContainer');
      
      if( !$('.nav-signIn-dropdown').hasClass('visibility') )
        $('.nav-signIn-dropdown').toggleClass('visibility');

    }else{
      $('.mostSoldContainer').insertBefore('.newsletterContainer');
    }

    $( "#previewModal" ).hasClass('show', function(e){
      var imgHeight = $('#previewImage').height();
      console.log(imgHeight);
      $('.leftPreviewArrow').css('margin-top', -((imgHeight/2)+15)+'px');
      $('.rightPreviewArrow').css('margin-top', -((imgHeight/2)+15)+'px');
    });
  });

  //MUEVE DE POSICIÓN LOS MAS VENDIDOS AL HACER INICIAR LA WEB.
  if(window.innerWidth < 801){
    $('.mostSoldContainer').insertBefore('.featuresContainer');
  }else{
    $('.mostSoldContainer').insertBefore('.newsletterContainer');
  }

  // $('.nProductBtn').on('click', function(){
  //   $('.active').removeClass('active');
  //   $(this).addClass('active');
  // });

  //MOSTRAR EL PRIMER ELEMENTO DEL SLIDER.
  // $('.firstProductBtn').on('click', function(){
  //   $('.secondProductBtn').removeClass('productBtnActive');
  //   $('.thirdProductBtn').removeClass('productBtnActive');
  //   $('.firstProductBtn').addClass('productBtnActive');
  // });

  //MOSTRAR EL SEGUNDO ELEMENTO DEL SLIDER.
  // $('.secondProductBtn').on('click', function(){
  //   $('.firstProductBtn').removeClass('productBtnActive');
  //   $('.thirdProductBtn').removeClass('productBtnActive');
  //   $('.secondProductBtn').addClass('productBtnActive');
  // });

  //MOSTRAR EL TERCER ELEMENTO DEL SLIDER.
  // $('.thirdProductBtn').on('click', function(){
  //   $('.firstProductBtn').removeClass('productBtnActive');
  //   $('.secondProductBtn').removeClass('productBtnActive');
  //   $('.thirdProductBtn').addClass('productBtnActive');
  // });

  //MOSTRAR/OCULTAR LOS ICONOS EN PRODUCT SLIDER.
  $('.plusBtn').on('click', function(){
    // $('.plusDropdown').toggleClass('visibility');
    //$('.plusDropdown').toggle('slow');
    $('.plusDropdown').slideToggle('fast');
  });

  //MOSTRAR/OCULTAR EL ICONO DE TELÉFONO.
  $('.phoneProduct').hover(function(){
    $('.phoneProduct').animate({ 'right' : '+=320'});
  }, function(){
    $('.phoneProduct').animate({ 'right' : '-=320'});
  });

  //CAMBIA EL ICONO DE PLAY AL HACER HOVER EN LOS PRODUCTOS DE PRODUCT ITEMS.
  $('.productItem').hover(function(){
    $(this).find('.productPlayBtn').addClass('visibility');
    $(this).find('.productPlayBtnWhite').removeClass('visibility');
  }, function(){
    $(this).find('.productPlayBtn').removeClass('visibility');
    $(this).find('.productPlayBtnWhite').addClass('visibility');
  })

  //CIERRA TODOS LOS PRODUCTS ITEMS DROPDOWNS AL ABRIR UNO NUEVO.
  $('.productPlusBtn').on('click', function(){

    // if($(".productPlusDropdown").is(":visible")){
    //   $('.productPlusDropdown').addClass('visibility'); 
    // }

    if($(this).next('.productPlusDropdown').hasClass('dropToggled')){
      $(this).next('.productPlusDropdown').slideToggle('fast');
    }else{
      $('.dropToggled').hide().removeClass('dropToggled');
      //$('.productPlusDropdown').addClass('visibility');
      $(this).next('.productPlusDropdown').slideToggle('fast').addClass('dropToggled');
    }
    
    //$(this).next('.productPlusDropdown').slideToggle('fast').toggleClass('visibility');
    //$(this).next('.productPlusDropdown').toggleClass('visibility');
  });

  //CIERRA TODOS LOS PRODUCTS ITEMS DROPDOWNS AL ABRIR UNO NUEVO.
  $('.followingPlusBtn').on('click', function(){
    // $('.followingPlusDropdown').addClass('visibility');
    // $(this).next('.followingPlusDropdown').toggleClass('visibility');

    if($(this).next('.followingPlusDropdown').hasClass('dropToggled')){
      $(this).next('.followingPlusDropdown').slideToggle('fast');
    }else{
      $('.dropToggled').hide().removeClass('dropToggled');
      //$('.productPlusDropdown').addClass('visibility');
      $(this).next('.followingPlusDropdown').slideToggle('fast').addClass('dropToggled');
    }
  });

 //DESPLIEGA EL MENÚ DE LO ÚLTIMO EN MOBILE.
  $('.nav-last-mobile').hover(
    function(){ $('.nav-last-list').show(); },
    function(){ $('.nav-last-list').hide(); }
  );

  //DESPLIEGA EL MENÚ DE HOGAR.
  $('.nav-home-mobile').hover(
    function(){ $('.nav-home-list').show(); },
    function(){ $('.nav-home-list').hide(); }
  );

  // //DESPLIEGA EL MENÚ DE TECNO.
  $('.nav-tecno-mobile').hover(
    function(){ $('.nav-tecno-list').show(); },
    function(){ $('.nav-tecno-list').hide(); }
  );

  // //DESPLIEGA EL MENÚ DE MODA.
  $('.nav-vogue-mobile').hover(
    function(){ $('.nav-vogue-list').show(); },
    function(){ $('.nav-vogue-list').hide(); }
  );

  // //DESPLIEGA EL MENÚ DE HOBBIES.
  $('.nav-hobbies-mobile').hover(
    function(){ $('.nav-hobbies-list').show(); },
    function(){ $('.nav-hobbies-list').hide(); }
  );

  // //DESPLIEGA EL MENÚ DE DEPORTES.
  $('.nav-sports-mobile').hover(
    function(){ $('.nav-sports-list').show(); },
    function(){ $('.nav-sports-list').hide(); }
  );

  //DESELECCIONA EL CHECKBOX DE MASCULINO AL PRESIONAR FEMENINO E IMPIDE DESELECCIONAR EL MISMO.
  $('#femaleCheck').on('click', function(){
    if(!$('#femaleCheck').prop('checked'))
      $('#femaleCheck').prop('checked', true); 

    $('#maleCheck').prop('checked', false);
  });

  //DESELECCIONA EL CHECKBOX DE FEMENINO AL PRESIONAR MASCULINO E IMPIDE DESELECCIONAR EL MISMO.
  $('#maleCheck').on('click', function(){
    if(!$('#maleCheck').prop('checked'))
      $('#maleCheck').prop('checked', true); 

    $('#femaleCheck').prop('checked', false);
  });

  //FUNCIÓN PARA CERRAR TODOS LOS TABS.
  var closeAllTabs = function(){
    $('.accountFirstTab').addClass('visibility');
    $('.accountSecondTab').addClass('visibility');
    $('.accountThirdTab').addClass('visibility');
    $('.accountFourthTab').addClass('visibility');
  };

  //ABRE EL TAB INDICADO EN EL PARÁMETRO.
  var openTab = function(tab){
    $(tab).toggleClass('visibility');
  };

  //ACCIONES EN LOS DISTINTOS TABS, CAMBIO DE COLORES Y CAMBIO DE TABS.
  $('.accountTab').on('click', function(){
    if($(this).hasClass('cartTab'))
      return 0;
    closeAllTabs();
    $('.panel-active').removeClass('panel-active');
    $(this).addClass('panel-active');
  });

  $('.accountTabPanel').on('click', function(){
    if($(this).hasClass('cartTab'))
      return 0;
    openTab('.accountFirstTab');
    $('.accountTabInfo').css('background-color', '#f8f8f8');
    $('.accountTabDir').css('background-color', '#f0f0f0');
  });

  $('.accountTabInfo').on('click', function(){
    if($(this).hasClass('cartTab'))
      return 0;
    openTab('.accountSecondTab');
    $('.accountTabDir').css('background-color', '#f0f0f0');
  });

  $('.accountTabDir').on('click', function(){
    if($(this).hasClass('cartTab'))
      return 0;
    openTab('.accountThirdTab');
    $('.accountTabInfo').css('background-color', '#f0f0f0');
  });

  $('.accountTabOrder').on('click', function(){
    if($(this).hasClass('cartTab'))
      return 0;
    openTab('.accountFourthTab');
    $('.accountTabInfo').css('background-color', '#f0f0f0');
    $('.accountTabDir').css('background-color', '#e7e7e7');
  });

  $('.productBtn').on('click', function(){
    if($(this).hasClass('cartTab'))
      return 0;
    $('.productBtnActive').removeClass('productBtnActive');
    $(this).addClass('productBtnActive');
  });

  //ACCIÓN EN EL BOTÓN DE CONTINUAR EN CARRITO.
  $('.cartCheckoutBtnsSection').on('click', function(){
    if($('.accountTabPanel').hasClass('panel-active')){
      closeAllTabs();
      $('.panel-active').removeClass('panel-active');
      openTab('.accountSecondTab');
      $('.accountTabDir').css('background-color', '#f0f0f0');
      $('.accountTabInfo').addClass('panel-active');
      $('.cartCheckoutInfo').toggleClass('visibility');
    }else if($('.accountTabInfo').hasClass('panel-active')){
      closeAllTabs();
      $('.panel-active').removeClass('panel-active');
      openTab('.accountThirdTab');
      $('.accountTabInfo').css('background-color', '#f0f0f0');
      $('.accountTabDir').addClass('panel-active');
      $('.cartCheckoutDatos').toggleClass('visibility');
    }else if($('.accountTabDir').hasClass('panel-active')){
      closeAllTabs();
      $('.panel-active').removeClass('panel-active');
      openTab('.accountFourthTab');
      $('.accountTabInfo').css('background-color', '#f0f0f0');
      $('.accountTabDir').css('background-color', '#e7e7e7');
      $('.accountTabOrder').addClass('panel-active');
      $('.cartCheckoutPago').toggleClass('visibility');
      
    }else if($('.accountTabOrder').hasClass('panel-active')){
      // closeAllTabs();
      // $('.panel-active').removeClass('panel-active');
    }
  });

  //ACCIÓN EN EL BOTÓN DE VOLVER EN CARRITO.
  $('.back-btn').on('click', function(){
    if($('.accountTabPanel').hasClass('panel-active')){

    }else if($('.accountTabInfo').hasClass('panel-active')){
      closeAllTabs();
      $('.panel-active').removeClass('panel-active');
      openTab('.accountFirstTab');
      $('.accountTabInfo').css('background-color', '#f8f8f8');
      $('.accountTabDir').css('background-color', '#f0f0f0');
      $('.accountTabPanel').addClass('panel-active');
    }else if($('.accountTabDir').hasClass('panel-active')){
      closeAllTabs();
      $('.panel-active').removeClass('panel-active');
      openTab('.accountSecondTab');
      $('.accountTabDir').css('background-color', '#f0f0f0');
      $('.accountTabInfo').addClass('panel-active');
    }else if($('.accountTabOrder').hasClass('panel-active')){
      closeAllTabs();
      $('.panel-active').removeClass('panel-active');
      openTab('.accountThirdTab');
      $('.accountTabInfo').css('background-color', '#f0f0f0');
      $('.accountTabDir').addClass('panel-active');
    }
  });

  //DATETIMEPICKER DE LA CUENTA
  $('#fecha-cuenta').datetimepicker({
    format: 'DD/MM/YYYY'
  });

  //DATETIMEPICKER DEL MODAL
  $('#fecha-modal').datetimepicker({
    format: 'DD/MM/YYYY'
  });

  //PRODUCT SLIDER CAROUSEL
  $('#productSliderCarousel').carousel({
    interval: false
  });

  //ESCALA LOS ARROWS DEL PREVIEW MODAL
  // var previewModalImageHeight = $('.previewModalImage').height();
  // var previewModalImageHeight = document.getElementById('previewImage');
  // previewModalImageHeight = previewModalImageHeight.clientHeight();

  // console.log(previewModalImageHeight);
  // $('.leftPreviewArrow').css('margin-top', (previewModalImageHeight/2)+'px');
  // $('.rightPreviewArrow').css('margin-top', (previewModalImageHeight/2)+'px');

  $( "#previewModal" ).on('shown.bs.modal', function(e){
    var imgHeight = $('#previewImage').height();
    console.log(imgHeight);
    $('.leftPreviewArrow').css('margin-top', -((imgHeight/2)+15)+'px');
    $('.rightPreviewArrow').css('margin-top', -((imgHeight/2)+15)+'px');
  });

  // var imgHeight = $('#previewImage').height();
  // console.log(imgHeight);

  // $(window).load(function() {
  //   var imgHeight2 = $('#previewImage').height();
  //   console.log(imgHeight2);
  // });

  $(document).on("mousewheel", function() {
    if($(document).scrollTop() > $(document).height()*0.7){
      $('.fixedFooter').css('display', 'none');
    } else {
      $('.fixedFooter').css('display', 'block');
    }; 
  });

  //ELIMINA LOS POPUPS DE PRODUCT
  $('#closeViews').click(function(){
    $('.viewsPopUp').fadeOut();
  });

  $('#closeLow').click(function(){
    $('.lowPopUp').fadeOut();
  });

  $('#closeGood').click(function(){
    $('.goodPopUp').fadeOut();
  });

});