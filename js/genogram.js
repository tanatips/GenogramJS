var svgns = "http://www.w3.org/2000/svg"
class genogramSymbol {
    constructor(){
    }
     
        Male (idName,x,y){
            var obj = document.createElementNS(svgns, 'rect');
            obj.setAttributeNS(null, 'x', x);
            obj.setAttributeNS(null, 'y', y);
            obj.setAttributeNS(null, 'height', '50');
            obj.setAttributeNS(null, 'width', '50');
            obj.setAttributeNS(null, 'stroke-width', '2');
            obj.setAttributeNS(null, 'fill', '#FFFFFF');
            obj.setAttributeNS(null, 'stroke','rgb(0,0,0)');
            obj.setAttributeNS(null, 'id', idName);
            document.getElementById('svgOne').appendChild(obj);
            obj.addEventListener("click",function(){    
            });
            obj.addEventListener("mouseout",function(){
            });
        }
        Female (idName,x,y){
            var obj = document.createElementNS(svgns, 'circle');
            obj.setAttributeNS(null, 'cx', x+x/2);
            obj.setAttributeNS(null, 'cy', y+y/2);
            obj.setAttributeNS(null, 'r', 25);
            obj.setAttributeNS(null, 'stroke-width', '2');
            obj.setAttributeNS(null, 'fill', '#FFFFFF');
            obj.setAttributeNS(null, 'stroke','rgb(0,0,0)');
            obj.setAttributeNS(null, 'id', idName);
            document.getElementById('svgOne').appendChild(obj);
            
            obj.addEventListener("click",function(){    
            });
            obj.addEventListener("mouseout",function(){
            });
        }
        Pregnancy (idName,x,y){
            var obj = document.createElementNS(svgns, 'polygon');
            var width = 50;
            var height = 50;
            obj.setAttributeNS(null, 'cx', x);
            obj.setAttributeNS(null, 'cy', y);
           // obj.setAttributeNS(null, 'points', (75+(x/2))+","+(50+y/2)+" "+(50+x/2)+","+(100+y/2)+" "+(100+x/2)+","+(100+y/2));
            obj.setAttributeNS(null, 'points',  x+","+(y+height)+" "+(x+width/2)+","+(y)+" "+(x+width)+","+(y+height));
            obj.setAttributeNS(null, 'fill','#FFFFFF');
            obj.setAttributeNS(null, 'stroke','#000000');
            obj.setAttributeNS(null, 'stroke-width',2);
            obj.setAttributeNS(null, 'id', idName);
            document.getElementById('svgOne').appendChild(obj);
            
            obj.addEventListener("click",function(){    
            });
            obj.addEventListener("mouseout",function(){
            });
        }
}
myGenogram = new genogramSymbol();
myGenogram.Male("myId",50,50);
myGenogram.Female("myId2",100,50);
myGenogram.Pregnancy("myId3",150,50);

