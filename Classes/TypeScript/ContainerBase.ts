


// Class
 class Container   {
     // Constructor

     clength: number;
     cheight: number;
     cColorRal: any;
     cnumber: any;
     cnumberStyle: any;

        constructor(plength, pheight, pColorRal, pnumber, pnumberStyle)
        {

            this.clength = plength;  
            this.cheight = pheight;
            this.cColorRal = pColorRal;
            this.cnumber = pnumber;
            this.cnumberStyle = pnumberStyle;

        }

     Paint(pcanvas) {
         pcanvas.fillStyle = this.cColorRal;
         pcanvas.fillRect(0, 0, this.clength, this.cheight);
         pcanvas.fillText(this.cnumber,10,50); //Container nummer  ctx.fillText("Sample String", 10, 50); 
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
    container.Paint(MainCanvas.getContext ('2d'));

   



};



