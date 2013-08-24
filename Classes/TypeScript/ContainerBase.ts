


// Class
 class Container   {
    // Constructor

    element: HTMLElement;
    span: HTMLElement;
 


        constructor(element: HTMLElement)
        {

            

        }

     Paint(plength, pwidth, pheight, pBoxId, pColorRal) {

        var canvas = <HTMLCanvasElement> document.getElementById(pBoxId);

         var can = canvas.getContext("2d");

         can.fillStyle = pColorRal;
        can.fillRect(0, 0, plength,pheight);
     }

      
    }

window.onload = () => {
    var el = document.getElementById('First');
    var container = new Container(el);
    container.Paint(605.8, 0, 259.1, '20box', '#2A3756');

    var el2 = document.getElementById('Second');
    var container2 = new Container(el2);
    container2.Paint(1219.2, 0, 259.1, '40box', '#64312a');

};

