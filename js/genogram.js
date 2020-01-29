var svgns = "http://www.w3.org/2000/svg"
var data = [
    {
        "id":"1",
        "first_name":"Mr.1 ",
        "last_name":"last",
        "birthday":'01/01/1957',
        "sex":"Male",
        "father_id":"-1",
        "mother_id":"-2",
        "relationships":"married",
        "status":"live"
    },
    {
        "id":"2",
        "first_name":"Mrs. 2",
        "last_name":"last",
        "birthday":'01/01/1957',
        "sex":"Male",
        "father_id":"-3",
        "mother_id":"-4",
        "relationships":"married",
        "status":"live"
    },
    {
        "id":"3",
        "first_name":"Mr. 3",
        "last_name":"last",
        "birthday":'01/01/1977',
        "sex":"Male",
        "father_id":"1",
        "mother_id":"2",
        "status":"live"
    }
    ,{
        "id":"4",
        "first_name":"Mr. 4",
        "last_name":"last",
        "birthday":'01/01/1987',
        "sex":"Male",
        "father_id":"1",
        "mother_id":"2",
        "status":"live"
    },
    {
        "id":"5",
        "first_name":"Mr. 5",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"1",
        "mother_id":"2",
        "status":"live"
    },
    {
        "id":"6",
        "first_name":"Mr. 6",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"1",
        "mother_id":"2",
        "status":"dead"
    },
    {
        "id":"7",
        "first_name":"Mr. 7",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"1",
        "mother_id":"2",
        "status":"Pregnancy",
        "mate": [
                {
                    "id":"8"
                },{
                    "id":"9"
                }
            ]
    },
    {
        "id":"8",
        "first_name":"Mr. 8",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"1",
        "mother_id":"2",
        "status":"live"
    },
    {
        "id":"9",
        "first_name":"Mr. 9",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"1",
        "mother_id":"2",
        "status":"MisCarriage"
    }   
    ,
    {
        "id":"10",
        "first_name":"Mr. 10",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"-1",
        "mother_id":"-2",
        "status":"live"
    }
];
class genogramSymbol {
    
    constructor(data){
        this.data= data;
        //alert(JSON.stringify(this.data));
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
            obj.addEventListener("click",function(e){    
                alert(e.clientX+" "+e.clientY);
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
            
            obj.addEventListener("click",function(e){    
                alert(e.clientX+" "+e.clientY);
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
            
            obj.addEventListener("click",function(e){    
                alert(e.clientX+" "+e.clientY);
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
            
            obj.addEventListener("click",function(e){    
                alert(e.clientX+" "+e.clientY);
            });
            obj.addEventListener("mouseout",function(){
            });
        }
        MisCarriage(idName,x,y){
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
            
            obj.addEventListener("click",function(e){    
                alert(e.clientX+" "+e.clientY);
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
            
            obj.addEventListener("click",function(e){    
                alert(e.clientX+" "+e.clientY);
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

            obj.addEventListener("click",function(e){    
                alert(e.clientX+" "+e.clientY);
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
            obj.addEventListener("click",function(e){    
                alert(e.clientX+" "+e.clientY);
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
            obj.addEventListener("click",function(e){    
                alert(e.clientX+" "+e.clientY);
            });
            obj.addEventListener("mouseout",function(){
            });
        }
        GenerateGenogram(id){
            var result=this.GetDataById(id);
            var dataFather = this.GetDataById(result[0].father_id);
            var dataMother = this.GetDataById(result[0].mother_id);
            var dataChilds = this.GetChildDataById(result[0].father_id,result[0].mother_id);
            var svg = document.getElementById("svgOne");
            var xBegin = svg.width.baseVal.value/dataChilds.length;
            var yBegin = svg.height.baseVal.value*0.2;
            if(dataFather.length>0){
                if(dataFather[0].status==="live")
                {
                    this.Male(dataFather[0].id,xBegin,yBegin);
                }
                if(dataFather[0].status==="dead")
                {
                    this.MaleDeath(dataFather[0].id,xBegin,yBegin);
                }
            }
            
           
            if(dataMother.length>0){
                if(dataMother[0].status==="live")
                {
                    this.Female(dataMother[0].id,xBegin+(100*data.length),300);
                }
                if(dataFather[0].status==="dead")
                {
                    this.FemaleDeath(dataMother[0].id,xBegin+(100*data.length),300);
                }
            }
            if(dataFather.length>0 && dataMother.length>0){
            var objLineName="line"+dataFather[0].id+""+dataMother[0].id;
            var link = new genogramConnection();
            link.Marriage(dataFather[0].id,dataMother[0].id);
            }
            var objMainLine = document.getElementById(objLineName);
            var dataChilds = this.GetChildDataById(result[0].father_id,result[0].mother_id);
            var icount = 0;
            var stepLine = 500;
            if(dataChilds.length>0){
                for(var i = 0 ;i<dataChilds.length;i++){
                    if(dataChilds[i].sex =="Male"){
                        if(dataChilds[i].status=="live"){
                            this.Male(dataChilds[i].id,xBegin+(icount*150),stepLine);
                            icount = icount+1;
                        }
                        else if(dataChilds[i].status=="dead"){
                            this.MaleDeath(dataChilds[i].id,xBegin+(icount*150),stepLine);
                            icount = icount+1;
                        }
                    }
                    else if(dataChilds[i].sex =="Female"){
                        if(dataChilds[i].status=="live"){
                            this.Female(dataChilds[i].id,xBegin+(icount*150),stepLine);
                            icount = icount+1;
                        }
                        else if(dataChilds[i].status=="dead"){
                            this.FemaleDeath(dataChilds[i].id,xBegin+(icount*150),stepLine);
                            icount = icount+1;
                        }
                        else if(dataChilds[i].status=="Pregnancy"){
                            this.Pregnancy(dataChilds[i].id,xBegin+(icount*150),stepLine);
                            icount = icount+1;
                        }
                        else if(dataChilds[i].status=="MisCarriage"){
                            this.MisCarriage(dataChilds[i].id,xBegin+(icount*150),stepLine);
                            icount = icount+1;
                        }
                    }
                    var distinct = 25;
                    if(objMainLine!=null && objMainLine!= undefined){
                        console.log(objMainLine.x1.baseVal.value+" "+objMainLine.y1.baseVal.value+" "+objMainLine.x2.baseVal.value+" "+objMainLine.y2.baseVal.value);
                        var x1 = (objMainLine.x1.baseVal.value+objMainLine.x2.baseVal.value)/2;
                        var y1 = (objMainLine.y1.baseVal.value+objMainLine.y2.baseVal.value)/2;
                        var obj = document.getElementById(dataChilds[i].id);
                        var x2,y2=0;
                        if(obj.constructor.name=="SVGCircleElement"){
                            x2 = obj.cx.baseVal.value;
                            y2 = obj.cy.baseVal.value-obj.r.baseVal.value;
                        }
                        else if(obj.constructor.name=="SVGPolygonElement"){
                            x2= obj.points[1].x;
                            y2= obj.points[1].y;
                        }
                        else {
                            x2 = obj.x.baseVal.value+obj.width.baseVal.value/2;
                            y2 = obj.y.baseVal.value;
                        }
                        var objLine = document.createElementNS(svgns, 'line');
                        objLine.setAttributeNS(null, 'x1', x1);
                        objLine.setAttributeNS(null, 'y1', y1);
                        objLine.setAttributeNS(null, 'x2', x2);
                        objLine.setAttributeNS(null, 'y2', y2);
                        objLine.setAttributeNS(null, 'stroke','black');
                        objLine.setAttributeNS(null, 'stroke-width',2);
                        document.getElementById('svgOne').appendChild(objLine);
                    }
                }
            }
            //alert(JSON.stringify(this.GetDataById(result[0].mother_id)));
        }
        GetDataById(id){
            var result=[];
            //alert(JSON.stringify(this.data));
            for(var i = 0;this.data.length;i++){
                if(this.data[i]["id"]==id){
                    result.push(this.data[i]);
                    break;
                }
            }
            return result;
        }
        GetChildDataById(father_id,mother_id){
            
            var result=[];
            for(var i = 0;i<this.data.length;i++){
                if(this.data[i]["father_id"] === father_id && this.data[i]["mother_id"] === mother_id){
                    result.push(this.data[i]);
                    
                }
            }
            return result;

        }
}
class genogramConnection{
     Marriage(objId1,objId2){
         var obj1 = document.getElementById(objId1);
         var obj2 = document.getElementById(objId2);
         var distinct = 25;
         var x1,x2, y1,y2;
         if(obj1.constructor.name=="SVGRectElement"){
            x1 = obj1.x.baseVal.value+obj1.height.baseVal.value/2;
            y1 = obj1.y.baseVal.value+obj1.height.baseVal.value+distinct;
         }
         if(obj2.constructor.name=="SVGCircleElement"){
            x2 = obj2.cx.baseVal.value;
            y2 = obj2.cy.baseVal.value+obj2.r.baseVal.value+distinct;
         }
         var objLine = document.createElementNS(svgns, 'line');
         objLine.setAttributeNS(null, 'x1', x1);
         objLine.setAttributeNS(null, 'y1', y1);
         objLine.setAttributeNS(null, 'x2', x2);
         objLine.setAttributeNS(null, 'y2', y2);
         objLine.setAttributeNS(null, 'stroke','black');
         objLine.setAttributeNS(null, 'stroke-width',2);
         objLine.setAttributeNS(null,"id","line"+objId1+""+objId2);
         document.getElementById('svgOne').appendChild(objLine);

         var objLine1 = document.createElementNS(svgns, 'line');
         var l_x1= x1;
         var l_y1= y1;
         var l_x2 = x1;
         var l_y2 = y1-distinct;
         objLine1.setAttributeNS(null, 'x1', l_x1);
         objLine1.setAttributeNS(null, 'y1', l_y1);
         objLine1.setAttributeNS(null, 'x2', l_x2);
         objLine1.setAttributeNS(null, 'y2', l_y2);
         objLine1.setAttributeNS(null, 'stroke','black');
         objLine1.setAttributeNS(null, 'stroke-width',2);
         document.getElementById('svgOne').appendChild(objLine1);

         var objLine2 = document.createElementNS(svgns, 'line');
         var r_x1= x2;
         var r_y1= y2;
         var r_x2 = x2;
         var r_y2 = y2-distinct;
         objLine2.setAttributeNS(null, 'x1', r_x1);
         objLine2.setAttributeNS(null, 'y1', r_y1);
         objLine2.setAttributeNS(null, 'x2', r_x2);
         objLine2.setAttributeNS(null, 'y2', r_y2);
         objLine2.setAttributeNS(null, 'stroke','black');
         objLine2.setAttributeNS(null, 'stroke-width',2);
         document.getElementById('svgOne').appendChild(objLine2);
     }
     Engagement(objId1,objId2){
        var obj1 = document.getElementById(objId1);
         var obj2 = document.getElementById(objId2);
         var distinct = 25;
         var x1,x2, y1,y2;
         if(obj1.constructor.name=="SVGRectElement"){
            x1 = obj1.x.baseVal.value+obj1.height.baseVal.value/2;
            y1 = obj1.y.baseVal.value+obj1.height.baseVal.value+distinct;
         }
         if(obj2.constructor.name=="SVGCircleElement"){
            x2 = obj2.cx.baseVal.value;
            y2 = obj2.cy.baseVal.value+obj2.r.baseVal.value+distinct;
         }
         var objLine = document.createElementNS(svgns, 'line');
         objLine.setAttributeNS(null, 'x1', x1);
         objLine.setAttributeNS(null, 'y1', y1);
         objLine.setAttributeNS(null, 'x2', x2);
         objLine.setAttributeNS(null, 'y2', y2);
         objLine.setAttributeNS(null, 'stroke','blue');
         objLine.setAttributeNS(null, 'stroke-width',2);
         objLine.setAttributeNS(null, 'stroke-dasharray',"5 5 5");
         document.getElementById('svgOne').appendChild(objLine);

         var objLine1 = document.createElementNS(svgns, 'line');
         var l_x1= x1;
         var l_y1= y1;
         var l_x2 = x1;
         var l_y2 = y1-distinct;
         objLine1.setAttributeNS(null, 'x1', l_x1);
         objLine1.setAttributeNS(null, 'y1', l_y1);
         objLine1.setAttributeNS(null, 'x2', l_x2);
         objLine1.setAttributeNS(null, 'y2', l_y2);
         objLine1.setAttributeNS(null, 'stroke','black');
         objLine1.setAttributeNS(null, 'stroke-width',2);
         document.getElementById('svgOne').appendChild(objLine1);

         var objLine2 = document.createElementNS(svgns, 'line');
         var r_x1= x2;
         var r_y1= y2;
         var r_x2 = x2;
         var r_y2 = y2-distinct;
         objLine2.setAttributeNS(null, 'x1', r_x1);
         objLine2.setAttributeNS(null, 'y1', r_y1);
         objLine2.setAttributeNS(null, 'x2', r_x2);
         objLine2.setAttributeNS(null, 'y2', r_y2);
         objLine2.setAttributeNS(null, 'stroke','black');
         objLine2.setAttributeNS(null, 'stroke-width',2);
         document.getElementById('svgOne').appendChild(objLine2);
     }
}
//alert(JSON.stringify(data));
myGenogram = new genogramSymbol(data);
myGenogram.GenerateGenogram(3);
myGenogram.Male("myid1",50,50);
myGenogram.Female("myid2",150,50);
myGenogram.Pregnancy("myid3",250,50);
myGenogram.Pet("myid4",350,50);
myGenogram.MisCarriage("myid5",450,50);
myGenogram.Abortion("myid6",550,50);
myGenogram.MaleDeath("myid7",650,50);
myGenogram.FemaleDeath("myid8",50,150);
myGenogram.GenderUnknown("myid9",50,250);
