class Mover extends Herramienta{

  constructor(){
    super();
  }

  arrastreMouse(arrastre, ctrl){
      var elem = ctrl.getElementoClickeado(arrastre.origen_x, arrastre.origen_y);
      if (elem != undefined){
        elem.moverElementoA(arrastre.destino_x, arrastre.destino_y);
      }
  }


}
