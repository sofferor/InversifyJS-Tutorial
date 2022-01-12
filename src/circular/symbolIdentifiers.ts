import "reflect-metadata";
import { Container, injectable, inject } from "inversify";
import getDecorators from "inversify-inject-decorators";

const container = new Container();
const { lazyInject } = getDecorators(container);

const TYPE = {
    Dom: Symbol.for("Dom"),
    DomUi: Symbol.for("DomUi")
};

@injectable()
class DomUi {
    public dom: Dom;
    public name: string;
    constructor (
        @inject(TYPE.Dom) dom: Dom
    ) {
        this.dom = dom;
        this.name = "DomUi";
    }
}

@injectable()
class Dom {
    public name: string;
    // @ts-ignore
    @lazyInject(TYPE.DomUi) public domUi: DomUi;
    public constructor() {
        this.name = "Dom";
    }
}

@injectable()
class Test {
    public dom: Dom;
    constructor(
        @inject(TYPE.Dom) dom: Dom
    ) {
        this.dom = dom;
    }
}

container.bind<Dom>(TYPE.Dom).to(Dom).inSingletonScope();
container.bind<DomUi>(TYPE.DomUi).to(DomUi).inSingletonScope();

const test = container.resolve(Test); // Works!