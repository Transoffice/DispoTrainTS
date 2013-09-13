


// Class
class Container {
    // Constructor

    cCidx: number; //Der zugriff sollte auf idx erstellt werden - das machen wir mit einer neuen Methode getIdx
    cCnumber: any; // wurde auf any gesetzt, weil wir einen String reinschreiben
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

    Paint(pcanvas, top, left, zoomfactor) {
        pcanvas.fillStyle = this.cCcolor;
        pcanvas.fillRect(left, top, this.cClength*zoomfactor, this.cCheight*zoomfactor);
        pcanvas.fillStyle = this.cCnumberColor;
        var fontsize: number;
        fontsize = 600 * zoomfactor;
        pcanvas.font = fontsize.toString()+'pt Verdana'; 
        pcanvas.fillText(this.cCnumber, left+70*zoomfactor, top+1000*zoomfactor); //0,0??
              
    }
}

window.onload = () => {
    var MainCanvas = <HTMLCanvasElement> document.getElementById('MainCanvas'); //createElement
    var MainContext = MainCanvas.getContext('2d');
    var cNumberTextColor = 'white';
    var cCcolor = 'black';
    MainCanvas.width = screen.availWidth;
    MainCanvas.height = screen.availHeight;

    var trainlength = 600 * 1000;
    var zoomfactor = MainCanvas.width / trainlength;
    if (zoomfactor < 0.01) {
        zoomfactor = 0.01;
    }

  

    var Containerlist= new Array();
    var container = new Container('', 'RTSB123456-7', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container);
    var container1 = new Container('', 'RTSB123456-8', '20box',cCcolor,6058, 2591, cNumberTextColor);
    Containerlist.push(container1);
    var container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    var container3 = new Container('', 'RTSB123456-2', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container3);
    var container4 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container4);
    var container5 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container5);
    var container6 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container6);
    var container7 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container7);
    var container8 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container8);
    var container9 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container9);
    var container10 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container10);
    var container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    var container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    var container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-1', '40box', cCcolor, 12192, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-8', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-2', '40box', cCcolor, 12192, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-7', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);
    container2 = new Container('', 'RTSB123456-9', '20box', cCcolor, 6058, 2591, cNumberTextColor);
    Containerlist.push(container2);

    var Top = 10;
    var Left = 0;
    var Space = 10;
    
    

    for (var n = 0; n <= Containerlist.length; n++) {

        var ct = <Container> Containerlist[n];
        if (Left > MainCanvas.width - ct.cClength * zoomfactor) {
            Top = Top + 50;
            Left = 0;
        };
        ct.Paint(MainContext, Top, Left, zoomfactor);
        Left = Left + container.cClength * zoomfactor + Space;
        //alert(Left.toString() + '   ' + MainCanvas.width.toString()+ '    ');
       
    }
};








