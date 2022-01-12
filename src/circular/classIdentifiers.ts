import "reflect-metadata";
import { Container, injectable } from "inversify";
import getDecorators from "inversify-inject-decorators";

let container = new Container();
let { lazyInject } = getDecorators(container);

@injectable()
class Dom {
    public domUi: DomUi;
    constructor (domUi: DomUi) {
        this.domUi = domUi;
    }
}

@injectable()
class DomUi {
    // @ts-ignore
    @lazyInject(Dom) public dom: Dom;
}

@injectable()
class Test {
    constructor(dom: Dom) {
        console.log(dom);
    }
}

container.bind<Dom>(Dom).toSelf().inSingletonScope();
container.bind<DomUi>(DomUi).toSelf().inSingletonScope();
const dom = container.resolve(Test); // Error!