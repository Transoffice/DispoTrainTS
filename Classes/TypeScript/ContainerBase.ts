


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

    getcCidx() {

        return this.cCidx;   //wir bekommen hier die idx nummer
    }

    Paint(pcanvas) {
        pcanvas.fillStyle = this.cCcolor;
        pcanvas.fillRect(0, 0, this.cClength, this.cCheight);
        pcanvas.fillText (this.cCnumber, 100, 100); //0,0??
        pcanvas.fillStyle = this.cCnumberColor;
        pcanvas.font = '40pt Calibri';
        
      

    }

}

window.onload = () => {

    var ErsterContainer = document.getElementById('MainCanvas');

    container.Paint(MainCanvas.getContext('2d'));

    for (var i = 0; i < 3; i++) {

        var rectSize = 500;
        var yPos = (rectSize + 10) * i;

        // die For Schleife wiederholt den Anweisungsblock so oft wie in den Runden klammern angegeben ist
        var container = new Container(1, 'RTSB123456-7', '20box', 'black', 605.8, 259.1, 'white');

        var MainCanvas = <HTMLCanvasElement> document.createElement('1'+i); // neues Element + i wird estellt, damit keine Duplikate enstehen. 

        MainCanvas.appendChild(MainCanvas);


       



    }

    //function draw_ex03() {
    //    var canvas = document.getElementById('ex03');
    //    var ctx = canvas.getContext('2d');
    //    var width = canvas.width;
    //    var height = canvas.height;

    //    var rectSize = 40;
    //    for (var i = 0; i < 3; i++) {
    //        var yPos = (rectSize + 10) * i;

    //        for (var j = 0; j < 4; j++) {
    //            ctx.fillRect((rectSize + 10) * j, yPos, rectSize, rectSize);
    //        }
    //    }
    //}
            


};



