class ElementoGrafico{

  constructor(sprite, controlador){
      this.sprite = sprite;
      this.ctrl = controlador;
      this.seleccionado = false;
      this.marco = undefined;
      this.setup();
      this.ctrl.addToStage(this.sprite);
  }

  setup(){
    this.sprite.interactive = true;
    this.sprite.pivot.set(this.sprite.width/2 , this.sprite.height/2);
    this.sprite.position.x = this.ctrl.renderer.width / 2;
    this.sprite.position.y = this.ctrl.renderer.height / 2;
    this.sprite.visible = true;
    this.marcar();
    this.ctrl.updateRender();
    this.ctrl.renderizar();
  /*  this.sprite.on("mouseupoutside", function(){
      var destino_x = window.event.clientX;
      var destino_y = window.event.clientY;
      this.moveElementTo(destino_x, destino_y);
    });*/
  }

  //retorna true si fue clickeado
  ping(x, y){
    var lim_inf_x = this.sprite.position.x - (this.sprite.width / 2);
    var lim_sup_x = this.sprite.position.x + (this.sprite.width / 2);
    var lim_inf_y = this.sprite.position.y - (this.sprite.height / 2) ;
    var lim_sup_y = this.sprite.position.y + (this.sprite.height/2 ) ;

    var flag = false;

    if (lim_inf_x <= x && (parseInt(lim_inf_x) + parseInt(this.sprite.width)) >= x &&
     lim_inf_y <= y && (parseInt(lim_inf_y) + parseInt(this.sprite.height)) >= y){
      flag = true;
    }

    return flag;
  }

  //events
  click(){
    this.marcar();
  }

  moverElementoA(x, y){
    this.sprite.position.x = x;
    this.sprite.position.y = y - (this.sprite.height/2);
    this.marco.position.x = x;
    this.marco.position.y = y - (this.marco.height/2);
    this.marcar();
  }


  esSeleccionado(){
    if (this.seleccionado) return true;
    return false;
  }

  agrandar(escala = 20){
    this.sprite.width += escala;
    this.sprite.height += escala;
    this.marco.width += escala;
    this.marco.height += escala;
    this.marcar();
  }

  achicar(escala = 20){

    this.sprite.width -= escala;
    this.sprite.height -= escala;
    this.marco.width -= escala;
    this.marco.height -= escala;
    this.marcar();
  }

  rotar(n){
    this.desmarcar();
    this.sprite.rotation += n;
    this.marco.rotation += n;
    this.marcar();
  }

  desmarcar(){
    this.marco.visible = false;
    this.seleccionado = false;
    this.ctrl.updateRender();
  }

  marcar(){
    if (this.marco == undefined){
      this.crearMarco();
    }
    this.marco.visible = true;
    this.seleccionado = true;
    this.ctrl.updateRender();
  }

  crearMarco(){
    this.marco = new PIXI.Graphics();
    var width = this.sprite.width;
    var height = this.sprite.height;
    var origen_x = this.sprite.position.x - (width / 2);
    var origen_y = this.sprite.position.y - (width / 2);
    console.log("origen x:" + origen_x);
    console.log("origen y:" + origen_y);
    console.log("width:" + width);
    console.log("height:" + height);
    console.log("----------------");

    this.marco.lineStyle(0.5, 0xFF0000);
    this.marco.moveTo(origen_x, origen_y);
    this.marco.lineTo(origen_x, origen_y + height);
    this.marco.lineTo(origen_x + width, origen_y + height);
    this.marco.lineTo(origen_x + width, origen_y);
    this.marco.lineTo(origen_x, origen_y);
    this.marco.endFill();
    //lo convertimos en un sprite
    var texture = this.marco.generateTexture();
    this.marco = new PIXI.Sprite(texture);
    this.marco.pivot.set(width / 2 , height / 2);
    this.marco.position.x = origen_x + width / 2;
    this.marco.position.y = origen_y + height / 2;
    this.ctrl.addToStage(this.marco);
  }

}
