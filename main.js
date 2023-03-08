var tootsierollix=0
var tootsierolliy=0
    function preload() {
      timeset=loadImage('https://i.postimg.cc/qMyS3ssH/pan-tostadito-2.png')
    }
    
    function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
camara=createCapture(VIDEO);
  camara.size(300,300);
  camara.hide();
  poseNet=ml5.poseNet(camara,modelolisto)
poseNet.on('pose',Tpose);

    }

    function draw() {
    image(camara,0,0,300,300);
image(timeset,tootsierollix,tootsierolliy,100,100);
    }
    function modelolisto() {
        console.log('PoseNet Is Initialized');
      }
      function Tpose(resultados) {
        if (resultados.length>0) {
          console.log(resultados);
tootsierollix=resultados[0].pose.nose.x-60;
tootsierolliy=resultados[0].pose.nose.y-60;


          console.log("c:");
        }
      }
