class Controlador{
  constructor(){
    this.stage = new PIXI.Container();
    this.renderer = PIXI.autoDetectRenderer(512, 512);
    this.elementos = [];
    this.herramienta = new Mover();
  }

  getRendererView(){
    return this.renderer.view;
  }

  addToStage(sprite){
    this.stage.addChild(sprite);
  }

  removeToStage(sprite){
    this.stage.removeChild(sprite);
  }

  updateRender(){
    this.renderer.render(this.stage);
  }

  addSprite(img){
    var base = new PIXI.BaseTexture(img);
    var texture = new PIXI.Texture(base);
    var sprite = new PIXI.Sprite(texture);
    sprite.width = 50;
    sprite.height = 50;
    var elem = new ElementoGrafico(sprite, this);
    this.elementos.push(elem);
    //this.addToStage(elem.sprite);
  }

  agregarSprite(recurso){
    var sprite = new PIXI.Sprite(PIXI.loader.resources[recurso].texture);
    var elem = new ElementoGrafico(sprite, this);
    this.elementos.push(elem);
    //this.addToStage(elem.sprite);
  }

  renderizar(elem = this.stage){
    this.renderer.render(elem);
  }

  //Herramientas
  escalar(){
    this.herramienta = new Escalar();
  }

  mover(){
    this.herramienta = new Mover();
  }

  rotar(){
    this.herramienta = new Rotar();
  }

  aumentar(){
    this.herramienta.aumentar(this);
  }

  disminuir(){
    this.herramienta.disminuir(this);
  }

  //Cuando se deteca un click
  click(mouse_x, mouse_y){
    this.herramienta.click(mouse_x, mouse_y, this);
  }

  getSeleccionado(){
    var sel = undefined;
    for (var i = 0; i < this.elementos.length; i++) {
      if (this.elementos[i].esSeleccionado()){
        return this.elementos[i];
      }
    }
  }

  getElementoClickeado(x, y){
    var elem = undefined;
    for (var i = 0; i < this.elementos.length; i++) {
      if (this.elementos[i].ping(x, y)){
        return this.elementos[i];
      }
    }
    return elem;
  }


  arrastreMouse(arrastre){
    this.herramienta.arrastreMouse(arrastre, this);
  }


}
