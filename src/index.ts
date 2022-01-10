import {myContainer, myContainer2} from "./inversify.config";
import { TYPES } from "./types";
import { Warrior } from "./interfaces";

const warriors = [myContainer.get<Warrior>(TYPES.Warrior), myContainer2.get<Warrior>(TYPES.Warrior)];
warriors.forEach(warrior => {
    console.log(warrior.fight());
    console.log(warrior.sneak());
})
