var press = false;
var eventoArrastre;

document.getElementById("btn-escalar").addEventListener("click",function(){
  controlador.escalar();
  setClassHerramientaActiva(document.getElementById("btn-escalar"));
});

document.getElementById("btn-rotar").addEventListener("click",function(){
  controlador.rotar();
  setClassHerramientaActiva(document.getElementById("btn-rotar"));
});

document.getElementById("btn-mover").addEventListener("click",function(){
  controlador.mover();
  setClassHerramientaActiva(document.getElementById("btn-mover"));
});

document.getElementById("btn-aumentar").addEventListener("click",function(){
  controlador.aumentar();
});

document.getElementById("btn-disminuir").addEventListener("click",function(){
  controlador.disminuir();
});




//var graphics = new PIXI.Graphics();

var controlador = new Controlador();

document.getElementById("div-pixi").appendChild(controlador.getRendererView());

PIXI.loader
  .add("images/cat.png")
  .add("images/blob.png")
  .load(setup);

//controlador.setup();

  function cargarImagen(img){
    controlador.addSprite(img);
    controlador.renderizar();
  }

  function setup(){
    controlador.agregarSprite("images/cat.png");
    controlador.agregarSprite("images/blob.png");
    controlador.renderizar();
  }

document.getElementById("div-pixi").addEventListener('click', function(e){
  var mouse_x = e.pageX;
  var mouse_y = e.pageY;

  controlador.click(mouse_x, mouse_y);
});


document.addEventListener('mousedown',function(e){
  eventoArrastre = new Arrastre(e.clientX, e.clientY);
  press = true;
});

document.addEventListener('mouseup', function(e){

  eventoArrastre.destino_x = e.clientX;
  eventoArrastre.destino_y = e.clientY;
  if (press && validarArrastre(eventoArrastre)){
    controlador.arrastreMouse(eventoArrastre);
  }

});


function validarArrastre(arrastre){
  if (arrastre.origen_x != arrastre.destino_x) return true;
  if (arrastre.origen_y != arrastre.destino_y) return true;
  return false;
}


function setClassHerramientaActiva(btn){
  $('.btn').map(function(){
  				$(this).removeClass('btn-info');
          $(this).removeClass('btn-default');
          $(this).addClass('btn-default');
  });
  $(btn).removeClass("btn-default");
  $(btn).addClass("btn-info");

}



function agregarImagenAlContenedor(url, result){
  var contenedor = document.getElementById("contenedor-imagenes");
  var divImagen = document.createElement('div');
  divImagen.id = result;
  divImagen.className = "filaContenedorImagen";
  divImagen.draggable = true;
  //divImagen.ondragstart = drag();
  var text = document.createTextNode(url);
  divImagen.appendChild(text);
  contenedor.appendChild(divImagen);
}

$("body").on("dragstart", ".filaContenedorImagen",function(){
      drag(event);
});

function drag(ev) {
    ev.dataTransfer.setData("url", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev){
  ev.preventDefault();
  var result = ev.dataTransfer.getData('url');
  var img = new Image();
  img.src = result;
  /*img.onload = function(){
    alert(img.width + " - " + img.height);
  }*/
  cargarImagen(img);
}
