import { injectable, inject } from "inversify";
import "reflect-metadata";
import { Weapon, ThrowableWeapon, Warrior } from "./interfaces";
import { TYPES } from "./types";
@injectable()
class Katana implements Weapon {
    public hit() {
        return "cut!";
    }
}
@injectable()
class Shuriken implements ThrowableWeapon {
    public throw() {
        return "hit!";
    }
}

@injectable()
class Katana2 implements Weapon {
    public hit() {
        return "cut2!";
    }
}
@injectable()
class Shuriken2 implements ThrowableWeapon {
    public throw() {
        return "hit2!";
    }
}

@injectable()
class Ninja implements Warrior {
    // @ts-ignore
    @inject(TYPES.Weapon) private weapon: Weapon;
    // @ts-ignore
    @inject(TYPES.ThrowableWeapon) private throwableWeapon: ThrowableWeapon;
    public fight() { return this.weapon.hit(); }
    public sneak() { return this.throwableWeapon.throw(); }
}
export { Ninja, Katana, Shuriken, Katana2, Shuriken2 };