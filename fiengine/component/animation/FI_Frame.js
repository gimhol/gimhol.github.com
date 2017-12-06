import FI_Component from '../FI_Component'

export default class FI_Frame extends FI_Component{
  constructor(){
    super()
  }
  init(image,duration,texRect){
    this.setDuration(duration)
    this.setImage(image)
    this.setTexRect(texRect)
    this.image && this.image.setNode(this.getNode())
  }
  setImage(image){ this.image = image }
  setDuration(duration){this.duration = duration}
  getDuration(){return this.duration }
  setTexRect(texRect){ this.texRect = texRect }
  onMount(){
    this.image && this.image.setNode(this.getNode())
  }
  update(dt){

  }
  draw(ctx){
    if(this.image){
      this.texRect && this.image.setTexRect(
        this.texRect.x,
        this.texRect.y,
        this.texRect.width,
        this.texRect.height,
      )
      this.image.draw(ctx)
    }
  }
}
