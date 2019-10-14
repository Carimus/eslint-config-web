const FOO_CONSTANT = 'FOO';

class FooClass {
    static FOO_CONSTANT = FOO_CONSTANT;

    static fooStaticProp = true;

    fooProp = null;

    fooFunctionProp = () => {
        return true;
    };

    constructor() {
        this.fooProp = true;

        if (FooClass.has({ bar: 'bar' }, 'bar')) {
            this.hasBar = true;
        }
    }

    static has(obj, prop) {
        Object.prototype.hasOwnProperty.call(obj, prop);
    }
}

export default FooClass;
