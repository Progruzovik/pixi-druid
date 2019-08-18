import { Branch } from "./";
import * as PIXI from "pixi.js";

export class App extends PIXI.utils.EventEmitter {

    private _root: Branch;
    private readonly application: PIXI.Application;

    constructor(resolution: number, private width: number, private height: number,
                backgroundColor: number = 0x000000, canvas?: HTMLCanvasElement) {
        super();
        this.application = new PIXI.Application({ autoDensity: true, backgroundColor: backgroundColor,
            view: canvas, resolution: resolution, sharedLoader: true, sharedTicker: true });
        this.resize(width, height);
    }

    get root(): Branch {
        return this._root;
    }

    set root(value: Branch) {
        if (this.root) {
            this.application.stage.removeChild(this.root);
        }
        this._root = value;
        if (value) {
            value.resize(this.width, this.height);
            this.application.stage.addChild(value);
        }
    }

    get view(): HTMLCanvasElement {
        return this.application.view;
    }

    resize(width: number, height: number): void {
        if (width > 0 && height > 0) {
            this.width = width;
            this.height = height;
            this.application.renderer.resize(width, height);
            if (this.root) {
                this.root.resize(width, height);
            }
        }
    }

    destroy(): void {
        PIXI.loader.reset();
        if (this.root) {
            this.root.destroy({ children: true });
        }
        this.application.destroy();
    }
}
