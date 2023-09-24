import Character from '../class/Character';
import Bowman from '../class/Bowman';
import Daemon from '../class/Daemon';
import Magician from '../class/Magician';
import Swordsman from '../class/Swordsman';
import Undead from '../class/Undead';
import Zombie from '../class/Zombie';

const bowmanCorrect = {
  name: 'Legolas',
  type: 'Bowman',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};
const daemonCorrect = {
  name: 'Diablo',
  type: 'Daemon',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};
const magicianCorrect = {
  name: 'Gendalf',
  type: 'Magician',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};
const swordsmanCorrect = {
  name: 'Richard',
  type: 'Swordsman',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};
const undeadCorrect = {
  name: 'Skeleton',
  type: 'Undead',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};
const zombieCorrect = {
  name: 'Zombak',
  type: 'Zombie',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

test('create Bowman', () => {
  const result = new Bowman('Legolas');
  expect(result).toEqual(bowmanCorrect);
});
test('create Daemon', () => {
  const result = new Daemon('Diablo');
  expect(result).toEqual(daemonCorrect);
});
test('create Magician', () => {
  const result = new Magician('Gendalf');
  expect(result).toEqual(magicianCorrect);
});
test('create Swordsman', () => {
  const result = new Swordsman('Richard');
  expect(result).toEqual(swordsmanCorrect);
});
test('create Undead', () => {
  const result = new Undead('Skeleton');
  expect(result).toEqual(undeadCorrect);
});
test('create Zombie', () => {
  const result = new Zombie('Zombak');
  expect(result).toEqual(zombieCorrect);
});
test('create bad name Character', () => {
  expect(() => {
    const person = new Character('long name for character');
    person.health = 100;
  }).toThrow();
});
test('create bad name Character2', () => {
  function badName() {
    const person = new Character('long name for character');
    person.health = 100;
  }
  expect(badName).toThrow();
});
