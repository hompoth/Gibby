Quintus.ZombiesEnemies = function(Q) {
    
  //types of zombies
  Q.zombieTypes = {
    basic: {
        asset: 'zombie1.png',  //image file               
        vx: -8 //speed
    },
    skelleton: {
        asset: 'zombie2.png', 
        vx: -10
    },
    chicken: {
        asset: 'chicken.png', 
        vx: -20
    },
    hatzombie: {
        asset: 'zombie3.png', 
        vx: -9
    },
  }; 

  Q.Sprite.extend("Zombie", {
    init: function(p) {
      this._super(p, {
        type: Q.SPRITE_ZOMBIE,
        collisionMask: Q.SPRITE_BULLET | Q.SPRITE_PLANT,
      });
      //add a component
      this.add("2d");
    },
    //executed many times per second, be careful!
    step: function(dt) {
      if(this.p.x <= 240) {                  
        this.destroy();
        console.log('The zombies ate your brain!');  
        //restart game                          
        Q.stageScene('level');   
      }
    }
  });
  
    
};