class Rotar extends Herramienta{

  constructor(){
    super();
  }

  arrastreMouse(arrastre, ctrl){

  }

  aumentar(ctrl, n = 0.5){
    var seleccionado = ctrl.getSeleccionado();
    if (seleccionado != undefined){
      seleccionado.rotar(0.1);
    }
  }

  disminuir(ctrl, n = -0.5){
    var seleccionado = ctrl.getSeleccionado();
    if (seleccionado != undefined){
      seleccionado.rotar(-0.1);
    }
  }


}
