import * as PIXI from "pixi.js";

export const CENTER = 0.5;
export const INDENT = 20;

export namespace Event {

    export const ADDED = "added";
    export const REMOVED = "removed";

    export const BUTTON_CLICK = "buttonClick";
    export const CLICK = "click";

    export const MOUSE_OVER = "mouseover";
    export const MOUSE_DOWN = "mousedown";
    export const MOUSE_MOVE = "mousemove";
    export const MOUSE_UP = "mouseup";
    export const MOUSE_OUT = "mouseout";

    export const TOUCH_START = "touchstart";
    export const TOUCH_END = "touchend";

    export const DONE = "done";
}

export const enum BarTextConfig {
    Default, Custom
}

export interface Resizable {
    setUpChildren(width: number, height: number);
}

export abstract class AbstractBranch extends PIXI.Container implements Resizable {
    abstract setUpChildren(width: number, height: number);
}

export class Point {
    constructor(readonly x: number, readonly y: number) {}
}
