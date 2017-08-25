class Herramienta{

  constructor(){

  }

  arrastreMouse(arrastre, ctrl){}

  click(mouse_x, mouse_y, ctrl){

    for (var i = 0; i < ctrl.elementos.length; i++) {
      ctrl.elementos[i].desmarcar();
      if (ctrl.elementos[i].ping(mouse_x, mouse_y)){
        ctrl.elementos[i].click();
      }
    }
  }

  aumentar(ctrl, n=0){}
  disminuir(ctrl, n=0){}

}
