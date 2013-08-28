


// Class
class ContainerBase {
    // Constructor

    cCidx: number;
    cCnumber: any;
    cCname: any;
    cClength: number;
    cCheight: number;
    cCcolor: any;


    constructor(pCidx, pCNumber, pCName, pCColor, pCLength, pCHeight) {

        this.cCidx = pCidx;
        this.cCnumber = pCNumber;
        this.cCname = pCName;
        this.cCcolor = pCColor;
        this.cClength = pCLength;
        this.cCheight = pCHeight;
     


    }
    // getID, getNumber

    getIdx() {
        return this.cCidx;
    }

    getCnumber() {
        return this.cCnumber;
    }

    getCname() {
        return this.cCname;

    }

    getCcolor() {
        return this.cCcolor;
    }

    getClength() {
        return this.cClength;
    }

    getCheight() {
        return this.cCheight;
    }



}



//window.onload = () => {
//    var MainCanvas = <HTMLCanvasElement> document.getElementById('MainCanvas');
//    var tfbox;
//    //tfbox = <HTMLCanvasElement> document.createElement('20box'); 
//    //MainCanvas.appendChild(tfbox);
//    //var findtfbox = <HTMLCanvasElement> document.getElementById('20box');
//    //var can = findtfbox.getContext("2d");
//    var container = new Container(605, 259, '#2A3756');
//    container.Paint(MainCanvas.getContext('2d'));





//};



