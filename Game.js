class Game{
    constructor(){

    }

    play(){

        food1 = new Food();
        form = new Form();
        form.display();

    }
    start(){
        if(keyIsDown(UP_ARROW)){
            food1.deductfood();
            food1.update();
            
          }
          food1.foodDisplay();  
    }
}