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
            var radios = 25;
            var obj = document.createElementNS(svgns, 'circle');
            obj.setAttributeNS(null, 'cx', x+radios);
            obj.setAttributeNS(null, 'cy', y+radios);
            obj.setAttributeNS(null, 'r', radios);
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
        Pet (idName,x,y){
            var obj = document.createElementNS(svgns, 'polygon');
            var width = 50;
            var height = 50;
            obj.setAttributeNS(null, 'cx', x);
            obj.setAttributeNS(null, 'cy', y);
           // obj.setAttributeNS(null, 'points', (75+(x/2))+","+(50+y/2)+" "+(50+x/2)+","+(100+y/2)+" "+(100+x/2)+","+(100+y/2));
            obj.setAttributeNS(null, 'points',  x+","+(y+height/2)+" "+(x+width/2)+","+(y)+" "+(x+width/2)+","+(y)+" "+(x+width)+","+(y+height/2)+" "+(x+width/2)+","+(y+height));
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
        MissCarriage(idName,x,y){
            var obj = document.createElementNS(svgns, 'polygon');
            var width = 50;
            var height = 50;
            obj.setAttributeNS(null, 'cx', x);
            obj.setAttributeNS(null, 'cy', y);
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
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x);
            objLine.setAttributeNS(null, 'y1', y);
            objLine.setAttributeNS(null, 'x2', x+width);
            objLine.setAttributeNS(null, 'y2', y+height);
            objLine.setAttributeNS(null, 'stroke','black');
            objLine.setAttributeNS(null, 'stroke-width',2);
            document.getElementById('svgOne').appendChild(objLine);

            var objLine2 = document.createElementNS(svgns, 'line');
            objLine2.setAttributeNS(null, 'x1', x);
            objLine2.setAttributeNS(null, 'y1', y+height);
            objLine2.setAttributeNS(null, 'x2', x+width);
            objLine2.setAttributeNS(null, 'y2', y);
            objLine2.setAttributeNS(null, 'stroke','black');
            objLine2.setAttributeNS(null, 'stroke-width',2);
            document.getElementById('svgOne').appendChild(objLine2);

        }
        Abortion(idName,x,y){
            var obj = document.createElementNS(svgns, 'polygon');
            var width = 50;
            var height = 50;
            obj.setAttributeNS(null, 'cx', x);
            obj.setAttributeNS(null, 'cy', y);
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
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x);
            objLine.setAttributeNS(null, 'y1', y);
            objLine.setAttributeNS(null, 'x2', x+width);
            objLine.setAttributeNS(null, 'y2', y+height);
            objLine.setAttributeNS(null, 'stroke','black');
            objLine.setAttributeNS(null, 'stroke-width',2);
            document.getElementById('svgOne').appendChild(objLine);

            var objLine2 = document.createElementNS(svgns, 'line');
            objLine2.setAttributeNS(null, 'x1', x);
            objLine2.setAttributeNS(null, 'y1', y+height);
            objLine2.setAttributeNS(null, 'x2', x+width);
            objLine2.setAttributeNS(null, 'y2', y);
            objLine2.setAttributeNS(null, 'stroke','black');
            objLine2.setAttributeNS(null, 'stroke-width',2);
            document.getElementById('svgOne').appendChild(objLine2);

            var objLine3 = document.createElementNS(svgns, 'line');
            objLine3.setAttributeNS(null, 'x1', x);
            objLine3.setAttributeNS(null, 'y1', y+height/2);
            objLine3.setAttributeNS(null, 'x2', x+width);
            objLine3.setAttributeNS(null, 'y2', y+height/2);
            objLine3.setAttributeNS(null, 'stroke','black');
            objLine3.setAttributeNS(null, 'stroke-width',2);
            document.getElementById('svgOne').appendChild(objLine3);

        }
        MaleDeath(idName,x,y){
            var obj = document.createElementNS(svgns, 'rect');
            var width = 50;
            var height = 50;
            obj.setAttributeNS(null, 'x', x);
            obj.setAttributeNS(null, 'y', y);
            obj.setAttributeNS(null, 'height', '50');
            obj.setAttributeNS(null, 'width', '50');
            obj.setAttributeNS(null, 'stroke-width', '2');
            obj.setAttributeNS(null, 'fill', '#FFFFFF');
            obj.setAttributeNS(null, 'stroke','rgb(0,0,0)');
            obj.setAttributeNS(null, 'id', idName);
            document.getElementById('svgOne').appendChild(obj);

            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x);
            objLine.setAttributeNS(null, 'y1', y);
            objLine.setAttributeNS(null, 'x2', x+width);
            objLine.setAttributeNS(null, 'y2', y+height);
            objLine.setAttributeNS(null, 'stroke','black');
            objLine.setAttributeNS(null, 'stroke-width',2);
            document.getElementById('svgOne').appendChild(objLine);

            var objLine2 = document.createElementNS(svgns, 'line');
            objLine2.setAttributeNS(null, 'x1', x);
            objLine2.setAttributeNS(null, 'y1', y+height);
            objLine2.setAttributeNS(null, 'x2', x+width);
            objLine2.setAttributeNS(null, 'y2', y);
            objLine2.setAttributeNS(null, 'stroke','black');
            objLine2.setAttributeNS(null, 'stroke-width',2);
            document.getElementById('svgOne').appendChild(objLine2);

            obj.addEventListener("click",function(){    
            });
            obj.addEventListener("mouseout",function(){
            });
        }
        FemaleDeath (idName,x,y){
            var radios = 25;
            var obj = document.createElementNS(svgns, 'circle');
            obj.setAttributeNS(null, 'cx', x+radios);
            obj.setAttributeNS(null, 'cy', y+radios);
            obj.setAttributeNS(null, 'r', radios);
            obj.setAttributeNS(null, 'stroke-width', '2');
            obj.setAttributeNS(null, 'fill', '#FFFFFF');
            obj.setAttributeNS(null, 'stroke','rgb(0,0,0)');
            obj.setAttributeNS(null, 'id', idName);
            document.getElementById('svgOne').appendChild(obj);
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x);
            objLine.setAttributeNS(null, 'y1', y);
            objLine.setAttributeNS(null, 'x2', x+radios*2);
            objLine.setAttributeNS(null, 'y2', y+radios*2);
            objLine.setAttributeNS(null, 'stroke','black');
            objLine.setAttributeNS(null, 'stroke-width',2);
            document.getElementById('svgOne').appendChild(objLine);

            var objLine2 = document.createElementNS(svgns, 'line');
            objLine2.setAttributeNS(null, 'x1', x);
            objLine2.setAttributeNS(null, 'y1', y+radios*2);
            objLine2.setAttributeNS(null, 'x2', x+radios*2);
            objLine2.setAttributeNS(null, 'y2', y);
            objLine2.setAttributeNS(null, 'stroke','black');
            objLine2.setAttributeNS(null, 'stroke-width',2);
            document.getElementById('svgOne').appendChild(objLine2);
            obj.addEventListener("click",function(){    
            });
            obj.addEventListener("mouseout",function(){
            });
        }
        GenderUnknown(idName,x,y){
            var obj = document.createElementNS(svgns, 'text');
            obj.setAttributeNS(null, 'x', x+x/4);
            obj.setAttributeNS(null, 'y', y);
            obj.setAttributeNS(null, 'fill', '#000000');
            obj.textContent = "?";
            obj.setAttributeNS(null,'font-size','3em');
            obj.setAttributeNS(null, 'id', idName);
            document.getElementById('svgOne').appendChild(obj);
        }
}
myGenogram = new genogramSymbol();
myGenogram.Male("myId",50,50);
myGenogram.Female("myId2",150,50);
myGenogram.Pregnancy("myId3",250,50);
myGenogram.Pet("myId4",350,50);
myGenogram.MissCarriage("myId5",450,50);
myGenogram.Abortion("myid6",550,50);
myGenogram.MaleDeath("myid7",650,50);
myGenogram.FemaleDeath("myid8",50,150);
myGenogram.GenderUnknown("myid9",50,250);
