/// <reference path="_reference.ts"/>
// MAIN GAME FILE
// THREEJS Aliases
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var SphereGeometry = THREE.SphereGeometry;
var Geometry = THREE.Geometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Material = THREE.Material;
var Mesh = THREE.Mesh;
var Object3D = THREE.Object3D;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
var Face3 = THREE.Face3;
var Point = objects.Point;
var CScreen = config.Screen;
//Custom Game Objects
var gameObject = objects.gameObject;
// setup an IIFE structure (Immediately Invoked Function Expression)
var game = (function () {
    // declare game objects
    var axes;
    var plane;
    var ambientlight;
    var spotlight;
    var c1Bod;
    var c1Geo;
    var c1Mat;
    var c2Bod;
    var c2Geo;
    var c2Mat;
    var c3Bod;
    var c3Geo;
    var c3Mat;
    var c4Bod;
    var c4Geo;
    var c4Mat;
    var c5Bod;
    var c5Geo;
    var c5Mat;
    var scene = new Scene();
    var renderer;
    var camera;
    var control;
    var gui;
    var stats;
    function init() {
        // Instantiate a new Scene object
        //scene = new Scene();
        setupRenderer(); // setup the default renderer
        setupCamera(); // setup the camera
        /* ENTER CODE HERE */
        //CUBES
        c1Mat = new LambertMaterial({ color: 0x00ff00 });
        c1Geo = new CubeGeometry(7, 7, 7);
        c1Bod = new Mesh(c1Geo, c1Mat);
        c1Bod.position.y = 1;
        scene.add(c1Bod);
        c2Mat = new LambertMaterial({ color: 0x00ff00 });
        c2Geo = new CubeGeometry(6, 6, 6);
        c2Bod = new Mesh(c2Geo, c2Mat);
        c2Bod.position.y = 2;
        scene.add(c2Bod);
        c3Mat = new LambertMaterial({ color: 0x00ff00 });
        c3Geo = new CubeGeometry(5, 5, 5);
        c3Bod = new Mesh(c3Geo, c3Mat);
        c3Bod.position.y = 3;
        scene.add(c3Bod);
        c4Mat = new LambertMaterial({ color: 0x00ff00 });
        c4Geo = new CubeGeometry(4, 4, 4);
        c4Bod = new Mesh(c4Geo, c4Mat);
        c4Bod.position.y = 4;
        scene.add(c4Bod);
        c5Mat = new LambertMaterial({ color: 0x00ff00 });
        c5Geo = new CubeGeometry(3, 3, 3);
        c5Bod = new Mesh(c5Geo, c5Mat);
        c5Bod.position.y = 5;
        scene.add(c5Bod);
        //SpotLight
        spotlight = new SpotLight(0xffffff);
        spotlight.position.set(5.6, 23.1, 5.4);
        spotlight.rotation.set(-0.8, 42.7, 19.5);
        spotlight.castShadow = true;
        spotlight.shadowCameraNear = 1;
        spotlight.shadowMapHeight = 2048;
        spotlight.shadowMapWidth = 2048;
        scene.add(spotlight);
        //plane
        plane = new gameObject(new PlaneGeometry(16, 16, 1, 1), new LambertMaterial({ color: 0xe79b61 }), 0, 0, 0);
        plane.rotation.x = -0.5 * Math.PI;
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
    function addControl(controlObject) {
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
    function gameLoop() {
        stats.update();
        // render using requestAnimationFrame
        requestAnimationFrame(gameLoop);
        // render the scene
        renderer.render(scene, camera);
    }
    // Setup default renderer
    function setupRenderer() {
        renderer = new Renderer();
        renderer.setClearColor(0x404040, 1.0);
        renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
        //renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        console.log("Finished setting up Renderer...");
    }
    // Setup main camera for the scene
    function setupCamera() {
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
    };
})();
//# sourceMappingURL=game.js.map