$(document).ready(function() {
    $("#tabs").tabs();
    
 
    $("#tabmyline").click(function(){
        $("#myline").empty();
        $.getJSON("myline.json").done(function(data) {
            Mensajes(data, "#myline")
        });
    });
    

    $.getJSON("timeline.json").done(function(data) {
          Mensajes(data, "#timeline");
    });
        
    
    $.getJSON("update.json").done(function(data) {
          $("<button>").html("Tienes mensajes nuevos: " + data.length).prependTo("#timeline").click(function(){
                Mensajes(data, "#timeline")
                $(this).hide();
            });
    });
    
    function masInformacion(user, place){
         $("<button>").html("Más informacion").appendTo(place).click(function(){
             $("<p>Contenido: " + user["contenido"] + "</p>").insertAfter(this);
             $("<p>Fecha: " + user["fecha"] + "</p>").insertAfter(this);
             $(this).hide();
         });
    }
    
    function Mensajes(data, place){
        $.each( data, function(x, user) {
             $("</div>").appendTo(place);
             $("<div id='title'>").appendTo(place);
             $("<img>").attr("src", user["avatar"]).appendTo(place); 
             $("<p>").text("Autor: " + user["autor"]).appendTo(place);
             $("<p>").text("Titulo: " + user["titulo"]).appendTo(place);
             masInformacion(user, place);  
          });
    }


});
