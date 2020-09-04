export default class Hero {
  init = () => {};

  update = (c, hero, cw, ch, map) => {
    // setInterval(() => {
    // c.clearRect(0, 0, cw, ch);

    this.drawHero(c, hero, map);
    // }, 1000 / 60);
    // setInterval(() => {

    // }, 20);
  };

  drawHero = (c, hero) => {
    // console.log("asdsad");
    c.drawImage(hero.image, hero.x, hero.y);
  };
  startEventListenersOfHero = (hero, map) => {
    window.addEventListener("keydown", (event) => {
      if (event.keyCode == 39 || event.keyCode == 68) {
        map.dx = -map.speed;
        hero.image = hero.charDirections[0];
        hero.isLeft = false;
      }
      if (event.keyCode == 38 || event.keyCode == 87) {
        map.dy = map.speed;
      }
      if (event.keyCode == 37 || event.keyCode == 65) {
        map.dx = map.speed;
        hero.image = hero.charDirections[1];
        hero.isLeft = true;
      }
      if (event.keyCode == 40 || event.keyCode == 83) {
        map.dy = -map.speed;
      }
    });

    window.addEventListener("keyup", (event) => {
      if (
        event.keyCode == 38 ||
        event.keyCode == 40 ||
        event.keyCode == 87 ||
        event.keyCode == 83
      ) {
        map.dy = 0;
      }
      if (
        event.keyCode == 39 ||
        event.keyCode == 68 ||
        event.keyCode == 37 ||
        event.keyCode == 65
      ) {
        map.dx = 0;
      }
    });
  };

  animation = (hero, count) => {
    //animation of eyes
    if (hero.isLeft) {
      if (count % 15 != 0) {
        hero.image = hero.charDirections[1];
      }
      // if (count % 10 == 3 || count % 10 == 4) {
      //   hero.image = hero.eyeAnim[2];
      // }
      else {
        hero.image = hero.eyeAnim[3];
      }
    } else {
      if (count % 15 != 0) {
        hero.image = hero.charDirections[0];
      }
      // if (count % 6 == 3 || count % 6 == 4) {
      //   hero.image = hero.eyeAnim[0];
      // }
      else {
        hero.image = hero.eyeAnim[1];
      }
    }
  };
}
