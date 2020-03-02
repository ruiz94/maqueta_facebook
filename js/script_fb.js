// sirve para insertar iconos de https://feathericons.com/
feather.replace();
$(document).ready(function(){
    let alto=$(window).height();
    let ancho=$(window).width();
    tamañoPantalla(alto, ancho);
});
// detectar click en cualquier lugar de la pantalla
$(document).click(function(el){
    // console.log(el.currentTarget());
    esconderMenu();
});

/* funcionalidad del menú*/
$(".fb .icono-perfil .drop-menu ul").on('click', 'li', function(e){
    e.stopPropagation();
    let li = $(this);
    $(".fb .icono-perfil .drop-menu ul li").removeClass('selected');
    li.addClass('selected');
    console.log(li.attr('class'));
    $(".fb .cuerpo .center").removeClass('visible');
    $(".fb .cuerpo .left").removeClass('visible');
    $(".fb .cuerpo .right").removeClass('visible');
    // $(".fb .header .perfil .iconos").css('opacity', '0');
    if (li.hasClass('menu')) {
        $(".fb .cuerpo .left").addClass('visible');
        // $(".fb .cuerpo .left").fadeIn();
    }else if(li.hasClass('stories')){
        $(".fb .cuerpo .right").addClass('visible');
        
    }else if(li.hasClass('feed')){
        // $(".fb .header .perfil .iconos").css('opacity', '1');
        
    }
    esconderMenu();
});
$(".icono-perfil").on("click",'.icon3, .nombre', function(e){
    e.stopPropagation();
    let drop_menu = $('.drop-menu');
    $(".fb .header .perfil .iconos").css('opacity', '0');
    if (drop_menu.is(':visible')) {
        esconderMenu();
        $(".fb .header .perfil .icono-perfil .forPhone").removeClass('forPhone-show');
        $(".fb .header .perfil .icono-perfil .divide").removeClass('divide-show');
    } else {
        drop_menu.fadeIn();
        $(".fb .cuerpo").addClass('onBlurCss');
        $(".fb .header .perfil .icono-perfil .forPhone").addClass('forPhone-show');
        $(".fb .header .perfil .icono-perfil .divide").addClass('divide-show');
    }
});
function esconderMenu(){
    // if($(".fb .icono-perfil .drop-menu ul li ").hasClass('selected'))
    $(".fb .header .perfil .iconos").css('opacity', '1');
    $('.drop-menu').fadeOut();
    //le ponermos un fondo difuminado a toda la pantalla cuando el menú esta activo
    $(".fb .cuerpo").removeClass('onBlurCss');
}
/* Detectar click y blur del input search */
$(".fb .header .search").on('click', function(){
    let search = $(".fb .header .search");
    console.log(search.hasClass('menorA100'), search.attr('class'));
    if (search.hasClass('menorA100')) {
        search.addClass('focusSearch');
        $(".fb .header .logo").fadeOut();
        $("#input_search").focus();
    }
});
$("#input_search").on('blur', function(){
    let search = $(".fb .header .search");
    if (search.hasClass('menorA100')) {
        search.removeClass('focusSearch');
        setTimeout(function(){
            $(".fb .header .logo").fadeIn("slow", "swing");
        }, 800);
    }
});

/* Detectar el click en el botón Share */
$("#btn_share").on('click', function(e){
    let content = $("#input-estatus").text();
    if (content !== '') {
        let publicaciones = $(".fb .cuerpo .center .publicaciones");
        let publicacion = 
        '<div class="publicacion shadow">'+
            '<div class="head2">'+
                    '<a href=""><img class="icon4" src="../../img/fb/perfil2.jpg" alt="Imagen de perfil"></a>'+
                    '<div class="datos">'+
                        '<p class="nombre">Bianka</p>'+
                        '<p class="last connection">now</p>'+
                    '</div>'+
                    '<i class="right-float" data-feather="more-horizontal"></i>'+
            '</div>'+
            '<div class="content">'+
                '<div class="texto" >'+
                        content+
                '</div>'+
            '</div>'+
            '<div class="footer">'+
                '<a href="">'+
                    '<img class="mini" src="https://img.icons8.com/pastel-glyph/64/000000/facebook-like.png">Like'+
                '</a>'+
                '<a href="">'+
                    '<img class="mini" src="https://img.icons8.com/small/32/000000/speech-bubble-with-dots.png">Comment'+
                '</a>'+
                '<a href="">'+
                    '<img class="mini" src="https://img.icons8.com/ios/50/000000/right2.png">Share'+
                '</a>'+
            '</div>'+
        '</div>';
        publicaciones.prepend(publicacion);
        $("#input-estatus").empty();
    }
});

/* Detectar el resizing de la pantalla*/
$(window).resize(function(){
    //aqui el codigo que se ejecutara cuando se redimencione la ventana
    var alto=$(window).height();
    var ancho=$(window).width();
    tamañoPantalla(alto, ancho);
});
/* Cambiar clases al input search, para poder distinguir entre varios tamaños de pantalla para diferentes cosas. */
function tamañoPantalla(alto, ancho){
    let search = $(".fb .header .search");
    if (ancho < 1000) {
        search.addClass('menorA100');
    }else{
        search.removeClass('menorA100');
    }
}