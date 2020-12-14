class Food {
    constructor(){
      this.foodvalue = 0;
    }
  
    update(){
      database.ref('Food').set({
        dog:this.foodvalue
      });
    }
  
    static getFoodInfo(){
      var FoodInfoRef = database.ref('Food/dog');
      FoodInfoRef.on("value",(data)=>{
        foodinfo = data.val();
      })
      return foodinfo;
    }
    deductfood(){
        this.foodvalue-=1;
        return this.foodvalue;
    }
  foodDisplay(){
    textSize(30);
    fill("black");
    text("Food Remaining: " +foodinfo,400,180);
  }
  }
  