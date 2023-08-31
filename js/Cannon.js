
//Passo 1: Criar uma classe Cannon
// Essa classe tem as propriedades 'x, y, width, height, angle'
//??

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.cannon_image, 0, 0, this.width, this.height);
    pop();
    image(this.cannon_base,70, 20, 200, 200);
    noFill();
  }
}
