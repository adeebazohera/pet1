class Form {

    constructor() {
      this.input = createInput("No of Food");
      this.button = createButton('Submit');
      this.greeting = createElement('h2');
    }
    
  
    display(){
      var title = createElement('h2')
      title.html("Note: Press Up Arrow key to feed Drago Milk!!!");
      title.position(130, 0);
  
      this.input.position(430, 160);
      this.button.position(450, 200);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        food1.foodvalue = this.input.value();
        food1.update();
        Food.getFoodInfo();
        console.log(foodinfo);
        /*this.greeting.html("Food remaining :");
        this.greeting.position(430, 100);*/
      });
  
    }
  }
