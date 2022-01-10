import { Container } from "inversify";
import { TYPES } from "./types";
import { Warrior, Weapon, ThrowableWeapon } from "./interfaces";
import {Ninja, Katana, Shuriken, Katana2, Shuriken2} from "./entities";
const myContainer = new Container();
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

const myContainer2 = new Container();
myContainer2.bind<Warrior>(TYPES.Warrior).to(Ninja);
myContainer2.bind<Weapon>(TYPES.Weapon).to(Katana2);
myContainer2.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken2);
export { myContainer, myContainer2 };