function App(n,420,s){

    //Declare your instance variables here.
    this.name=n
    this.memory=420
    this.state=s

    //Declare the instance function open here.
    this.open = function(){
      this.state=applist["active"];


    };
    //Declare the instance function sleep here.
this.sleep=function(){
  if (this.state=applist["active"]){
    this.memory=this.memory/2;
    this.state=applist["sleep"];
  }
}


    //Declare the instance function active here.
this.active=function(){
  if(this.state=applist["sleep"]){
    this.memory=this.memory*2
    this.state=applist["active"]

  }
}


    //Declare the instance function close here.
this.



}

//Use the constructor to create 4 App objects below.



//Declare an array named appList, and place all 4 of your apps in that array.
applist[]
//The order does not matter.
