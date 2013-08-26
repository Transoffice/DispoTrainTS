


// Class
class ContainerWizard

{
    // Constructor
    
    cCidx: number;
    cCNumber: any;
    cCName: any;
    cCLength: number;
    cCheight: number;
    cCColor: any;
  

    constructor(pCidx, pCNumber, pCName, pCLength, pCHeight, pCColor) {

        this.cCidx = pCidx;
        this.cCNumber = pCNumber;
        this.cCName = pCName;
        this.cCName = 


    }

    Paint(pcanvas) {
        pcanvas.fillStyle = this.cColorRal;
        pcanvas.fillRect(0, 0, this.clength, this.cheight);
        pcanvas.fillText(this.cnumber, 10, 50); //Container nummer  ctx.fillText("Sample String", 10, 50); 
        pcanvas.fillStype = this.cnumberStyle;

        //function showFillText() {
        //    c6_context.fillStyle = '#f00';
        //    c6_context.font = 'italic bold 30px sans-serif';
        //    c6_context.textBaseline = 'bottom';
        //    c6_context.fillText('HTML5 is cool!', 50, 100);
        //}



    }

}

window.onload = () => {
    var MainCanvas = <HTMLCanvasElement> document.getElementById('MainCanvas');
    var tfbox;
    //tfbox = <HTMLCanvasElement> document.createElement('20box'); 
    //MainCanvas.appendChild(tfbox);
    //var findtfbox = <HTMLCanvasElement> document.getElementById('20box');
    //var can = findtfbox.getContext("2d");
    var container = new Container(605, 259, '#2A3756', 'RTSB123456-7', '#f00');
    container.Paint(MainCanvas.getContext('2d'));





};



