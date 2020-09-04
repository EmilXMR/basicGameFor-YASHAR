import Hero from "./hero.js";
import Map from "./map.js";

var hero = new Hero();
var map = new Map();

var canvas = document.getElementById("game");
var c = canvas.getContext("2d");
var count = 0;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var cw = canvas.width;
var ch = canvas.height;

var tg = document.getElementById("tile-grass");
var char1 = document.getElementById("char1");
var char2 = document.getElementById("char2");
var char1_1 = document.getElementById("char1_1");
var char1_2 = document.getElementById("char1_2");
var char2_1 = document.getElementById("char2_1");
var char2_2 = document.getElementById("char2_2");

var hero0 = {
  x: cw / 2 - 100,
  y: ch / 2 - 100,
  dx: 0,
  dy: 0,
  speed: 5,
  image: char1,
  charDirections: [char1, char2],
  isLeft: false,
  eyeAnim: [char1_1, char1_2, char2_1, char2_2],
};

var map0 = {
  x: 0,
  y: 0,
  dx: 0,
  dy: 0,
  speed: 5,
  tile: tg,
};

// hActs.drawHero(c, hero);

setInterval(() => {
  c.clearRect(0, 0, cw, ch);
  map.update(c, map0, hero0, cw, ch);
  hero.update(c, hero0, cw, ch, map0);
}, 1000 / 60);

setInterval(() => {
  hero.animation(hero0, count);
  count++;
}, 200);
hero.startEventListenersOfHero(hero0, map0);
