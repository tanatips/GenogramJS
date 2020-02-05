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
        "relationships":[
            {
                "id":"11",
                "relationStatus":"married"
            },
            {
                "id":"12",
                "relationStatus":"divorce"
            }
        ],
        "status":"live"
    },
    {
        "id":"2",
        "first_name":"Mrs. 2",
        "last_name":"last",
        "birthday":'01/01/1957',
        "sex":"Female",
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
    ,
    {
        "id":"11",
        "first_name":"Mr. 10",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"3",
        "mother_id":"-2",
        "status":"live"
    }
    ,
    {
        "id":"12",
        "first_name":"Mr. 10",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"-1",
        "mother_id":"-2",
        "status":"live"
    } ,
    {
        "id":"13",
        "first_name":"Mr. 10",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"3",
        "mother_id":"12",
        "status":"live"
    },
    {
        "id":"14",
        "first_name":"Mr. 10",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"3",
        "mother_id":"12",
        "status":"live"
    },
    {
        "id":"15",
        "first_name":"Mr. 15",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"13",
        "mother_id":"16",
        "status":"live"
    },
    {
        "id":"16",
        "first_name":"Mr. 15",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"-2",
        "mother_id":"-2",
        "status":"live"
    }
];
var spouse = [
        {
            "id1":"1",
            "id2":"2",
            "relationStatus":"divorce"
        }
        ,
        {
            "id1":"3",
            "id2":"12",
            "relationStatus":"divorce"
        },
        {
            "id1":"13",
            "id2":"16",
            "relationStatus":"divorce"
        }
    ];
class genogramSymbol {
    
    constructor(data,spouse){
        this.data= data;
        this.spouse=spouse;
        //alert(JSON.stringify(this.data));
    }
        CMale (idName,x,y){
            var obj = document.getElementById(idName);
            if(obj==null){
                var data = this.GetDataById(idName);
                if(data.length>0){
                    if(data [0].status==="live")
                    {
                        this.Male(data[0].id,x,y);
                    }
                    if(data [0].status==="dead")
                    {
                        this.MaleDeath(data[0].id,x,y);
                    }
                }
            }
        }
        CFemale (idName,x,y){
            var obj = document.getElementById(idName);
            if(obj==null){
            var data = this.GetDataById(idName);
            if(data.length>0){
                if(data [0].status==="live")
                {
                    this.Female(data[0].id,x,y);
                }
                if(data [0].status==="dead")
                {
                    this.FemaleDeath(data[0].id,x,y);
                }
                if(data [0].status==="Pregnancy")
                {
                    this.Pregnancy(data[0].id,x,y);
                }
            }
            }
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
            objLine.setAttributeNS(null,'id',"l"+idName);
            document.getElementById('svgOne').appendChild(objLine);

            var objLine2 = document.createElementNS(svgns, 'line');
            objLine2.setAttributeNS(null, 'x1', x);
            objLine2.setAttributeNS(null, 'y1', y+height);
            objLine2.setAttributeNS(null, 'x2', x+width);
            objLine2.setAttributeNS(null, 'y2', y);
            objLine2.setAttributeNS(null, 'stroke','black');
            objLine2.setAttributeNS(null, 'stroke-width',2);
            objLine2.setAttributeNS(null,'id',"r"+idName);
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
            objLine.setAttributeNS(null, 'id','l'+idName);
            document.getElementById('svgOne').appendChild(objLine);

            var objLine2 = document.createElementNS(svgns, 'line');
            objLine2.setAttributeNS(null, 'x1', x);
            objLine2.setAttributeNS(null, 'y1', y+radios*2);
            objLine2.setAttributeNS(null, 'x2', x+radios*2);
            objLine2.setAttributeNS(null, 'y2', y);
            objLine2.setAttributeNS(null, 'stroke','black');
            objLine2.setAttributeNS(null, 'stroke-width',2);
            objLine2.setAttributeNS(null, 'id','r'+idName);
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
        FindSpouse(id,spouse){
             var slist = spouse;
             
             var result = [];
             for(var i = 0;i<slist.length;i++){
                 if(slist[i].id1==id || slist[i].id2==id){
                    result.push(slist[i]);
                 }
             }
             //alert(JSON.stringify(result));
             return result;
        }
        CreateSpouse(id,list){
            if(list!=undefined){
                var main = document.getElementById(id);
                var util = new Utility();
                var data = util.GetTopLeftXY(main);
                var x = 0;
                var y = 0;
                if(data.length>0)
                {
                    x = data[0].x;
                    y = data[0].y;
                }
                for(var i =0 ;i<list.length;i++){
                   var obj1=  document.getElementById(list[i].id1);
                   var obj2 = document.getElementById(list[i].id2);
                  
                   if(obj1==undefined && list[i].id1!=""){
                        var p = this.GetDataById(list[i].id1);
                        if(p[0].sex=="Male")
                        {
                            this.CMale(p[0].id,200,300);
                        }
                        else if(p[0].sex=="Female")
                        {
                            this.CFemale(p[0].id,200,300);
                        }
                   }
                   if(obj2==undefined && list[i].id2!="" ){
                    var p = this.GetDataById(list[i].id2);
                    if(p[0].sex=="Male")
                    {
                        this.CMale(p[0].id,x + 150*(i+1),y);
                    }
                    else if(p[0].sex=="Female")
                    {
                        this.CFemale(p[0].id,x - 150*(i+1),y);
                    }
                    // var link = new genogramRelationship(this.spouse);
                    // link.SpouseRelationship(main.id,list[i].id2);
                    }
                }
            }
        }
        CreateRelationship(spouse){

        }
        GenerateGenogram(id){
            var result=this.GetDataById(id);
            var dataFather = this.GetDataById(result[0].father_id);
            var dataMother = this.GetDataById(result[0].mother_id);
            var dataChilds = this.GetChildDataById(result[0].father_id,result[0].mother_id);
            var svg = document.getElementById("svgOne");
            var xBegin = svg.width.baseVal.value/dataChilds.length;
            var yBegin = svg.height.baseVal.value*0.2;
            var space =  (svg.width.baseVal.value/dataChilds.length)-100;
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
                    this.Female(dataMother[0].id,xBegin+(space*data.length),yBegin);
                }
                if(dataFather[0].status==="dead")
                {
                    this.FemaleDeath(dataMother[0].id,xBegin+(space*data.length),yBegin);
                }
               
            }
            var spouselst= this.FindSpouse(dataFather[0].id,this.spouse);
            this.CreateSpouse(dataFather[0].id,spouselst);

            var spouselst= this.FindSpouse(dataMother[0].id,this.spouse);
            this.CreateSpouse(dataMother[0].id,spouselst);

            if(dataFather.length>0 && dataMother.length>0){
            var objLineName="line"+dataFather[0].id+""+dataMother[0].id;
            var link = new genogramRelationship(this.spouse);
            link.SpouseRelationship(dataFather[0].id,dataMother[0].id);
            //link.Engagement(dataFather[0].id,10);
            }
            var objMainLine = document.getElementById(objLineName);
            var dataChilds = this.GetChildDataById(result[0].father_id,result[0].mother_id);
            var icount = 0;
            var stepLine = 500;
            var xBegin= objMainLine.x1.baseVal.value + ((objMainLine.x2.baseVal.value-objMainLine.x1.baseVal.value)*0.2)/2;
            space= ((objMainLine.x2.baseVal.value-objMainLine.x1.baseVal.value)*0.80)/dataChilds.length;         
            if(dataChilds.length>0){
                for(var i = 0 ;i<dataChilds.length;i++){
                    
                    if(dataChilds[i].sex =="Male"){
                        if(dataChilds[i].status=="live"){
                            this.Male(dataChilds[i].id,xBegin+(icount*space),stepLine);
                            icount = icount+1;
                        }
                        else if(dataChilds[i].status=="dead"){
                            this.MaleDeath(dataChilds[i].id,xBegin+(icount*space),stepLine);
                            icount = icount+1;
                        }
                    }
                    else if(dataChilds[i].sex =="Female"){
                        if(dataChilds[i].status=="live"){
                            this.Female(dataChilds[i].id,xBegin+(icount*space),stepLine);
                            icount = icount+1;
                        }
                        else if(dataChilds[i].status=="dead"){
                            this.FemaleDeath(dataChilds[i].id,xBegin+(icount*space),stepLine);
                            icount = icount+1;
                        }
                        else if(dataChilds[i].status=="Pregnancy"){
                            this.Pregnancy(dataChilds[i].id,xBegin+(icount*space),stepLine);
                            icount = icount+1;
                        }
                        else if(dataChilds[i].status=="MisCarriage"){
                            this.MisCarriage(dataChilds[i].id,xBegin+(icount*space),stepLine);
                            icount = icount+1;
                        }
                    }
                    var distinct = 25;
                    if(objMainLine!=null && objMainLine!= undefined){
                        console.log(objMainLine.x1.baseVal.value+" "+objMainLine.y1.baseVal.value+" "+objMainLine.x2.baseVal.value+" "+objMainLine.y2.baseVal.value);
                        //var x1 = (objMainLine.x1.baseVal.value) + (i+1)*((objMainLine.x2.baseVal.value-objMainLine.x1.baseVal.value)*0.90)/(dataChilds.length);
                        var x1 = xBegin+25 +i*((objMainLine.x2.baseVal.value-objMainLine.x1.baseVal.value)*0.80)/dataChilds.length;
                        var y1 = (objMainLine.y1.baseVal.value+objMainLine.y2.baseVal.value)/2;
                        var obj = document.getElementById(dataChilds[i].id);
                        var x2,y2=0;
                        var util = new Utility(); 
                        x2 = util[0].x;
                        y2 = util[0].y;
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
        GenerateGenogram2(id){
            var level = 0;
            var result=this.GetDataById(id);
            var dataFather = this.GetDataById(result[0].father_id);
            if(dataFather!=null){
                this.CMale(dataFather[0].id,200,200);
                this.GetFamilyDetail(dataFather[0].id,level+1);
                this.AdjustPosition(dataFather[0].id);
                this.AdjustPosition(3);
                this.AdjustPosition(14);
                var rel = new genogramRelationship(this.spouse);
                rel.CreateSpouseRelationship();
            }
       }
        GetFamilyDetail (id,level,index){
            // Spouses
            //alert(JSON.stringify(this.spouse));
             var main = document.getElementById(id);
             if(main==null || main ==undefined){
                 var data = this.GetDataById(id);
                 if(data.length>0)
                 {
                    if(data[0].sex=="Male"){
                        this.CMale(id,100+(100*index),200+(100*level));
                    }
                    else if(data[0].sex=="Female"){
                        this.CFemale(id,100+(100*index),200+(100*level));
                    }
                 }
             }
             var spouselst= this.FindSpouse(id,this.spouse);
             if(spouselst.length>0)
             {
            // var spouselst= this.FindSpouse(dataFather[0].id,this.spouse);
             this.CreateSpouse(id,spouselst);
             //this.AdjustPosition(id);
             
             //var obj = document.getElementById(id);
             //console.log(JSON.stringify(obj));
             //alert(obj);
            // Child
            
                for(var i=0;i<spouselst.length;i++){
                    //this.GetFamilyDetail(spouselst[i].id,level+1);
                    var dataChilds = this.GetChildDataById(spouselst[i].id1,spouselst[i].id2);
                    if(dataChilds.length==0)
                    {
                        dataChilds = this.GetChildDataById(spouselst[i].id2,spouselst[i].id1);
                    }
                    if(dataChilds.length>0){
                        for(var j=0;j<dataChilds.length;j++){
                            this.GetFamilyDetail(dataChilds[j].id,level+1,j);
                        }
                       
                    }
                }
            }
            else{
                var data = this.GetDataById(id);
                if(data.length>0){
                    if(data[0].sex=="Male"){
                        this.CMale(id,100+(100*index),200+(100*level));
                    }
                    else if(data[0].sex=="Female"){
                        this.CFemale(id,100+(100*index),200+(100*level));
                    }
                }
            }
        }
        AdjustPosition(id){
            var obj = document.getElementById(id);
            var x1 = 0;
            var y1 = 0;
            var x2 = 0;
            var y2 = 0;
            var util =new Utility();
            var data = util.GetTopLeftXY(obj);
            var objlst =[];
            if(data.length>0){
                x1= data[0].x;
                y1= data[0].y;
            }
            var lst = obj.nextSibling.ownerSVGElement.childNodes;
            for(var i = 0;i<lst.length;i++){
                x2=0;
                y2=0;
                if(lst[i].constructor.name=="SVGRectElement"){
                    var data = util.GetTopLeftXY(lst[i]);
                    if(data.length>0)
                    {
                        x2 = data[0].x;
                        y2 = data[0].y;
                    }
                } else if(lst[i].constructor.name=="SVGCircleElement"){
                    var data = util.GetTopLeftXY(lst[i]);
                    if(data.length>0)
                    {
                        x2 = data[0].x;
                        y2 = lst[i].cy.baseVal.value-lst[i].r.baseVal.value;
                    }
                } else if(lst[i].constructor.name=="SVGPolygonElement"){
                    var data = util.GetTopLeftXY(lst[i]);
                    if(data.length>0)
                    {
                        x2 = data[0].x;
                        y2 = data[0].y;
                    }
                }
                if(y1==y2){
                    objlst.push(lst[i]);
                }
                //console.log(lst[i].constructor.name);
            }
            var objSvg = document.getElementById("svgOne");
            var width = objSvg.width.baseVal.value;
            var height = objSvg.height.baseVal.value;
            var medium = (width)*0.9/2;
            if(objlst.length>0){
                //var beginX = (medium/objlst.length);
                
                var distinct = (width*0.9)/(objlst.length+1);
                var beginX = (width*0.05)+distinct;
                //alert(beginX);
                for(var i=0;i<objlst.length;i++){
                    if(objlst[i].constructor.name=="SVGRectElement")
                    {
                        objlst[i].x.baseVal.value=beginX+(i*distinct);
                        var l=document.getElementById("l"+objlst[i].id);
                        var r=document.getElementById("r"+objlst[i].id);
                        if(l!=null)
                        {
                            l.x1.baseVal.value = beginX+(i*distinct);
                            
                            l.x2.baseVal.value = beginX+(i*distinct)+50;
                           
                        }if(r!=null)
                        {
                            r.x1.baseVal.value = beginX+(i*distinct);
                             
                            r.x2.baseVal.value = beginX+(i*distinct)+50;
                             
                        }
                    }
                    else if(objlst[i].constructor.name=="SVGCircleElement"){
                        objlst[i].cx.baseVal.value=beginX+(i*distinct)+25;
                        var l=document.getElementById("l"+objlst[i].id);
                        var r=document.getElementById("r"+objlst[i].id);
                        if(l!=null)
                        {
                            l.x = beginX+(i*distinct)+25;
                        }if(r!=null)
                        {
                            r.x = beginX+(i*distinct)+25;
                        }
                    }
                    else if(objlst[i].constructor.name=="SVGPolygonElement"){
                        objlst[i].points[0].x=beginX+(i*distinct);
                        objlst[i].points[1].x=beginX+(i*distinct)+25;
                        objlst[i].points[2].x=beginX+(i*distinct)+50;
                    }
                }
            }
            console.log(objlst);
            //main.nextSibling.ownerSVGElement.childNodes
        }
}
class genogramRelationship{
    constructor(spouse){
        this.spouse=spouse;
        //alert(JSON.stringify(this.data));
    }
     CreateSpouseRelationship()
     {
         for(var i=0;i<this.spouse.length;i++){
            this.SpouseRelationship(this.spouse[i].id1,this.spouse[i].id2);
         }
     }
     SpouseRelationship(objId1,objId2){
        var obj1 = document.getElementById(objId1);
        var obj2 = document.getElementById(objId2);
        var result = this.spouse.filter(element=>element.id1==objId1 && element.id2==objId2);
        if(result.length>0){
            if(result[0].relationStatus=="married"){
                this.Marriage(objId1,objId2);
            }
            if(result[0].relationStatus=="divorce"){
                this.Engagement(objId1,objId2);
            }
        }
        //alert(JSON.stringify(result));
     }
     Marriage(objId1,objId2){
         var obj1 = document.getElementById(objId1);
         var obj2 = document.getElementById(objId2);
         var distinct = 25;
         var x1,x2, y1,y2;
         var x1,x2, y1,y2;
         var util =new  Utility();
         var data = util.GetPositionXY(obj1);
         x1=data[0].x;
         y1=data[0].y;
         var data = util.GetPositionXY(obj2);
         x2=data[0].x;
         y2=data[0].y;

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
         var util =new  Utility();
         var data = util.GetPositionXY(obj1);
         x1=data[0].x;
         y1=data[0].y;
         var data = util.GetPositionXY(obj2);
         x2=data[0].x;
         y2=data[0].y;
         
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
class Utility{
    GetPositionXY(obj){
        var x=0;
        var y=0;
        var distinct=25;
        if(obj!=null)
        {
            if(obj.constructor.name=="SVGRectElement"){
                x = obj.x.baseVal.value+obj.height.baseVal.value/2;
                y = obj.y.baseVal.value+obj.height.baseVal.value+distinct;
            }
            else if(obj.constructor.name=="SVGCircleElement"){
                x = obj.cx.baseVal.value;
                y = obj.cy.baseVal.value+obj.r.baseVal.value+distinct;
            }
            else{
                x = obj.x.baseVal.value+obj.width.baseVal.value/2;
                y = obj.y.baseVal.value;
            }
        }
         return [{"x":x,"y":y}];
    }
    GetTopLeftXY(obj){
        var x=0;
        var y=0;
        var distinct=25;
        if(obj.constructor.name=="SVGRectElement"){
            x = obj.x.baseVal.value;
            y = obj.y.baseVal.value;
         }
         else if(obj.constructor.name=="SVGCircleElement"){
            x = obj.cx.baseVal.value;
            y = obj.cy.baseVal.value+obj.r.baseVal.value+distinct;
         }
         else if(obj.constructor.name=="SVGPolygonElement"){
            x = obj.points[1].x-25;
            y = obj.points[1].y;
         }
         else{
            x = obj.x.baseVal.value;
            y = obj.y.baseVal.value;
         }
         return [{"x":x,"y":y}];
    }
}
//alert(JSON.stringify(data));
myGenogram = new genogramSymbol(data,spouse);
//myGenogram.GenerateGenogram(3);
myGenogram.GenerateGenogram2(3);
// myGenogram.Male("myid1",50,50);
// myGenogram.Female("myid2",150,50);
// myGenogram.Pregnancy("myid3",250,50);
// myGenogram.Pet("myid4",350,50);
// myGenogram.MisCarriage("myid5",450,50);
// myGenogram.Abortion("myid6",550,50);
// myGenogram.MaleDeath("myid7",650,50);
// myGenogram.FemaleDeath("myid8",50,150);
// myGenogram.GenderUnknown("myid9",50,250);
