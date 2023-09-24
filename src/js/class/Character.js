export default class Character {
  constructor(name) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Length of Name has to have from 2 until 10 letters!!!');
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.attack *= 1.2;
      this.defence *= 1.2;
    } else {
      throw new Error('Нельзя повысить уровень умершего !!!');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) {
        this.health = 0;
      }
    } else {
      throw new Error('Нельзя убить мертвого !!!');
    }
  }
}
