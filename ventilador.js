class ventilador {
    constructor(x, y, largura, altura) {
        var ground_options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x, y, largura, altura, ground_options);
        this.largura = largura;
        this.altura = altura;

        World.add(world, this.body);
    }

    rotacao() {
    
        Matter.Body.rotate(this.body, angle)
        push();//contruir
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rect(0, 0, this.largura, this.altura);
        pop();//destruindo

        angle += 0.1;
    }

}