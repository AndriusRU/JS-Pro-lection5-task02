import Magician from '../class/Magician';

const magicianLevelUp = {
  name: 'Gendalf',
  type: 'Magician',
  health: 100,
  level: 2,
  attack: 12,
  defence: 48,
};

const magicanDamage = {
  name: 'Gendalf',
  type: 'Magician',
  health: 40,
  level: 1,
  attack: 10,
  defence: 40,
};

const magicanDamageDead = {
  name: 'Gendalf',
  type: 'Magician',
  health: 0,
  level: 1,
  attack: 10,
  defence: 40,
};

test('level up Magician after creation', () => {
  const person = new Magician('Gendalf');
  person.levelUp();
  expect(person).toEqual(magicianLevelUp);
});

test('level up dead Magician', () => {
  const person = new Magician('Gendalf');
  person.health = 0;
  expect(() => {
    person.levelUp();
  }).toThrow();
});

test('damage(100) Magician after creation', () => {
  const person = new Magician('Gendalf');
  person.damage(100);
  expect(person).toEqual(magicanDamage);
});

test('damage(1000) Magician after creation', () => {
  const person = new Magician('Gendalf');
  person.damage(1000);
  expect(person).toEqual(magicanDamageDead);
});

test('damage the deadman', () => {
  function deadman() {
    const person = new Magician('Gendalf');
    person.damage(1000);
    person.damage(1000);
  }
  expect(deadman).toThrow();
});
