function setup() {
    createCanvas(832, 832)
    background(247, 230, 204)
    trianglesize=280
    triangleEnd=400
}

function draw() {
    fill(0)
    triangle(0, 0, 0, trianglesize, triangleEnd, trianglesize)
    triangle(832, 832, 832, 832-trianglesize, 832-triangleEnd, 832-trianglesize)
    quad(832-triangleEnd, 832-trianglesize, 550, 400, triangleEnd, trianglesize, width-550, height-400)
    line(0, 832,width-550, height-400)
    line(832, 0, 550, 400)

}
