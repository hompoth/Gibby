Quintus.ZombiesGUI = function(Q) {
  //extending the UI.Container class to create our own side panel
  Q.UI.Container.extend('Bg2', {
		    init: function(p) {
				console.log("ok");
		      var grd=Q.ctx.createLinearGradient(0,0,200,0);
		      grd.addColorStop(0,"red");
    		  grd.addColorStop(1,"white");
			  
				console.log("ok");
              this._super(Q._defaults(p, {
                  fill: grd,
                  x: 120/2,
                  y: 720/2,
                  radius: 0,
                  border: 0,
                  shadow: 0,
                  w: 120,
                  h: 720,
              }));
			  
				console.log("ok");
            }
		  });
};