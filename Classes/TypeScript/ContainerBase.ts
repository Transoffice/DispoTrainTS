


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

    Paint(pcanvas) {
        pcanvas.fillStyle = this.cCcolor;
        pcanvas.fillRect(0, 0, this.cClength, this.cCheight);
        pcanvas.fillText (this.cCnumber, 0, 0); 
        pcanvas.fillStyle = this.cCnumberColor;
        pcanvas.font = '40pt Calibri';
        pcanvas.fillText (this.cCnumber, 100, 100);
      




    }

}

window.onload = () => {

    var ErsterContainer = <HTMLCanvasElement> document.getElementById('ErsterContainer');
    var ZweiterContainer = <HTMLCanvasElement> document.getElementById('ZweiterContainer');
    var Canvas1 = <HTMLCanvasElement> document.getElementById('Canvas1');
    var Canvas2 = <HTMLCanvasElement> document.getElementById('Canvas2');
    var Canvas3 = <HTMLCanvasElement> document.getElementById('Canvas3');
    var Canvas4= <HTMLCanvasElement> document.getElementById('Canvas4');

    
  
    

    var container = new Container('', 'RTSB123456-7','20box', 'black', 605, 259, 'white');
    container.Paint(ErsterContainer.getContext('2d'));

    var container = new Container('', 'RTSB123456-8', '20box', 'blue', 605, 259, 'white');
    container.Paint(ZweiterContainer.getContext('2d'));

    var container = new Container('', 'RTSB123456-9', '20box', 'blue', 605, 259, 'white');
    container.Paint(Canvas1.getContext('2d'));

    var container = new Container('', 'RTSB123456-1', '20box', 'blue', 605, 259, 'white');
    container.Paint(Canvas2.getContext('2d'));

    var container = new Container('', 'RTSB123456-2', '20box', 'blue', 605, 259, 'white');
    container.Paint(Canvas3.getContext('2d'));

    var container = new Container('', 'RTSB123456-3', '20box', 'blue', 605, 259, 'white');
    container.Paint(Canvas4.getContext('2d'));

  






};



