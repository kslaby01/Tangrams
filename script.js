window.onload = function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
    });
    var layer = new Konva.Layer();
    var startX = stage.getWidth() / 2 - 50;
    var startY = stage.getHeight() / 2 - 25;


    var box = new Konva.Rect({
        x: startX,
        y: startY,
        width: 100,
        height: 50,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
    });

    var rhombus = new Konva.Line({
      points: [0, 100, 100, 0, 300, 0, 200, 100],
      x: startX*1.5,
      y: startY/4,
      fill: '#4A84E7',
      stroke: 'black',
      strokeWidth: 4,
      closed : true,
      draggable: true,
    });

    var big_orange_triangle = new Konva.Line({
      points: [100, 100, 300, 100, 200, 0, 0, 0],
      x: startX*.69,
      y: startY*.66,
      fill: '#FF9900',
      stroke: 'black',
      strokeWidth: 4,
      closed : true,
      draggable: true,
    });

    var big_green_triangle = new Konva.Line({
      points: [100, 100, 300, 100, 200, 0, 0, 0],
      x: startX*1.46,
      y: startY*1.3,
      fill: '#269B7E',
      stroke: 'black',
      strokeWidth: 4,
      closed : true,
      draggable: true,
    });


    var square = new Konva.Line({
      points: [100, 0, 200, 100, 100, 200, 0, 100],
      x: startX/1.2,
      y: startY*1.3,
      fill: '#F7EF20',
      stroke: 'black',
      strokeWidth: 4,
      closed : true,
      draggable: true,
    });

    var small_purple_triangle = new Konva.Line({
      points: [100, 100, 300, 100, 200, 0, 0, 0],
      x: startX/4,
      y: startY/4,
      fill: '#7E36EF',
      stroke: 'black',
      strokeWidth: 4,
      closed : true,
      draggable: true,
    });


    var small_pink_triangle = new Konva.Line({
      points: [100, 100, 300, 100, 200, 0, 0, 0],
      x: startX/4,
      y: startY,
      fill: '#EA5CCF',
      stroke: 'black',
      strokeWidth: 4,
      closed : true,
      draggable: true,
    });


    var medium_red_triangle = new Konva.Line({
      points: [100, 100, 300, 100, 200, 0, 0, 0],
      x: startX/.8,
      y: startY*.8,
      fill: '#F83249',
      stroke: 'black',
      strokeWidth: 4,
      closed : true,
      draggable: true,
    });

document.getElementById('square').onclick = function() { 
    console.log('square');
    rhombus.points();
    big_orange_triangle.points();
    big_green_triangle.points();
    square.points();
    small_purple_triangle.points();
    small_pink_triangle.points();
    medium_red_triangle.points();
    layer.draw();
};

document.getElementById('swan').onclick = function() { 
    console.log('swan');
    rhombus.points();
    big_orange_triangle.points();
    big_green_triangle.points();
    square.points();
    small_purple_triangle.points();
    small_pink_triangle.points();
    medium_red_triangle.points();
    layer.draw();
};

document.getElementById('fish').onclick = function() { 
    console.log('fish');
    rhombus.points();
    big_orange_triangle.points();
    big_green_triangle.points();
    square.points();
    small_purple_triangle.points();
    small_pink_triangle.points();
    medium_red_triangle.points();
    layer.draw();
};


    //layer.add(box);
    layer.add(rhombus);
    layer.add(big_orange_triangle);
    layer.add(big_green_triangle);
    layer.add(square);
    layer.add(small_pink_triangle);
    layer.add(small_purple_triangle);
    layer.add(medium_red_triangle);
    stage.add(layer);
    layer.draw();
};