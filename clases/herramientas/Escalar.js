class Escalar extends Herramienta{

  constructor(){
    super();
  }

  arrastreMouse(arrastre, ctrl){
  }

  aumentar(ctrl, n = 20){
    var seleccionado = ctrl.getSeleccionado();
    if (seleccionado != undefined){
      seleccionado.agrandar(n);
    }
  }

  disminuir(ctrl, n = 20){
    var seleccionado = ctrl.getSeleccionado();
    if (seleccionado != undefined){
      seleccionado.achicar(n);
    }
  }


}
