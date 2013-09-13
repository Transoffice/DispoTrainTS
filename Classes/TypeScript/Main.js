window.onload = function () {
    var MainCanvas = document.getElementById('MainCanvas');
    var tfbox;
    var base = new ContainerBase('', 'RTSB123456-7', '20box', '#2A3756', 605, 259);

    //tfbox = <HTMLCanvasElement> document.createElement('20box');
    //MainCanvas.appendChild(tfbox);
    //var findtfbox = <HTMLCanvasElement> document.getElementById('20box');
    //var can = findtfbox.getContext("2d");
    var container = new ContainerWizard(base.getIdx(), base.getCnumber(), base.getCname(), base.getCcolor(), base.getClength(), base.getCheight());
    container.Paint(MainCanvas.getContext('2d'));
};
//# sourceMappingURL=Main.js.map
