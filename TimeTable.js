class TimeTable{
    constructor(){    
    }
    display(){

    this.monday=createElement("h4");
    this.tuesday=createElement("h4");
    this.wednesday=createElement("h4");
    this.thursday=createElement("h4");
    this.friday=createElement("h4");
    this.saturday=createElement("h4");
    this.sunday=createElement("h4");

    
    this.monday.html("Monday");
    this.tuesday.html("Tuesday");
    this.wednesday.html("Wednesday");
    this.thursday.html("Thursday");
    this.friday.html("Friday");
    this.saturday.html("Saturday");
    this.sunday.html("Sunday");
    
    this.monday.position(200,100);
    this.tuesday.position(350,100);
    this.wednesday.position(500,100);
    this.thursday.position(650,100);
    this.friday.position(800,100);
    this.saturday.position(950,100);
    this.sunday.position(1100,100);


    this.time1=createElement("h5");
    this.time2=createElement("h5");
    this.time3=createElement("h5");
    
    this.time1.html("4-5pm");
    this.time2.html("6-7pm");
    this.time3.html("8-9pm");

    this.time1.position(100,200);
    this.time2.position(100,250);
    this.time3.position(100,300);

    this.input1 = createInput("subject");
    this.input2 = createInput("subject");
    this.input3 = createInput("subject");
    this.input4 = createInput("subject");
    this.input5 = createInput("subject");
    this.input6 = createInput("subject");
    this.input7 = createInput("subject");


    this.input1.position(200,200);
    this.input2.position(350,200);
    this.input3.position(500,200);
    this.input4.position(650,200);
    this.input5.position(800,200);
    this.input6.position(950,200);
    this.input7.position(1100,200);


        
    }
}
