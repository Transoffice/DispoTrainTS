// Class
var ContainerWizard = (function () {
    function ContainerWizard(pCidx, pCnumber, pCname, pCcolor, pClength, pCheight) {
        this.cCidx = pCidx;
        this.cCnumber = pCnumber;
        this.cCname = pCname;
        this.cCcolor = pCcolor;
        this.cClength = pClength;
        this.cCheight = pCheight;
    }
    ContainerWizard.prototype.Paint = function (pcanvas) {
        pcanvas.fillStyle = this.cCcolor;
        pcanvas.fillRect(0, 0, this.cClength, this.cCheight);
        pcanvas.fillText(this.cCnumber, 10, 50);
        //pcanvas.fillStype = this.cCnumberStyle;
    };
    return ContainerWizard;
})();

window.onload = function () {
    var MainCanvas = document.getElementById('MainCanvas');
    var tfbox;
    var base = new ContainerBase('', 'RTSB123456-7', '20box', '#2A3756', 605, 259);

    //tfbox = <HTMLCanvasElement> document.createElement('20box');
    //MainCanvas.appendChild(tfbox);
    //var findtfbox = <HTMLCanvasElement> document.getElementById('20box');
    //var can = findtfbox.getContext("2d");
    var container = new ContainerWizard(base.getIdx(), base.getCnumber(), base.getCname(), base.getCcolor(), base.getClength(), base.getCheight());
    container.Paint(MainCanvas.getContext('2d'));
    //function showFillText() {
    //    c6_context.fillStyle = '#f00';
    //    c6_context.font = 'italic bold 30px sans-serif';
    //    c6_context.textBaseline = 'bottom';
    //    c6_context.fillText('HTML5 is cool!', 50, 100);
    //}
};
//# sourceMappingURL=ContainerWizard.js.map
