import isPlainObject from './'

describe('Same-Realm Server Tests', () => {
    it('should return `true` if the object is created by the `Object` constructor.', () => {
        expect(isPlainObject(Object.create({}))).toBeTruthy()
        expect(isPlainObject(Object.create(Object.prototype))).toBeTruthy()
        expect(isPlainObject({ foo: 'bar' })).toBeTruthy()
        expect(isPlainObject({})).toBeTruthy()
        expect(isPlainObject(Object.create(null))).toBeTruthy()
    })

    it('should return `false` if the object is not created by the `Object` constructor.', () => {
        function Foo() { this.abc = {} }
        expect(isPlainObject(/foo/)).toBeFalsy()
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        expect(isPlainObject(function () { })).toBeFalsy()
        expect(isPlainObject(1)).toBeFalsy()
        expect(isPlainObject(['foo', 'bar'])).toBeFalsy()
        expect(isPlainObject([])).toBeFalsy()
        expect(isPlainObject(new Foo)).toBeFalsy()
        expect(isPlainObject(null)).toBeFalsy()
        expect(isPlainObject(undefined)).toBeFalsy()
    })
})
