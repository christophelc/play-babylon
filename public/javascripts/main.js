
$(document).ready(function() {
	$("#filebvh").on('change', function(event) {
    		var tmppath = URL.createObjectURL(event.target.files[0]);
		console.log(tmppath);
		loader.load(tmppath, loadbvh);
	});
});

// https://babylonjsguide.github.io/begins/Introducing_Babylonjs
var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

/******* Add the create scene function ******/
var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    var camera=new BABYLON.ArcRotateCamera("camera",1,1,13,BABYLON.Vector3.Zero(),scene);
    camera.setTarget(new BABYLON.Vector3(0,4,0));
    camera.attachControl(canvas, true);
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
	BABYLON.SceneLoader.ImportMesh("", "/assets/javascripts/babylon/scenes/", "Dude.babylon", scene, function (newMeshes, particleSystems, skeletons) {
		var mesh = newMeshes[0];
		var skeleton = skeletons[0];
		mesh.scaling = new BABYLON.Vector3(0.1,0.1,0.1);
		var t = 0;
		scene.beforeRender = function () {
			t += .1;
			skeleton.bones[7].setAbsolutePosition(new BABYLON.Vector3(0, 6.5, 0), mesh);
			mesh.position.x = Math.sin(t) * .1;
		}
	});
    return scene;
};
 /******* End of the create scene function ******/    
var scene = createScene(); //Call the createScene function

engine.runRenderLoop(function () { // Register a render loop to repeatedly render the scene
	scene.render();
});

window.addEventListener("resize", function () { // Watch for browser/canvas resize events
	engine.resize();
});

