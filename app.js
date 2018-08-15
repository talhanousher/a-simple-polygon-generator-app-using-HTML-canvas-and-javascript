function onAddVertex() {
    var canvas = document.getElementById('canvas');
    // console.log(canvas.clientWidth);
    var vertex = document.getElementById('input').value;
    var canvas2D = canvas.getContext('2d');
    var vertexList = [];
    // var angle = 0;
    clearCanvas(canvas2D, canvas)

    for (var i = 0; i < vertex; i++) {
        vertexList.push({
            x: (100 + 50 * Math.cos(i * 2 * Math.PI / vertex)),
            y: (70 + 50 * Math.sin(i * 2 * Math.PI / vertex)),
        });
        // angle = angle + requiredAngle;
    }
    // vertexList.sort(function (a, b) { return a - b });
    console.log(vertexList);

    for (var i = 0; i < vertexList.length - 1; i++) {

        canvas2D.moveTo(vertexList[i].x, vertexList[i].y);
        canvas2D.lineTo(vertexList[i + 1].x, vertexList[i + 1].y);
        canvas2D.stroke();
    }

    canvas2D.moveTo(vertexList[0].x, vertexList[0].y);
    canvas2D.lineTo(vertexList[vertexList.length - 1].x, vertexList[vertexList.length - 1].y);
    canvas2D.stroke();
    document.getElementById('input').value = '';
}
function clearCanvas(context, canvas) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    var w = canvas.width;
    canvas.width = 1;
    canvas.width = w;
}