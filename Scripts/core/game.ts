/// <reference path="_reference.ts"/>

// MAIN GAME FILE

// THREEJS Aliases
import Scene = THREE.Scene;
import Renderer = THREE.WebGLRenderer;
import PerspectiveCamera = THREE.PerspectiveCamera;
import BoxGeometry = THREE.BoxGeometry;
import CubeGeometry = THREE.CubeGeometry;
import PlaneGeometry = THREE.PlaneGeometry;
import SphereGeometry = THREE.SphereGeometry;
import Geometry = THREE.Geometry;
import AxisHelper = THREE.AxisHelper;
import LambertMaterial = THREE.MeshLambertMaterial;
import MeshBasicMaterial = THREE.MeshBasicMaterial;
import Material = THREE.Material;
import Mesh = THREE.Mesh;
import Object3D = THREE.Object3D;
import SpotLight = THREE.SpotLight;
import PointLight = THREE.PointLight;
import AmbientLight = THREE.AmbientLight;
import Control = objects.Control;
import GUI = dat.GUI;
import Color = THREE.Color;
import Vector3 = THREE.Vector3;
import Face3 = THREE.Face3;
import Point = objects.Point;
import CScreen = config.Screen;

//Custom Game Objects
import gameObject = objects.gameObject;

// setup an IIFE structure (Immediately Invoked Function Expression)
var game = (() => {

    // declare game objects
    var axes: AxisHelper;
    var plane: Mesh;
    var ambientlight: AmbientLight;
    var spotlight: SpotLight;
    
    var c1Bod: Mesh;
    var c1Geo: CubeGeometry;
    var c1Mat: LambertMaterial;
    
    var c2Bod: Mesh;
    var c2Geo: CubeGeometry;
    var c2Mat: LambertMaterial;
    
    var c3Bod: Mesh;
    var c3Geo: CubeGeometry;
    var c3Mat: LambertMaterial;
    
    var c4Bod: Mesh;
    var c4Geo: CubeGeometry;
    var c4Mat: LambertMaterial;
    
    var c5Bod: Mesh;
    var c5Geo: CubeGeometry;
    var c5Mat: LambertMaterial;
    
    var scene: Scene = new Scene();
    var renderer: Renderer;
    var camera: PerspectiveCamera;
    var control: Control;
    var gui: GUI;
    var stats: Stats;

    function init() {
        // Instantiate a new Scene object
        //scene = new Scene();
        
        setupRenderer(); // setup the default renderer
	
        setupCamera(); // setup the camera


        /* ENTER CODE HERE */
        //CUBES
        c1Mat = new LambertMaterial({color: 0x00ff00});
        c1Geo = new CubeGeometry(7,7,7);
        c1Bod = new Mesh(c1Geo, c1Mat);
        c1Bod.position.y = 1;
        scene.add(c1Bod);
        
        c2Mat = new LambertMaterial({color: 0x00ff00});
        c2Geo = new CubeGeometry(6,6,6);
        c2Bod = new Mesh(c2Geo, c2Mat);
        c2Bod.position.y = 2;
        scene.add(c2Bod);
        
        c3Mat = new LambertMaterial({color: 0x00ff00});
        c3Geo = new CubeGeometry(5,5,5);
        c3Bod = new Mesh(c3Geo, c3Mat);
        c3Bod.position.y = 3;
        scene.add(c3Bod);
        
        c4Mat = new LambertMaterial({color: 0x00ff00});
        c4Geo = new CubeGeometry(4,4,4);
        c4Bod = new Mesh(c4Geo, c4Mat);
        c4Bod.position.y = 4;
        scene.add(c4Bod);
        
        c5Mat = new LambertMaterial({color: 0x00ff00});
        c5Geo = new CubeGeometry(3,3,3);
        c5Bod = new Mesh(c5Geo, c5Mat);
        c5Bod.position.y = 5;
        scene.add(c5Bod);
        
        //SpotLight
        spotlight = new SpotLight(0xffffff);
        spotlight.position.set(5.6,23.1,5.4)
        spotlight.rotation.set(-0.8,42.7,19.5)
        spotlight.castShadow = true;
        spotlight.shadowCameraNear = 1;
        spotlight.shadowMapHeight = 2048;
        spotlight.shadowMapWidth = 2048;
        
        scene.add(spotlight);
       
       // ambientlight
       ambientlight = new AmbientLight(0xffffff);
       scene.add(ambientlight);
       
        //plane
        plane = new gameObject(
            new PlaneGeometry(16,16,1,1),
            new LambertMaterial({color: 0xe79b61}),
            0,0,0);
        
        plane.rotation.x = -0.5*Math.PI;
        plane.rotation.y = -6;
        scene.add(plane);
        
 
        // add controls
        gui = new GUI();
        control = new Control();
        addControl(control);

        // Add framerate stats
        addStatsObject();
        console.log("Added Stats to scene...");

        document.body.appendChild(renderer.domElement);
        gameLoop(); // render the scene	

    }

    function addControl(controlObject: Control): void {
        /* ENTER CODE for the GUI CONTROL HERE */
    }

    function addStatsObject() {
        stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
    }

    // Setup main game loop
    function gameLoop(): void {
        stats.update();
        
        // render using requestAnimationFrame
        requestAnimationFrame(gameLoop);
	
        // render the scene
        renderer.render(scene, camera);
    }

    // Setup default renderer
    function setupRenderer(): void {
        renderer = new Renderer();
        renderer.setClearColor(0x404040, 1.0);
        renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
        //renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        console.log("Finished setting up Renderer...");
    }

    // Setup main camera for the scene
    function setupCamera(): void {
        camera = new PerspectiveCamera(35, config.Screen.RATIO, 0.1, 100);
        camera.position.x = 15.3;
        camera.position.y = 18.5;
        camera.position.z = -28.7;
        camera.rotation.set(-1.10305, 0.49742, -0.1396);
        camera.lookAt(new Vector3(0, 0, 0));
        console.log("Finished setting up Camera...");
    }

    window.onload = init;

    return {
        scene: scene
    }

})();

