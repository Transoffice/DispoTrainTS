


// Class
class Container {
    // Constructor

    cCidx: number;
    cCnumber: any;
    cCname: any;
    cCcolor: any;
    cClength: number;
    cCheight: number;
    cCnumberColor: any; 
   


    constructor(pCidx, pCnumber, pCname, pCcolor, pClength, pCheight, pCnumberColor) {

        this.cCidx = pCidx;
        this.cCnumber = pCnumber;
        this.cCname = pCname;
        this.cCcolor = pCcolor;
        this.cClength = pClength;
        this.cCheight = pCheight;
        this.cCnumberColor = pCnumberColor;


    }

    Paint(pcanvas/*, context*/) {
        pcanvas.fillStyle = this.cCcolor;
        pcanvas.fillRect(0, 0, this.cClength, this.cCheight);
        pcanvas.fillText (this.cCnumber, 0, 0); //Container nummer  ctx.fillText("Sample String", 10, 50); 
        pcanvas.fillStyle = this.cCnumberColor;
        pcanvas.font = '40pt Calibri';
        pcanvas.fillText (this.cCnumber, 100, 100);
      


        //var context = MainCanvas.getContext('2d');
        //context.beginPath();
        //context.fillStyle = 'yellow';
        //context.fill();
        //context.lineWidth = 7;


    }

}

window.onload = () => {

    var MainCanvas = <HTMLCanvasElement> document.getElementById('MainCanvas');
   // var context = MainCanvas.getContext('2d');

  
    

    var container = new Container('', 'RTSB123456-7','20box', '#2A3756', 605, 259, 'white');
    container.Paint(MainCanvas.getContext('2d'));






};



