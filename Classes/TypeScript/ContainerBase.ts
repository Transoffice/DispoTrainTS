


// Class
 class Container   {
    // Constructor

    element: HTMLElement;
    span: HTMLElement;
 


        constructor(element: HTMLElement, pheigth, plength, pwidth)
        {
            var height = pheigth;
            var length = plength;
            var width = pwidth;


            this.element = element;
            this.span = <HTMLElement>document.createElement("span");
            
            this.element.appendChild(this.span);
           
            var canvas = <HTMLCanvasElement>document.getElementById("20box");
            var c2: CanvasRenderingContext2D  = canvas.getContext("2d");


            c2.fillStyle = '#000';
            c2.beginPath();
            c2.moveTo(0, 0);
            c2.lineTo(100, 50);
            c2.lineTo(50, 100);
            c2.lineTo(0, 90);
            c2.closePath();
            c2.fill();


            this.element.innerHTML += Math.sqrt(height * length * width).toString();

        }

      
    }

window.onload = () => {
    var el = document.getElementById('ContainerBase');
    var container = new Container(el, 6058, 2438, 2591);

};

