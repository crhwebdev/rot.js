const concat = require('concat');
const path = require('path');

const sourceDirectory = "./src/";
const outputFile = "./rot.js";
 
const files = [
    sourceDirectory + "rot.js",
    sourceDirectory + "text.js",
    sourceDirectory + "js/array.js",
	sourceDirectory + "js/number.js",
	sourceDirectory + "js/string.js",
	sourceDirectory + "js/object.js",
	sourceDirectory + "js/function.js" ,
	sourceDirectory + "js/raf.js",
	sourceDirectory + "display/display.js",
	sourceDirectory + "display/backend.js",
	sourceDirectory + "display/rect.js",
	sourceDirectory + "display/hex.js",
	sourceDirectory + "display/tile.js" ,
	sourceDirectory + "rng.js", 
	sourceDirectory + "stringgenerator.js",
	sourceDirectory + "eventqueue.js",
	sourceDirectory + "scheduler/scheduler.js",
    sourceDirectory + "scheduler/scheduler-simple.js",
    sourceDirectory + "scheduler/scheduler-speed.js",
	sourceDirectory + "scheduler/scheduler-action.js",
	sourceDirectory + "engine.js",
	sourceDirectory + "map/map.js",
	sourceDirectory + "map/arena.js",
	sourceDirectory + "map/dividedmaze.js",
	sourceDirectory + "map/iceymaze.js",
	sourceDirectory + "map/ellermaze.js",
	sourceDirectory + "map/cellular.js",
	sourceDirectory + "map/dungeon.js",
	sourceDirectory + "map/digger.js",
	sourceDirectory + "map/uniform.js",
	sourceDirectory + "map/rogue.js",
	sourceDirectory + "map/features.js",
	sourceDirectory + "noise/noise.js",
	sourceDirectory + "noise/simplex.js",
	sourceDirectory + "fov/fov.js",
	sourceDirectory + "fov/discrete-shadowcasting.js",
	sourceDirectory + "fov/precise-shadowcasting.js",
	sourceDirectory + "fov/recursive-shadowcasting.js",
	sourceDirectory + "color.js",
	sourceDirectory + "lighting.js",
	sourceDirectory + "path/path.js",
	sourceDirectory + "path/dijkstra.js",
	sourceDirectory + "path/astar.js"
];

concat(files, outputFile);
