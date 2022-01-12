The reason that inject circular dependency fail when using the class as identifiers is that when the decorator is invoked the other class hasn't been initialized yet.
The solution is to use symbols like Symbol.for("Dom") as service identifiers instead of the classes like Dom.
