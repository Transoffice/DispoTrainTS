


// Class
class ContainerBase {
    // Constructor

    cCidx: number;
    cCnumber: any;
    cCname: any;
    cCcolor: any;
    cClength: number;
    cCheight: number;
   


    constructor(pCidx, pCnumber, pCname, pCcolor, pClength, pCheight) {

        this.cCidx = pCidx;
        this.cCnumber = pCnumber;
        this.cCname = pCname;
        this.cCcolor = pCcolor;
        this.cClength = pClength;
        this.cCheight = pCheight;


    }

    Paint(pcanvas) {
        pcanvas.fillStyle = this.cCcolor;
        pcanvas.fillRect(0, 0, this.cClength, this.cCheight);
       // pcanvas.fillText(this.cCnumber, 10, 50); //Container nummer  ctx.fillText("Sample String", 10, 50); 



    }

}

window.onload = () => {
    var MainCanvas = <HTMLCanvasElement> document.getElementById('MainCanvas');
   // var tfbox;

    var container = new Container('', 'RTSB123456-7','20box', '#2A3756', 605, 259);
    container.Paint(MainCanvas.getContext('2d'));



};



