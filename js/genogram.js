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
        "status":"live",
        "picture":"images/ironman3.jpg"
    },
    {
        "id":"2",
        "first_name":"Mrs. 2",
        "last_name":"last",
        "birthday":'01/01/1957',
        "sex":"Female",
        "father_id":"-3",
        "mother_id":"-4",
        "status":"live",
        "picture":"images/pepper.jpg"
    },
    {
        "id":"3",
        "first_name":"Mr. 3",
        "last_name":"last",
        "birthday":'01/01/1977',
        "sex":"Male",
        "father_id":"1",
        "mother_id":"2",
        "status":"live",
        "picture":"images/ironman3.jpg"
    }
    ,{
        "id":"4",
        "first_name":"Mr. 4",
        "last_name":"last",
        "birthday":'01/01/1987',
        "sex":"Male",
        "father_id":"1",
        "mother_id":"2",
        "status":"live",
        "picture":"images/ironman3.jpg"
    }
    ,
    {
        "id":"5",
        "first_name":"Mr. 5",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"1",
        "mother_id":"2",
        "status":"live",
        "picture":"images/pepper.jpg"
    }
     ,
    {
        "id":"6",
        "first_name":"Mr. 6",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"1",
        "mother_id":"2",
        "status":"dead",
        "picture":"images/ironman3.jpg"
    }
     ,
    {
        "id":"7",
        "first_name":"Mr. 7",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"1",
        "mother_id":"2",
        "status":"Pregnancy",
        "picture":"images/pepper.jpg"
    },
    {
        "id":"8",
        "first_name":"Mr. 8",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"1",
        "mother_id":"2",
        "status":"live",
        "picture":"images/pepper.jpg"
    }
    ,
    {
        "id":"9",
        "first_name":"Mr. 9",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"1",
        "mother_id":"2",
        "status":"MisCarriage",
        "picture":"images/pepper.jpg"
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
        "status":"live",
        "picture":"images/pepper.jpg"
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
        "status":"live",
        "picture":"images/pepper.jpg"
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
        "status":"live",
        "picture":"images/pepper.jpg"
    }
    ,
    {
        "id":"13",
        "first_name":"Mr. 10",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"3",
        "mother_id":"12",
        "status":"live",
        "picture":"images/pepper.jpg"
    }
    
    ,
    {
        "id":"15",
        "first_name":"Mr. 15",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"13",
        "mother_id":"16",
        "status":"live" ,
        "picture":"images/ironman3.jpg"
    }
    ,
    {
        "id":"16",
        "first_name":"Mr. 16",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"-2",
        "mother_id":"-2",
        "status":"live",
        "picture":"images/ironman3.jpg"
    }
    ,
    {
        "id":"17",
        "first_name":"Mr. 17",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"-2",
        "mother_id":"-2",
        "status":"live",
        "picture":"images/pepper.jpg"
    },
    {
        "id":"18",
        "first_name":"Mr. 17",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"13",
        "mother_id":"16",
        "status":"live",
        "picture":"images/pepper.jpg"
    }
    ,
    {
        "id":"19",
        "first_name":"Mr. 19",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"13",
        "mother_id":"16",
        "status":"live",
        "picture":"images/pepper.jpg"
    },
    {
        "id":"20",
        "first_name":"Mr. 19",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"-1",
        "mother_id":"-1",
        "status":"live",
        "picture":"images/ironman3.jpg"
    },
    {
        "id":"21",
        "first_name":"Mr. 21",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"20",
        "mother_id":"19",
        "status":"live",
        "picture":"images/ironman3.jpg"
    },
    {
        "id":"22",
        "first_name":"Mr. 21",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"4",
        "mother_id":"17",
        "status":"live",
        "picture":"images/ironman3.jpg"
    },
    {
        "id":"23",
        "first_name":"Mr. 21",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"",
        "mother_id":"",
        "status":"live",
        "picture":"images/ironman3.jpg"
    },
    {
        "id":"24",
        "first_name":"Mr. 21",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"5",
        "mother_id":"23",
        "status":"live",
        "picture":"images/ironman3.jpg"
    },
    {
        "id":"25",
        "first_name":"Mr. 21",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"",
        "mother_id":"",
        "status":"live",
        "picture":"images/ironman3.jpg"
    },
    {
        "id":"26",
        "first_name":"Mr. 21",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"21",
        "mother_id":"25",
        "status":"live",
        "picture":"images/ironman3.jpg"
    },
    {
        "id":"27",
        "first_name":"Mr. 21",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"21",
        "mother_id":"25",
        "status":"live",
        "picture":"images/pepper.jpg"
    },
    {
        "id":"28",
        "first_name":"Mr. 28",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"24",
        "mother_id":"27",
        "status":"live",
        "picture":"images/ironman3.jpg"
    }
    ,
    {
        "id":"29",
        "first_name":"Mr. 28",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"24",
        "mother_id":"27",
        "status":"live",
        "picture":"images/ironman3.jpg"
    }
    ,
    {
        "id":"30",
        "first_name":"Mr. 28",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"",
        "mother_id":"",
        "status":"live",
        "picture":"images/pepper.jpg"
    }
    ,
    {
        "id":"31",
        "first_name":"Mr. 31",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"",
        "mother_id":"",
        "status":"live",
        "picture":"images/pepper.jpg"
    }
    ,
    {
        "id":"32",
        "first_name":"Mr. 28",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"",
        "mother_id":"",
        "status":"live",
        "picture":"images/pepper.jpg"
    }
    ,
    {
        "id":"33",
        "first_name":"Mr. 28",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"28",
        "mother_id":"31",
        "status":"live",
        "picture":"images/pepper.jpg"
    }
    ,
    {
        "id":"34",
        "first_name":"Mr. 28",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"",
        "mother_id":"",
        "status":"live",
        "picture":"images/ironman3.jpg"
    },
    {
        "id":"35",
        "first_name":"Mr. 28",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"33",
        "mother_id":"34",
        "status":"live",
        "picture":"images/pepper.jpg"
    }
    ,
    {
        "id":"36",
        "first_name":"Mr. 28",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"",
        "mother_id":"",
        "status":"live",
        "picture":"images/ironman3.jpg",
        "child_type":"adopted_child"
    },
    {
        "id":"37",
        "first_name":"Mr. 28",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"8",
        "mother_id":"36",
        "status":"live",
        "picture":"images/pepper.jpg",
        "child_type":"adopted_child"
    },
    {
        "id":"38",
        "first_name":"Mr. 28",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"8",
        "mother_id":"36",
        "status":"live",    
        "picture":"images/pepper.jpg",
        "child_type":"foster_child"
    }
    
];
var spouse = [
        {
            "id1":"1",
            "id2":"2",
            "relationStatus":"marriage"
        },
        {
            "id1":"3",
            "id2":"12",
            "relationStatus":"engagement"
        },
        {
            "id1":"13",
            "id2":"16",
            "relationStatus":"separation_in_fact"
        },
        {
            "id1":"4",
            "id2":"17",
            "relationStatus":"legal_separation"
        },
        {
            "id1":"19",
            "id2":"20",
            "relationStatus":"legal_cohabitation"
        },
        {
            "id1":"5",
            "id2":"23",
            "relationStatus":"cohabitation"
        },
        {
            "id1":"24",
            "id2":"27",
            "relationStatus":"love_affair"
        }
        ,
        {
            "id1":"28",
            "id2":"31",
            "relationStatus":"commited_relationship"
        }
        ,
        {
            "id1":"29",
            "id2":"32",
            "relationStatus":"non_sentimental_cohabitation_and_separation"
        }
        ,
        {
            "id1":"33",
            "id2":"34",
            "relationStatus":"temporary_relation_one_night_stand"
        }
        ,
        {
            "id1":"8",
            "id2":"36",
            "relationStatus":"temporary_relation_one_night_stand"
        }
];
class genogramSymbol {
    
    constructor(data,spouse){
        this.data= data;
        this.spouse=spouse;
        this.lstObjLevel = [];
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
                if(data [0].status==="MisCarriage")
                {
                    this.MisCarriage(data[0].id,x,y);
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
            
            this.AddEvents(obj);
            this.AddTextObject(idName,x,y);
            this.AddPictureObject(idName,x,y);
            
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

            this.AddEvents(obj);
            this.AddTextObject(idName,x,y);
            this.AddPictureObject(idName,x,y);
        }
        Pet (idName,x,y){
            var obj = document.createElementNS(svgns, 'polygon');
            var width = 50;
            var height = 50;
            obj.setAttributeNS(null, 'cx', x);
            obj.setAttributeNS(null, 'cy', y);
            obj.setAttributeNS(null, 'points',  x+","+(y+height/2)+" "+(x+width/2)+","+(y)+" "+(x+width/2)+","+(y)+" "+(x+width)+","+(y+height/2)+" "+(x+width/2)+","+(y+height));
            obj.setAttributeNS(null, 'fill','#FFFFFF');
            obj.setAttributeNS(null, 'stroke','#000000');
            obj.setAttributeNS(null, 'stroke-width',2);
            obj.setAttributeNS(null, 'id', idName);
            document.getElementById('svgOne').appendChild(obj);
            
            this.AddEvents(obj);
            this.AddTextObject(idName,x,y);
            this.AddPictureObject(idName,x,y);
        }
        Pregnancy (idName,x,y){
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
            
            this.AddEvents(obj);
            this.AddTextObject(idName,x,y);
            this.AddPictureObject(idName,x,y);
         
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
            
            this.AddEvents(obj);
            this.AddTextObject(idName,x,y);
            this.AddPictureObject(idName,x,y);
 
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x);
            objLine.setAttributeNS(null, 'y1', y);
            objLine.setAttributeNS(null, 'x2', x+width);
            objLine.setAttributeNS(null, 'y2', y+height);
            objLine.setAttributeNS(null, 'stroke','black');
            objLine.setAttributeNS(null, 'stroke-width',2);
            objLine.setAttributeNS(null, 'id','l'+idName);
            document.getElementById('svgOne').appendChild(objLine);

            var objLine2 = document.createElementNS(svgns, 'line');
            objLine2.setAttributeNS(null, 'x1', x);
            objLine2.setAttributeNS(null, 'y1', y+height);
            objLine2.setAttributeNS(null, 'x2', x+width);
            objLine2.setAttributeNS(null, 'y2', y);
            objLine2.setAttributeNS(null, 'stroke','black');
            objLine2.setAttributeNS(null, 'stroke-width',2);
            objLine2.setAttributeNS(null, 'id','r'+idName);
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
            
            this.AddEvents(obj);
            this.AddTextObject(idName,x,y);
            this.AddPictureObject(idName,x,y);

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

            this.AddEvents(obj);
            this.AddTextObject(idName,x,y);
            this.AddPictureObject(idName,x,y);

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

            this.AddEvents(obj);
            this.AddTextObject(idName,x,y);
            this.AddPictureObject(idName,x,y);
            
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

            this.AddEvents(obj);
            this.AddTextObject(idName,x,y);
            this.AddPictureObject(idName,x,y);
        }
        GetDataById(id){
            var result=[];
            for(var i = 0;i<this.data.length;i++){
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
                        if(p.length>0){
                            if(p[0].sex=="Male")
                            {
                                this.CMale(p[0].id,200,300);
                            }
                            else if(p[0].sex=="Female")
                            {
                                this.CFemale(p[0].id,200,300);
                            }
                        }
                   }
                   if(obj2==undefined && list[i].id2!="" ){
                    var p = this.GetDataById(list[i].id2);
                    if(p.length>0){
                        if(p[0].sex=="Male")
                        {
                            this.CMale(p[0].id,x + 150*(i+1),y);
                        }
                        else if(p[0].sex=="Female")
                        {
                            this.CFemale(p[0].id,x - 150*(i+1),y);
                        }
                    }
                    // var link = new genogramRelationship(this.spouse);
                    // link.SpouseRelationship(main.id,list[i].id2);
                    }
                }
            }
        }
        CreateRelationship(id){
            var obj = this.GetDataById(id);
            var father_id = 0;
            var mother_id = 0;
            if(obj!=null){
               if(obj.length>0){
                    father_id = obj[0].father_id;
                    mother_id = obj[0].mother_id;
                    var father = document.getElementById(father_id);
                    var mother = document.getElementById(mother_id);
                    var lineObj = document.getElementById("line"+father_id+"-"+mother_id);
                    if(lineObj==null)
                    {
                        lineObj = document.getElementById("line"+mother_id+"-"+father_id);
                    }
                    var x1=0,y1=0,x2=0,y2=0;
                    if(lineObj!=null){
                   
                    var lstChild =  this.GetChildDataById(father_id,mother_id);
                    var step = (lineObj.x2.baseVal.value-lineObj.x1.baseVal.value)/(lstChild.length+1);
                    x1= lineObj.x1.baseVal.value;
                    y1= lineObj.y1.baseVal.value;
                    var util = new Utility();
                    for(var i = 0;i<lstChild.length;i++){
                        var name = "PC"+lstChild[i].id;
                        var objChild = document.getElementById(lstChild[i].id);
                        
                        var pos = util.GetTopLeftXY(objChild);
                       
                        if(pos.length>0){
                            if(objChild.constructor.name=="SVGRectElement"){
                                x2= pos[0].x+objChild.width.baseVal.value/2;
                                y2= pos[0].y;
                            }
                            else if(objChild.constructor.name=="SVGCircleElement"){
                                x2= pos[0].x;
                                y2= pos[0].y;
                            }
                            else if(objChild.constructor.name=="SVGPolygonElement"){
                                x2= pos[0].x+(objChild.points[1].x-objChild.points[0].x);
                                y2= pos[0].y;
                            }
                            
                            var personInfo= this.GetDataById(lstChild[i].id);
                            var objLine = document.createElementNS(svgns, 'line');
                            objLine.setAttributeNS(null, 'x1', x1+((1+i)*step));
                            objLine.setAttributeNS(null, 'y1', y1);
                            objLine.setAttributeNS(null, 'x2', x2);
                            objLine.setAttributeNS(null, 'y2', y2);
                            objLine.setAttributeNS(null, 'stroke','black');
                            if(personInfo.length>0){
                                if(personInfo[0].child_type!=null){
                                    if(personInfo[0].child_type=="adopted_child"){
                                        objLine.setAttributeNS(null, 'stroke','blue');
                                        objLine.setAttributeNS(null, 'stroke-dasharray','8 2 8 2');
                                    }
                                    else if(personInfo[0].child_type=="foster_child"){
                                        objLine.setAttributeNS(null, 'stroke','green');
                                        objLine.setAttributeNS(null, 'stroke-dasharray','3 5 3 5');
                                        
                                    }
                                }
                            }
                          
                            objLine.setAttributeNS(null, 'stroke-width',2);
                            objLine.setAttributeNS(null,"id","line"+name);
                            document.getElementById('svgOne').appendChild(objLine);
                        }
                    }
                }
               }
            }
            
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
            var svg = document.getElementById('svgOne');
            var pt = svg.createSVGPoint();
            svg.addEventListener("mousemove",function(ev){
                pt.x = ev.clientX; pt.y = ev.clientY;
                var loc = pt.matrixTransform(svg.getScreenCTM().inverse());
                document.title = "x:" +loc.x +" ,y:"+loc.y;
            });
            //this.CreateLineMidium();
            var level = 0;
            var result=this.GetDataById(id);
            var dataFather = this.GetDataById(result[0].father_id);
            if(dataFather!=null){
                this.CMale(dataFather[0].id,200,200);
                this.lstObjLevel.push(dataFather[0].id);
                this.GetFamilyDetail(dataFather[0].id,level+1);
                this.lstObjLevelInt = this.lstObjLevel.map(x=>+x);
                this.lstObjLevelIntSort= this.lstObjLevelInt.sort(function(a,b){return a-b});
                for(var i = 0;i<this.lstObjLevelIntSort.length;i++)
                {
                    this.AdjustPosition(this.lstObjLevelIntSort[i],level);
                    level=level+1;
                   // this.CreateRelationship(this.lstObjLevel[i])
                }
                var rel = new genogramRelationship(this.spouse);
                rel.CreateSpouseRelationship();
                for(var i = 0;i<this.lstObjLevelIntSort.length;i++)
                {
                    this.CreateRelationship(this.lstObjLevelIntSort[i])
                }
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
                        this.CMale(id,100+(100*index),(120*(level+1)));
                    }
                    else if(data[0].sex=="Female"){
                        this.CFemale(id,100+(100*index),(120*(level+1)));
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
                        this.lstObjLevel.push(dataChilds[0].id);
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
        AdjustPosition(id,level){
            
            var x1 = 0;
            var y1 = 0;
            var x2 = 0;
            var y2 = 0;
            
            var obj = document.getElementById(id);
            var util =new Utility();
            var data = util.GetTopLeftXY(obj);
            var objlst =[];
            if(data.length>0){
                x1= data[0].x;
                y1= data[0].y;
            }
            if(obj!=null){
            var lst = obj.nextSibling.ownerSVGElement.childNodes;
            for(var i = 0;i<lst.length;i++){
                x2=0;
                y2=0;
                if(lst[i].constructor.name=="SVGRectElement"){
                    var data = util.GetTopLeftXY(lst[i]);
                    if(data.length>0)
                    {
                        //x2 = data[0].x;
                        y2 = data[0].y;
                    }
                } else if(lst[i].constructor.name=="SVGCircleElement"){
                    var data = util.GetTopLeftXY(lst[i]);
                    if(data.length>0)
                    {
                        //x2 = data[0].x;
                        y2 = lst[i].cy.baseVal.value-lst[i].r.baseVal.value;
                    }
                } else if(lst[i].constructor.name=="SVGPolygonElement"){
                    var data = util.GetTopLeftXY(lst[i]);
                    if(data.length>0)
                    {
                        //x2 = data[0].x;
                        y2 = data[0].y;
                    }
                }
                if(y1==y2){
                    objlst.push(lst[i]);
                }
                //console.log(lst[i].constructor.name);
            }
            var lstParent =[];
            for(var i = 0;i<objlst.length;i++){
                var id = objlst[i].id;
                var personData = this.GetDataById(id);
                if(personData.length>0){
                    lstParent.push({
                                    "data":personData[0].father_id+","+personData[0].mother_id
                                   });
                }
            }
            var tmp = Array.from(new Set(lstParent.map(s=>s.data)))
            .map((data)=>{return {
                data:data
            }});
            var lstSameLevel =[];
            for(var j=0;j<tmp.length;j++)
            {
                lstSameLevel=[];
            var lineX1=0,lineX2=0,lineY1=0,lineY2=0;
            var father_id=0,mother_id=0;
                father_id = tmp[j].data.split(',')[0];
                mother_id = tmp[j].data.split(',')[1];
            var lstChildsAndSpouse  =  this.GetlstChildsAndSpouse(father_id,mother_id);
            var util = new Utility();
            var father = document.getElementById(father_id);
            var mother = document.getElementById(mother_id);
            if(father!=null && mother !=null){
                var posFather = util.GetTopLeftXY(father);
                var fwidth = util.GetWidthObject(father);
                var fheight = util.GetHeightObject(father);
                if(posFather.length>0){
                    lineX1=posFather[0].x+(fwidth/2);
                    lineY1=posFather[0].y+fheight;
                }
                
                var posMother = util.GetTopLeftXY(mother);
                if(posMother.length>0){
                    lineX2=posMother[0].x;
                    lineY2=posMother[0].y+fheight/2;
                }
                for(var i = 0;i<lstChildsAndSpouse.length;i++){
                    var obj = document.getElementById(lstChildsAndSpouse[i].id);
                    if(obj!=null)
                    {
                        lstSameLevel.push(obj);
                    }
                }
                
            }
            else{
                if(level==0)
                {
                    lstSameLevel = objlst;
                }
            }
            var objSvg = document.getElementById("svgOne");
            var width = objSvg.width.baseVal.value;
            var height = objSvg.height.baseVal.value;
           // var medium = (width)*0.9/2;
           var medium = objSvg.width.baseVal.value/2;
           console.log('medium:'+medium);
            if(father!=null && mother!=null){
                width = (lineX2 - lineX1)*2.5;
                medium = (lineX1+lineX2)/2;
            }
           
            
            if(lstSameLevel.length>0){
                //var beginX = (medium/objlst.length);
                
                var distinct = (width)/(lstSameLevel.length+1);
                //var beginX = width*0.025+distinct;
                var beginX = distinct-25;
                var widthObj = util.GetWidthObject(obj);
                if(father!=null && mother!=null){
                    //width = (lineX2 - lineX1);
                    //medium = (lineX1+lineX2)/2;
                    distinct = (width)/(lstSameLevel.length+1);
                    if(distinct<100)
                    {
                        distinct = 100;
                    }
                    //beginX = distinct;
                    //distinct = 150;
                    var space = (((widthObj)/2+((lstSameLevel.length-1)*distinct)/2));
                    beginX = medium - space;
                    console.log("lineX1:"+lineX1);
                    console.log("lineX2:"+lineX2);
                    console.log("medium:"+medium);
                    console.log("space:"+space);
                    console.log("objlst:"+lstSameLevel.length);
                    console.log("widthObj:"+widthObj);
                    console.log("width:"+width);
                    console.log("beginX:"+beginX);
                    console.log("distinct:"+distinct);
                }
                // var beginX = width*0.05+distinct;
                //var distinct = 100;
                // var widthObj = util.GetWidthObject(obj);
                //var beginX = medium - (objlst.length*widthObj+objlst.length*distinct-distinct)/2;
                //var beginX = width*0.05+150;
                //alert(beginX);
                for(var i=0;i<lstSameLevel.length;i++){

                    if(lstSameLevel[i].constructor.name=="SVGRectElement")
                    {
                        lstSameLevel[i].x.baseVal.value=beginX+(i*distinct);
                        var l=document.getElementById("l"+lstSameLevel[i].id);
                        var r=document.getElementById("r"+lstSameLevel[i].id);
                        var objTxt = document.getElementById("txt"+lstSameLevel[i].id);
                        var objImage = document.getElementById("image"+lstSameLevel[i].id);
                        if(objImage!=null){
                            objImage.x.baseVal.value=  lstSameLevel[i].x.baseVal.value+(lstSameLevel[i].width.baseVal.value/2)-(objImage.width.baseVal.value/2);
                            objImage.y.baseVal.value=  lstSameLevel[i].y.baseVal.value+(lstSameLevel[i].height.baseVal.value/2)-(objImage.height.baseVal.value/2);
                       
                        }
                        if(objTxt!=null){
                            objTxt.x.baseVal[0].value=  lstSameLevel[i].x.baseVal.value+(lstSameLevel[i].width.baseVal.value/2)-(objTxt.textLength.baseVal.value/2);
                            objTxt.y.baseVal[0].value=  lstSameLevel[i].y.baseVal.value+(lstSameLevel[i].height.baseVal.value/2)-(objTxt.getBBox().height/2);
                        } 
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
                    else if(lstSameLevel[i].constructor.name=="SVGCircleElement"){
                        lstSameLevel[i].cx.baseVal.value=beginX+(i*distinct)+25;
                        var l=document.getElementById("l"+lstSameLevel[i].id);
                        var r=document.getElementById("r"+lstSameLevel[i].id);
                        var objTxt = document.getElementById("txt"+lstSameLevel[i].id);
                        if(objTxt!=null){
                            objTxt.x.baseVal[0].value = lstSameLevel[i].cx.baseVal.value-(objTxt.textLength.baseVal.value/2);;
                            objTxt.y.baseVal[0].value = lstSameLevel[i].cy.baseVal.value-(objTxt.getBBox().height/2);;
                        }
                        var objImage = document.getElementById("image"+lstSameLevel[i].id);
                        if(objImage!=null){
                            objImage.x.baseVal.value=  lstSameLevel[i].cx.baseVal.value -(objImage.width.baseVal.value/2);
                            objImage.y.baseVal.value=  lstSameLevel[i].cy.baseVal.value -(objImage.height.baseVal.value/2);
                       
                        }
                        if(l!=null)
                        {
                            l.x1.baseVal.value = beginX+(i*distinct);
                            l.x2.baseVal.value = beginX+(i*distinct)+50;
                        }
                        if(r!=null)
                        {
                            r.x1.baseVal.value = beginX+(i*distinct);
                            r.x2.baseVal.value = beginX+(i*distinct)+50;
                        }
                    }
                    else if(lstSameLevel[i].constructor.name=="SVGPolygonElement"){
                        lstSameLevel[i].points[0].x=beginX+(i*distinct);
                        lstSameLevel[i].points[1].x=beginX+(i*distinct)+25;
                        lstSameLevel[i].points[2].x=beginX+(i*distinct)+50;
                        var l=document.getElementById("l"+lstSameLevel[i].id);
                        var r=document.getElementById("r"+lstSameLevel[i].id);
                        var objTxt = document.getElementById("txt"+lstSameLevel[i].id);
                        if(objTxt!=null){
                            objTxt.x.baseVal[0].value = beginX+(i*distinct)+25;
                            objTxt.y.baseVal[0].value = lstSameLevel[i].points[1].y;
                        }
                        var objImage = document.getElementById("image"+lstSameLevel[i].id);
                        if(objImage!=null){
                            objImage.x.baseVal.value=  beginX+(i*distinct)+25 -(objImage.width.baseVal.value/2);
                            objImage.y.baseVal.value=  lstSameLevel[i].points[1].y+(objImage.height.baseVal.value/2);
                       
                        }
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
                }
                }
            }
        }
            console.log(objlst);
            //main.nextSibling.ownerSVGElement.childNodes
        }
        GetlstChildsAndSpouse(father_id,mother_id)
        {
            var result = [];
            var data = this.GetChildDataById(father_id,mother_id);
            for(var i =0;i<data.length;i++){
                result.push(data[i]);
                var tmp = this.FindSpouse(data[i].id,this.spouse);
                if(tmp.length>0){
                    var p = [];
                    if(tmp[0].id1==data[i].id)
                    {
                        p = this.GetDataById(tmp[0].id2);
                        if(p.length>0){
                            result.push(p[0]);
                        }
                    }
                    else if(tmp[0].id2==data[i].id){
                        p = this.GetDataById(tmp[0].id1);
                        if(p.length>0){
                            result.push(p[0]);
                        }
                    }
                }
            }
            
            return result;
        }
        CreateLineMidium()
        {
            var svg = document.getElementById('svgOne')
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', svg.width.baseVal.value/2);
            objLine.setAttributeNS(null, 'y1', svg.y.baseVal.value);
            objLine.setAttributeNS(null, 'x2', svg.width.baseVal.value/2);
            objLine.setAttributeNS(null, 'y2', svg.y.baseVal.value+svg.height.baseVal.value);
            objLine.setAttributeNS(null, 'stroke','black');
            objLine.setAttributeNS(null, 'stroke-width',2);
            objLine.setAttributeNS(null,"id","line"+name);
            svg.appendChild(objLine);
        }
        AddPictureObject(idName,x,y){
            var data = this.GetDataById(idName);
            var width=30;
            var height=30;
            var objImage = document.createElementNS(svgns, 'image');
            objImage.innerHTML=idName;
            objImage.setAttributeNS(null,'x',x);
            objImage.setAttributeNS(null,'y',y);
            if(data.length>0){
                if(data[0].picture!=null){
                    objImage.setAttributeNS(null,'href',data[0].picture);
                    objImage.setAttributeNS(null,"height",height);
                    objImage.setAttributeNS(null,"width",width);
                }
                objImage.setAttributeNS(null, 'id', "image"+idName);
                document.getElementById('svgOne').appendChild(objImage);
                this.AddEvents(objImage);
            }
        }
        AddTextObject(idName,x,y){
            var objtxt = document.createElementNS(svgns, 'text');
            objtxt.innerHTML=idName;
            objtxt.setAttributeNS(null,'x',x);
            objtxt.setAttributeNS(null,'y',y);
            objtxt.setAttributeNS(null, 'id', "txt"+idName);
            document.getElementById('svgOne').appendChild(objtxt);
        }
        AddEvents(obj){
            if(obj!=null){
                obj.addEventListener("click",function(e){    
                    alert(idName);
                });
                obj.addEventListener("mouseout",function(){
                });
            }
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
     AddLineRelation(x1,y1,x2,y2,name,relation)
     {
        var objLine = document.createElementNS(svgns, 'line');
        if(relation=="Marriage")
        {
            objLine.setAttributeNS(null, 'x1', x1);
            objLine.setAttributeNS(null, 'y1', y1);
            objLine.setAttributeNS(null, 'x2', x2);
            objLine.setAttributeNS(null, 'y2', y2);
            objLine.setAttributeNS(null, 'stroke','black');
            objLine.setAttributeNS(null, 'stroke-width',2);
            objLine.setAttributeNS(null,"id","line"+name);
            document.getElementById('svgOne').appendChild(objLine)
        }
        else if(relation=="Engagement")
        {
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x1);
            objLine.setAttributeNS(null, 'y1', y1);
            objLine.setAttributeNS(null, 'x2', x2);
            objLine.setAttributeNS(null, 'y2', y2);
            objLine.setAttributeNS(null, 'stroke','blue');
            objLine.setAttributeNS(null, 'stroke-width',2);
            objLine.setAttributeNS(null, 'stroke-dasharray',"10 5 10 5");
            objLine.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objLine)
             
        }
        else if(relation=="EngagementAndCohabitation")
        {
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x1);
            objLine.setAttributeNS(null, 'y1', y1);
            objLine.setAttributeNS(null, 'x2', x2);
            objLine.setAttributeNS(null, 'y2', y2);
            objLine.setAttributeNS(null, 'stroke','blue');
            objLine.setAttributeNS(null, 'stroke-width',2);
            objLine.setAttributeNS(null, 'stroke-dasharray',"10 5 10 5");
            objLine.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objLine)
            
        }
        else if(relation=="EngagementAndSeparation")
        {
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', ((x1+x2)/2)-10);
            objLine.setAttributeNS(null, 'y1', y1-10);
            objLine.setAttributeNS(null, 'x2', ((x1+x2)/2)+10);
            objLine.setAttributeNS(null, 'y2', y2+10);
            objLine.setAttributeNS(null, 'stroke','blue');
            objLine.setAttributeNS(null, 'stroke-width',2);
            objLine.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objLine);
        }
        else if(relation=="Nullity"){

            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x1);
            objLine.setAttributeNS(null, 'y1', y1);
            objLine.setAttributeNS(null, 'x2', x2);
            objLine.setAttributeNS(null, 'y2', y2);
            objLine.setAttributeNS(null, 'stroke','#810d00');
            objLine.setAttributeNS(null, 'stroke-width',2);
            objLine.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objLine);

            var objM1 = document.createElementNS(svgns, 'line');
            objM1.setAttributeNS(null, 'x1', ((x1+x2)/2)+10-10);
            objM1.setAttributeNS(null, 'y1', y1-10);
            objM1.setAttributeNS(null, 'x2', ((x1+x2)/2)-10-10);
            objM1.setAttributeNS(null, 'y2', y2+10);
            objM1.setAttributeNS(null, 'stroke','#810d00');
            objM1.setAttributeNS(null, 'stroke-width',2);
            objM1.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objM1);
    
            var objM2 = document.createElementNS(svgns, 'line');
            objM2.setAttributeNS(null, 'x1', ((x1+x2)/2)+10);
            objM2.setAttributeNS(null, 'y1', y1-10);
            objM2.setAttributeNS(null, 'x2', ((x1+x2)/2)-10);
            objM2.setAttributeNS(null, 'y2', y2+10);
            objM2.setAttributeNS(null, 'stroke','#810d00');
            objM2.setAttributeNS(null, 'stroke-width',2);
            objM2.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objM2);
    
            var objM3 = document.createElementNS(svgns, 'line');
            objM3.setAttributeNS(null, 'x1', ((x1+x2)/2)+10+10);
            objM3.setAttributeNS(null, 'y1', y1-10);
            objM3.setAttributeNS(null, 'x2', ((x1+x2)/2)-10+10);
            objM3.setAttributeNS(null, 'y2', y2+10);
            objM3.setAttributeNS(null, 'stroke','#810d00');
            objM3.setAttributeNS(null, 'stroke-width',2);
            objM3.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objM3);
    
        }
        else if(relation=="LegalCohabitation"){
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x1);
            objLine.setAttributeNS(null, 'y1', y1);
            objLine.setAttributeNS(null, 'x2', x2);
            objLine.setAttributeNS(null, 'y2', y2);
            objLine.setAttributeNS(null, 'stroke','blue');
            objLine.setAttributeNS(null, 'stroke-width',2);
            objLine.setAttributeNS(null, 'stroke-dasharray',"8 3 3 3");
            objLine.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objLine);
        }
        else if(relation=="LegalCohabitationAndSeparationInFact"){
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x1);
            objLine.setAttributeNS(null, 'y1', y1);
            objLine.setAttributeNS(null, 'x2', x2);
            objLine.setAttributeNS(null, 'y2', y2);
            objLine.setAttributeNS(null, 'stroke','blue');
            objLine.setAttributeNS(null, 'stroke-width',2);
            objLine.setAttributeNS(null, 'stroke-dasharray',"8 3 3 3");
            objLine.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objLine);

            var objM = document.createElementNS(svgns, 'line');
            objM.setAttributeNS(null, 'x1', ((x1+x2)/2)-10);
            objM.setAttributeNS(null, 'y1', y1-10);
            objM.setAttributeNS(null, 'x2', ((x1+x2)/2)+10);
            objM.setAttributeNS(null, 'y2', y2+10);
            objM.setAttributeNS(null, 'stroke','blue');
            objM.setAttributeNS(null, 'stroke-width',2);
            objM.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objM);
    
        }
        else if(relation=="LegalCohabitationAndOfficialSeparation"){

            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x1);
            objLine.setAttributeNS(null, 'y1', y1);
            objLine.setAttributeNS(null, 'x2', x2);
            objLine.setAttributeNS(null, 'y2', y2);
            objLine.setAttributeNS(null, 'stroke','blue');
            objLine.setAttributeNS(null, 'stroke-width',2);
            objLine.setAttributeNS(null, 'stroke-dasharray',"8 3 3 3");
            objLine.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objLine);
    
            var objM = document.createElementNS(svgns, 'line');
            objM.setAttributeNS(null, 'x1', ((x1+x2)/2)+10);
            objM.setAttributeNS(null, 'y1', y1-10);
            objM.setAttributeNS(null, 'x2', ((x1+x2)/2)-10);
            objM.setAttributeNS(null, 'y2', y2+10);
            objM.setAttributeNS(null, 'stroke','blue');
            objM.setAttributeNS(null, 'stroke-width',2);
            objM.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objM);
    
        }
        else if(relation=="CommitedRelationShip"){
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x1);
            objLine.setAttributeNS(null, 'y1', y1);
            objLine.setAttributeNS(null, 'x2', x2);
            objLine.setAttributeNS(null, 'y2', y2);
            objLine.setAttributeNS(null, 'stroke','blue');
            objLine.setAttributeNS(null, 'stroke-width',2);
            objLine.setAttributeNS(null, 'stroke-dasharray',"5 5 5");
            objLine.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objLine);
        }
        else if(relation=="Cohabitation"){
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x1);
            objLine.setAttributeNS(null, 'y1', y1);
            objLine.setAttributeNS(null, 'x2', x2);
            objLine.setAttributeNS(null, 'y2', y2);
            objLine.setAttributeNS(null, 'stroke','blue');
            objLine.setAttributeNS(null, 'stroke-width',2);
            objLine.setAttributeNS(null, 'stroke-dasharray',"5 2 2 2 2 2");
            objLine.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objLine);
    
        }
        else if(relation=="CohabitationAndSeparation"){
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x1);
            objLine.setAttributeNS(null, 'y1', y1);
            objLine.setAttributeNS(null, 'x2', x2);
            objLine.setAttributeNS(null, 'y2', y2);
            objLine.setAttributeNS(null, 'stroke','blue');
            objLine.setAttributeNS(null, 'stroke-width',2);
            objLine.setAttributeNS(null, 'stroke-dasharray',"5 5 5");
            objLine.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objLine);
        }
        else if(relation=="NonSentimentalCohabitation"){
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x1);
            objLine.setAttributeNS(null, 'y1', y1);
            objLine.setAttributeNS(null, 'x2', x2);
            objLine.setAttributeNS(null, 'y2', y2);
            objLine.setAttributeNS(null, 'stroke','blue');
            objLine.setAttributeNS(null, 'stroke-width',2);
            objLine.setAttributeNS(null, 'stroke-dasharray',"2 2 2 2 5 2");
            objLine.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objLine);
    
        }
        else if(relation=="NonSentimentalCohabitationAndSeparation"){
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x1);
            objLine.setAttributeNS(null, 'y1', y1);
            objLine.setAttributeNS(null, 'x2', x2);
            objLine.setAttributeNS(null, 'y2', y2);
            objLine.setAttributeNS(null, 'stroke','blue');
            objLine.setAttributeNS(null, 'stroke-width',2);
            objLine.setAttributeNS(null, 'stroke-dasharray',"2 2 2 2 5 2");
            objLine.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objLine); 

            var objM = document.createElementNS(svgns, 'line');
            objM.setAttributeNS(null, 'x1', ((x1+x2)/2)-10);
            objM.setAttributeNS(null, 'y1', y1-10);
            objM.setAttributeNS(null, 'x2', ((x1+x2)/2)+10);
            objM.setAttributeNS(null, 'y2', y2+10);
            objM.setAttributeNS(null, 'stroke','blue');
            objM.setAttributeNS(null, 'stroke-width',2);
            objM.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objM);   
        }
        else if(relation=="CasualRelationshipOrDating"){
            
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x1);
            objLine.setAttributeNS(null, 'y1', y1);
            objLine.setAttributeNS(null, 'x2', x2);
            objLine.setAttributeNS(null, 'y2', y2);
            objLine.setAttributeNS(null, 'stroke','blue');
            objLine.setAttributeNS(null, 'stroke-width',2);
            objLine.setAttributeNS(null, 'stroke-dasharray',"2 2 2");
            objLine.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objLine);
    
        }
        else if(relation=="CasualRelationshipAndSeparation"){
            
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x1);
            objLine.setAttributeNS(null, 'y1', y1);
            objLine.setAttributeNS(null, 'x2', x2);
            objLine.setAttributeNS(null, 'y2', y2);
            objLine.setAttributeNS(null, 'stroke','blue');
            objLine.setAttributeNS(null, 'stroke-width',2);
            objLine.setAttributeNS(null, 'stroke-dasharray',"2 2 2");
            objLine.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objLine);
        }
        else if(relation=="TemporaryRelationOneNightStand"){
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x1);
            objLine.setAttributeNS(null, 'y1', y1);
            objLine.setAttributeNS(null, 'x2', x2);
            objLine.setAttributeNS(null, 'y2', y2);
            objLine.setAttributeNS(null, 'stroke','blue');
            objLine.setAttributeNS(null, 'stroke-width',2);
            objLine.setAttributeNS(null, 'stroke-dasharray',"2 6 6 6");
            objLine.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objLine);
        }
        else if(relation=="Divorce"){
        
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x1);
            objLine.setAttributeNS(null, 'y1', y1);
            objLine.setAttributeNS(null, 'x2', x2);
            objLine.setAttributeNS(null, 'y2', y2);
            objLine.setAttributeNS(null, 'stroke','#810d00');
            objLine.setAttributeNS(null, 'stroke-width',2); 
            objLine.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objLine);

            var objM1 = document.createElementNS(svgns, 'line');
            objM1.setAttributeNS(null, 'x1', ((x1+x2)/2)+5);
            objM1.setAttributeNS(null, 'y1', y1-10);
            objM1.setAttributeNS(null, 'x2', ((x1+x2)/2)-15);
            objM1.setAttributeNS(null, 'y2', y2+10);
            objM1.setAttributeNS(null, 'stroke','#810d00');
            objM1.setAttributeNS(null, 'stroke-width',2); 
            objM1.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objM1);

            var objM2 = document.createElementNS(svgns, 'line');
            objM2.setAttributeNS(null, 'x1', ((x1+x2)/2)+15);
            objM2.setAttributeNS(null, 'y1', y1-10);
            objM2.setAttributeNS(null, 'x2', ((x1+x2)/2)-5);
            objM2.setAttributeNS(null, 'y2', y2+10);
            objM2.setAttributeNS(null, 'stroke','#810d00');
            objM2.setAttributeNS(null, 'stroke-width',2); 
            objM2.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objM2);

        }
        else if(relation=="SeparationInFact"){
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x1);
            objLine.setAttributeNS(null, 'y1', y1);
            objLine.setAttributeNS(null, 'x2', x2);
            objLine.setAttributeNS(null, 'y2', y2);
            objLine.setAttributeNS(null, 'stroke','#810d00');
            objLine.setAttributeNS(null, 'stroke-width',2); 
            objLine.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objLine);
    
            var objM = document.createElementNS(svgns, 'line');
            objM.setAttributeNS(null, 'x1', ((x1+x2)/2)-10);
            objM.setAttributeNS(null, 'y1', y1-10);
            objM.setAttributeNS(null, 'x2', ((x1+x2)/2)+10);
            objM.setAttributeNS(null, 'y2', y2+10);
            objM.setAttributeNS(null, 'stroke','#810d00');
            objM.setAttributeNS(null, 'stroke-width',2); 
            objM.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objM);
        }
        else if(relation=="LegalSeparation")   {
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x1);
            objLine.setAttributeNS(null, 'y1', y1);
            objLine.setAttributeNS(null, 'x2', x2);
            objLine.setAttributeNS(null, 'y2', y2);
            objLine.setAttributeNS(null, 'stroke','#810d00');
            objLine.setAttributeNS(null, 'stroke-width',2);
            objLine.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objLine);
        }
        else if(relation=="LoveAffair"){
            var objLine = document.createElementNS(svgns, 'line');
            objLine.setAttributeNS(null, 'x1', x1);
            objLine.setAttributeNS(null, 'y1', y1);
            objLine.setAttributeNS(null, 'x2', x2);
            objLine.setAttributeNS(null, 'y2', y2);
            objLine.setAttributeNS(null, 'stroke','pink');
            objLine.setAttributeNS(null, 'stroke-width',2);
            objLine.setAttributeNS(null, 'stroke-dasharray',"2 6 6 6");
            objLine.setAttributeNS(null,'id','line'+name);
            document.getElementById('svgOne').appendChild(objLine);
        }
     }
     AddLineLeftRight(x1,y1,x2,y2,distinct){
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
        objLine1.setAttributeNS(null,"id","lineLeft"+name);
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
        objLine2.setAttributeNS(null,"id","lineRight"+name);
        document.getElementById('svgOne').appendChild(objLine2);
     }
     AddHomeObject(o)
     {
        var cx= (o.x1+o.x2)/2;
        var cy= o.y1;
        var objHome = document.createElementNS(svgns, 'polygon');
        objHome.setAttributeNS(null, 'cx', cx);
        objHome.setAttributeNS(null, 'cy', cy);
        objHome.setAttributeNS(null, 'points',  (cx-10)+","+(cy-5)+" "+(cx)+","+(cy-10)+" "+(cx+10)+","+(cy-5)+" "+(cx+10)+","+(cy+5)+" "+(cx-10)+","+(cy+5));
        objHome.setAttributeNS(null, 'fill','#FFFFFF');
        objHome.setAttributeNS(null, 'stroke','blue');
        objHome.setAttributeNS(null, 'stroke-width',2);
        objHome.setAttributeNS(null,'id','poly'+name);
        document.getElementById('svgOne').appendChild(objHome);
     }
     AddSeparationObject(o,color){
        var x1=o.x1;
        var x2=o.x2;
        var y1=o.y1;
        var y2=o.y2;
        var objM = document.createElementNS(svgns, 'line');
        objM.setAttributeNS(null, 'x1', ((x1+x2)/2)-10);
        objM.setAttributeNS(null, 'y1', y1-10);
        objM.setAttributeNS(null, 'x2', ((x1+x2)/2)+10);
        objM.setAttributeNS(null, 'y2', y2+10);
        objM.setAttributeNS(null, 'stroke',color);
        objM.setAttributeNS(null, 'stroke-width',2);
        objM.setAttributeNS(null,'id','line'+name);
        document.getElementById('svgOne').appendChild(objM);   
     }
     GetDetailObject(objId1,objId2)
     {
        var name =objId1+"-"+objId2;
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
        return [
                {"x1":x1,
                 "y1":y1,
                 "x2":x2,
                 "y2":y2,
                 "distinct":distinct,
                 "name":name
                }
               ];
     }
     SpouseRelationship(objId1,objId2){
        var obj1 = document.getElementById(objId1);
        var obj2 = document.getElementById(objId2);
        if(obj1!=null && obj2!=null){
            var result = this.spouse.filter(element=>element.id1==objId1 && element.id2==objId2);
            if(result.length>0){
                if(result[0].relationStatus=="marriage"){
                    this.Marriage(objId1,objId2);
                }
                else if(result[0].relationStatus=="separation_in_fact"){
                    this.SeparationInFact(objId1,objId2);
                }
                else if(result[0].relationStatus=="legal_separation"){
                    this.LegalSeparation(objId1,objId2);
                }
                else if(result[0].relationStatus=="divorce"){
                    this.Divorce(objId1,objId2);
                }
                else if(result[0].relationStatus=="engagement"){
                    this.Engagement(objId1,objId2);
                }
                else if(result[0].relationStatus=="engagement_and_cohabitation"){
                    this.EngagementAndCohabitation(objId1,objId2);
                }
                else if(result[0].relationStatus=="engagement_and_separation"){
                    this.EngagementAndSeparation(objId1,objId2);
                }
                else if(result[0].relationStatus=="nullity"){
                    this.Nullity(objId1,objId2);
                }
                else if(result[0].relationStatus=="legal_cohabitation"){
                    this.LegalCohabitation(objId1,objId2);
                }
                else if(result[0].relationStatus=="legal_cohabitation_and_separation_in_fact"){
                    this.LegalCohabitationAndSeparationInFact(objId1,objId2);
                }
                else if(result[0].relationStatus=="legal_cohabitation_and_official_separation"){
                    this.LegalCohabitationAndOfficialSeparation(objId1,objId2);
                }
                else if(result[0].relationStatus=="commited_relationship"){
                    this.CommitedRelationShip(objId1,objId2);
                }
                else if(result[0].relationStatus=="cohabitation"){
                    this.Cohabitation(objId1,objId2);
                }
                else if(result[0].relationStatus=="cohabitation_and_separation"){
                    this.CohabitationAndSeparation(objId1,objId2);
                }
                else if(result[0].relationStatus=="non_sentimental_cohabitation"){
                    this.NonSentimentalCohabitation(objId1,objId2);
                }
                else if(result[0].relationStatus=="non_sentimental_cohabitation_and_separation"){
                    this.NonSentimentalCohabitationAndSeparation(objId1,objId2);
                }
                else if(result[0].relationStatus=="casual_relationship_or_dating"){
                    this.CasualRelationshipOrDating(objId1,objId2);
                }
                else if(result[0].relationStatus=="casual_relationship_and_separation"){
                    this.CasualRelationshipAndSeparation(objId1,objId2);
                }
                else if(result[0].relationStatus=="temporary_relation_one_night_stand"){
                    this.TemporaryRelationOneNightStand(objId1,objId2);
                }
                else if(result[0].relationStatus=="love_affair"){
                    this.LoveAffair(objId1,objId2);
                }
            }
        }
        //alert(JSON.stringify(result));
     }
     Marriage(objId1,objId2){
         
         var relation="Marriage";
         var obj = this.GetDetailObject(objId1,objId2);
         if(obj.length>0)
         {
            var o = obj[0];
            this.AddLineRelation(o.x1,o.y1,o.x2,o.y2,o.name,relation);
            this.AddLineLeftRight(o.x1,o.y1,o.x2,o.y2,o.distinct);
         }

     }
     Engagement(objId1,objId2){
        var relation="Engagement";
        var obj = this.GetDetailObject(objId1,objId2);
        if(obj.length>0)
        {
            var o = obj[0];
            this.AddLineRelation(o.x1,o.y1,o.x2,o.y2,o.name,relation);
            this.AddLineLeftRight(o.x1,o.y1,o.x2,o.y2,o.distinct);
        }
     }
     EngagementAndCohabitation(objId1,objId2){
        var relation="EngagementAndCohabitation";
        var obj = this.GetDetailObject(objId1,objId2);
        if(obj.length>0)
        {
            var o = obj[0];
            this.AddLineRelation(o.x1,o.y1,o.x2,o.y2,o.name,relation);
            this.AddLineLeftRight(o.x1,o.y1,o.x2,o.y2,o.distinct);
            this.AddHomeObject(o);
        }
     }
     EngagementAndSeparation(objId1,objId2){

        var relation="EngagementAndSeparation";
        var obj = this.GetDetailObject(objId1,objId2);
        if(obj.length>0)
        {
            var o = obj[0];
            this.AddLineRelation(o.x1,o.y1,o.x2,o.y2,o.name,relation);
            this.AddLineLeftRight(o.x1,o.y1,o.x2,o.y2,o.distinct);
        }
     }
     Nullity(objId1,objId2){
        var relation="Nullity";
        var obj = this.GetDetailObject(objId1,objId2);
        if(obj.length>0)
        {
            var o = obj[0];
            this.AddLineRelation(o.x1,o.y1,o.x2,o.y2,o.name,relation);
            this.AddLineLeftRight(o.x1,o.y1,o.x2,o.y2,o.distinct);
        }
     }
     LegalCohabitation(objId1,objId2){
        var relation="LegalCohabitation";
        var obj = this.GetDetailObject(objId1,objId2);
        if(obj.length>0)
        {
            var o = obj[0];
            this.AddLineRelation(o.x1,o.y1,o.x2,o.y2,o.name,relation);
            this.AddLineLeftRight(o.x1,o.y1,o.x2,o.y2,o.distinct);
            this.AddHomeObject(o);
        }
     }
     LegalCohabitationAndSeparationInFact(objId1,objId2){
        var relation="LegalCohabitationAndSeparationInFact";
        var obj = this.GetDetailObject(objId1,objId2);
        if(obj.length>0)
        {
            var o = obj[0];
            this.AddLineRelation(o.x1,o.y1,o.x2,o.y2,o.name,relation);
            this.AddLineLeftRight(o.x1,o.y1,o.x2,o.y2,o.distinct);
        }
     }
     LegalCohabitationAndOfficialSeparation(objId1,objId2){
        var relation="LegalCohabitationAndOfficialSeparation";
        var obj = this.GetDetailObject(objId1,objId2);
        if(obj.length>0)
        {
            var o = obj[0];
            this.AddLineRelation(o.x1,o.y1,o.x2,o.y2,o.name,relation);
            this.AddLineLeftRight(o.x1,o.y1,o.x2,o.y2,o.distinct);
        }
     }
     CommitedRelationShip(objId1,objId2){
        var relation="CommitedRelationShip";
        var obj = this.GetDetailObject(objId1,objId2);
        if(obj.length>0)
        {
            var o = obj[0];
            this.AddLineRelation(o.x1,o.y1,o.x2,o.y2,o.name,relation);
            this.AddLineLeftRight(o.x1,o.y1,o.x2,o.y2,o.distinct);
        }
     }
     Cohabitation(objId1,objId2){
        var relation="Cohabitation";
        var obj = this.GetDetailObject(objId1,objId2);
        if(obj.length>0)
        {
            var o = obj[0];
            this.AddLineRelation(o.x1,o.y1,o.x2,o.y2,o.name,relation);
            this.AddLineLeftRight(o.x1,o.y1,o.x2,o.y2,o.distinct);
            this.AddHomeObject(o);
        } 
     }
     CohabitationAndSeparation(objId1,objId2){
        var relation="CohabitationAndSeparation";
        var obj = this.GetDetailObject(objId1,objId2);
        if(obj.length>0)
        {
            var o = obj[0];
            this.AddLineRelation(o.x1,o.y1,o.x2,o.y2,o.name,relation);
            this.AddLineLeftRight(o.x1,o.y1,o.x2,o.y2,o.distinct);
            this.AddSeparationObject(o,"blue");
        } 
     }
     NonSentimentalCohabitation(objId1,objId2){
        var relation="NonSentimentalCohabitation";
        var obj = this.GetDetailObject(objId1,objId2);
        if(obj.length>0)
        {
            var o = obj[0];
            this.AddLineRelation(o.x1,o.y1,o.x2,o.y2,o.name,relation);
            this.AddLineLeftRight(o.x1,o.y1,o.x2,o.y2,o.distinct);
            this.AddHomeObject(o);
        } 
     }
     NonSentimentalCohabitationAndSeparation(objId1,objId2){
        var relation="NonSentimentalCohabitationAndSeparation";
        var obj = this.GetDetailObject(objId1,objId2);
        if(obj.length>0)
        {
            var o = obj[0];
            this.AddLineRelation(o.x1,o.y1,o.x2,o.y2,o.name,relation);
            this.AddLineLeftRight(o.x1,o.y1,o.x2,o.y2,o.distinct);
            this.AddSeparationObject(o,"blue");
        } 
     }
     CasualRelationshipOrDating(objId1,objId2){
        var relation="CasualRelationshipOrDating";
        var obj = this.GetDetailObject(objId1,objId2);
        if(obj.length>0)
        {
            var o = obj[0];
            this.AddLineRelation(o.x1,o.y1,o.x2,o.y2,o.name,relation);
            this.AddLineLeftRight(o.x1,o.y1,o.x2,o.y2,o.distinct);
        } 
     }
     CasualRelationshipAndSeparation(objId1,objId2){
        var relation="CasualRelationshipAndSeparation";
        var obj = this.GetDetailObject(objId1,objId2);
        if(obj.length>0)
        {
            var o = obj[0];
            this.AddLineRelation(o.x1,o.y1,o.x2,o.y2,o.name,relation);
            this.AddLineLeftRight(o.x1,o.y1,o.x2,o.y2,o.distinct);
            this.AddSeparationObject(o,"blue");
        }
     }
     TemporaryRelationOneNightStand(objId1,objId2){
        var relation="TemporaryRelationOneNightStand";
        var obj = this.GetDetailObject(objId1,objId2);
        if(obj.length>0)
        {
            var o = obj[0];
            this.AddLineRelation(o.x1,o.y1,o.x2,o.y2,o.name,relation);
            this.AddLineLeftRight(o.x1,o.y1,o.x2,o.y2,o.distinct);
        }
     }
     Divorce(objId1,objId2){
        var relation="Divorce";
        var obj = this.GetDetailObject(objId1,objId2);
        if(obj.length>0)
        {
            var o = obj[0];
            this.AddLineRelation(o.x1,o.y1,o.x2,o.y2,o.name,relation);
            this.AddLineLeftRight(o.x1,o.y1,o.x2,o.y2,o.distinct);
        }
     }
     SeparationInFact(objId1,objId2){
        var relation="SeparationInFact";
        var obj = this.GetDetailObject(objId1,objId2);
        if(obj.length>0)
        {
            var o = obj[0];
            this.AddLineRelation(o.x1,o.y1,o.x2,o.y2,o.name,relation);
            this.AddLineLeftRight(o.x1,o.y1,o.x2,o.y2,o.distinct);
        }
     }
     LegalSeparation(objId1,objId2){
        var relation="LegalSeparation";
        var obj = this.GetDetailObject(objId1,objId2);
        if(obj.length>0)
        {
            var o = obj[0];
            this.AddLineRelation(o.x1,o.y1,o.x2,o.y2,o.name,relation);
            this.AddLineLeftRight(o.x1,o.y1,o.x2,o.y2,o.distinct);
            this.AddSeparationObject(o,'#810d00');
        }
     }
     LoveAffair(objId1,objId2){
        var relation="LoveAffair";
        var obj = this.GetDetailObject(objId1,objId2);
        if(obj.length>0)
        {
            var o = obj[0];
            this.AddLineRelation(o.x1,o.y1,o.x2,o.y2,o.name,relation);
            this.AddLineLeftRight(o.x1,o.y1,o.x2,o.y2,o.distinct);        
        }
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
        if(obj!=null){
        if(obj.constructor.name=="SVGRectElement"){
            x = obj.x.baseVal.value;
            y = obj.y.baseVal.value;
         }
         else if(obj.constructor.name=="SVGCircleElement"){
            x = obj.cx.baseVal.value;
           // y = obj.cy.baseVal.value+obj.r.baseVal.value+distinct;
           y = obj.cy.baseVal.value-obj.r.baseVal.value;
         }
         else if(obj.constructor.name=="SVGPolygonElement"){
            x = obj.points[1].x-25;
            y = obj.points[1].y;
         }
         else{
            x = obj.x.baseVal.value;
            y = obj.y.baseVal.value;
         }
        }
        return [{"x":x,"y":y}];
    }
    GetWidthObject(obj){
        var width=0;
        if(obj!=null){
            if(obj.constructor.name=="SVGRectElement"){
                width = obj.width.baseVal.value;
            }
            else if(obj.constructor.name=="SVGCircleElement"){
                width = obj.r.baseVal.value*2;
            }
            else if(obj.constructor.name=="SVGPolygonElement"){
                width = obj.points[2].x-obj.points[0].x;
            }
        }
        return width;
    }
    GetHeightObject(obj){
        var height=0;
        if(obj!=null){
            if(obj.constructor.name=="SVGRectElement"){
                height = obj.height.baseVal.value;
            }
            else if(obj.constructor.name=="SVGCircleElement"){
                height = obj.r.baseVal.value*2;
            }
            else if(obj.constructor.name=="SVGPolygonElement"){
                height = obj.points[0].x-obj.points[1].x;
            }
        }
        return height;
    }
}

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
