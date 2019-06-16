const {ccclass, property, executeInEditMode, requireComponent} = cc._decorator;

@ccclass
@requireComponent(cc.Graphics)
@executeInEditMode
export default class DrawGrid extends cc.Component {

    @property({min: 1})
    vSize = 10
    @property({min: 1})
    hSize = 10

    private g: cc.Graphics = null;

    onLoad(): void  {
        this.g = this.getComponent(cc.Graphics);
        this.g.lineCap = cc.Graphics.LineCap.SQUARE;
    }

    update(dt: number): void {
        this.g.clear();
        const vSz = Math.max(this.vSize, 1);
        const hSz = Math.max(this.hSize, 1);
        for (let i = 0; i <= Math.floor(this.node.height / vSz); i++) {
            const y = -this.node.height * .5 + vSz * i;
            this.g.moveTo(-this.node.width * .5, y);
            this.g.lineTo(this.node.width * .5, y);
        }
        for (let i = 0; i <= Math.floor(this.node.width / hSz); i++) {
            const x = -this.node.width * .5 + hSz * i;
            this.g.moveTo(x, -this.node.height * .5);
            this.g.lineTo(x, this.node.height * .5);
        }
        this.g.stroke();
    }
}
