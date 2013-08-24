


// Class
 class Container   {
     // Constructor

     clength: number;
     cheight: number;
     cColorRal: any;

        constructor(plength, pheight, pColorRal)
        {

            this.clength = plength;  
            this.cheight = pheight;
            this.cColorRal = pColorRal;

        }

     Paint( pcanvas) {
         pcanvas.fillStyle = this.cColorRal;
         pcanvas.fillRect(0, 0, this.clength, this.cheight);
     }
      
    }

window.onload = () => {
    var MainCanvas = <HTMLCanvasElement> document.getElementById('MainCanvas');
    var tfbox;
    //tfbox = <HTMLCanvasElement> document.createElement('20box'); 
    //MainCanvas.appendChild(tfbox);
    //var findtfbox = <HTMLCanvasElement> document.getElementById('20box');
    //var can = findtfbox.getContext("2d");
    var container = new Container(605, 259, '#2A3756');
    container.Paint(MainCanvas.getContext ('2d'));

   



};



