export default class map {
  update = (c, map, hero, cw, ch) => {
    // setInterval(() => {
    this.drawMap(c, map);
    if (hero.x >= map.x - 1000) {
      map.x += map.dx;
    } else {
      // hero.x++;
      map.x = cw / 2 + 900;
    }
    if (hero.y >= map.y - 1000) {
      map.y += map.dy;
    } else {
      // hero.x++;
      map.y = ch / 2 + 900;
    }

    // if (hero.x <= map.x + 2008) {
    //   map.x += map.dx / 2;
    // } else {
    //   // hero.x++;
    //   map.x = cw / 2 - 08;
    // }

    // if (hero.y <= map.y + 2008) {
    //   map.y += map.dy / 2;
    // } else {
    //   // hero.x++;
    //   map.y = ch / 2 + 2908;
    // }

    // }, 1000 / 30);
  };

  drawMap = (c, map) => {
    for (let i = 0; i < 48; i++) {
      for (let j = 0; j < 48; j++) {
        c.drawImage(
          map.tile,
          map.x - 1000 + i * 64,
          map.y - 1000 + j * 64,
          64,
          64
        );
      }
    }
  };
}
