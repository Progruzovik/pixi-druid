import { Shape } from "./Shape";

export class Trapeze extends Shape {

    constructor(
        private readonly topWidth: number = 0,
        private readonly bottomWidth: number = 0,
        height: number = 0,
        color: number = 0x000000
    ) {
        super(topWidth > bottomWidth ? topWidth : bottomWidth, height, color)
        this.redraw()
    }

    protected draw(): void {
        const polyWidth: number = this.topWidth > this.bottomWidth ?
            (this.topWidth - this.bottomWidth) / 2 : (this.bottomWidth - this.topWidth) / 2
        const polyYStart: number = this.topWidth > this.bottomWidth ? this.height : 0
        const polyYFinish: number = this.height - polyYStart

        this.graphics.beginFill(this.color)
        this.graphics.drawPolygon([
            new PIXI.Point(polyWidth, polyYStart),
            new PIXI.Point(polyWidth, polyYFinish),
            new PIXI.Point(0, polyYFinish)
        ])
        const rectangleWidth: number = this.width - polyWidth * 2
        this.graphics.drawRect(polyWidth, 0, rectangleWidth, this.height)
        this.graphics.drawPolygon([
            new PIXI.Point(polyWidth + rectangleWidth, polyYStart),
            new PIXI.Point(polyWidth + rectangleWidth, polyYFinish),
            new PIXI.Point(polyWidth + rectangleWidth + polyWidth, polyYFinish)
        ])
        this.graphics.endFill()
    }
}
