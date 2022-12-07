import extend from './index'

describe('extend', function () {

    it('deeply extend', () => {
        expect(
            extend(
                { a: 1, b: 2, c: { d: 3, e: 4 } },
                { c: { d: 0, f: 5 } }
            )
        )
            .toEqual(
                { a: 1, b: 2, c: { d: 0, e: 4, f: 5 } }
            )
    })

    // it('should ignore undefined', function () {
    //     const a = { hello: 1 }
    //     const b = undefined
    //     extend(a, b)
    //     expect(a).toEqual({
    //         hello: 1
    //     })
    // })

    // it('should ignore null', function () {
    //     const a = { hello: 1 }
    //     const b = null
    //     extend(a, b)
    //     expect(a).toEqual({
    //         hello: 1
    //     })
    // })

    // it('can extend on 1 level', function () {
    //     const a = { hello: 1 }
    //     const b = { world: 2 }
    //     extend(a, b)
    //     expect(a).toEqual({
    //         hello: 1,
    //         world: 2
    //     })
    // })

    // it('can extend on 2 levels', function () {
    //     const a = { person: { name: 'John' } }
    //     const b = { person: { age: 30 } }
    //     extend(a, b)
    //     expect(a).toEqual({
    //         person: { name: 'John', age: 30 }
    //     })
    // })

    // it('can extend with Buffer values', function () {
    //     const a = { hello: 1 }
    //     const b = { value: new Buffer('world') }
    //     extend(a, b)
    //     expect(a).toEqual({
    //         hello: 1,
    //         value: new Buffer('world')
    //     })
    // })

    // it('doesn\'t change sources', function () {
    //     const a = { a: [1] }
    //     const b = { a: [2] }
    //     const c = { c: 3 }
    //     const d = extend({}, a, b, c)

    //     expect(a).toEqual({ a: [1] })
    //     expect(b).toEqual({ a: [2] })
    //     expect(c).toEqual({ c: 3 })
    // })

    // it('example from README.md', function () {
    //     const obj1 = {
    //         a: 1,
    //         b: 2,
    //         d: {
    //             a: 1,
    //             b: [],
    //             c: { test1: 123, test2: 321 }
    //         },
    //         f: 5,
    //         g: 123,
    //         i: 321,
    //         j: [1, 2]
    //     }
    //     const obj2 = {
    //         b: 3,
    //         c: 5,
    //         d: {
    //             b: { first: 'one', second: 'two' },
    //             c: { test2: 222 }
    //         },
    //         e: { one: 1, two: 2 },
    //         f: [],
    //         g: (void 0),
    //         h: /abc/g,
    //         i: null,
    //         j: [3, 4]
    //     }

    //     extend(obj1, obj2)

    //     expect(obj1).toEqual({
    //         a: 1,
    //         b: 3,
    //         d: {
    //             a: 1,
    //             b: { first: 'one', second: 'two' },
    //             c: { test1: 123, test2: 222 }
    //         },
    //         f: [],
    //         g: undefined,
    //         c: 5,
    //         e: { one: 1, two: 2 },
    //         h: /abc/g,
    //         i: null,
    //         j: [3, 4]
    //     })

    //     expect(('g' in obj1)).toEqual(true)
    //     expect(('x' in obj1)).toEqual(false)
    // })

    // it('clone arrays instead of extend', function () {
    //     expect(extend({ a: [1, 2, 3] }, { a: [2, 3] })).toEqual({ a: [2, 3] })
    // })

    // it('recursive clone objects and special objects in cloned arrays', function () {
    //     const obj1: any = {
    //         x: 1,
    //         y: new Buffer('foo')
    //     }
    //     const b: any = new Buffer('bar')
    //     const obj2: any = {
    //         x: 1,
    //         y: [2, 4, obj1, b],
    //         z: new Buffer('test')
    //     }
    //     const foo: any = {
    //         a: [obj2, obj2]
    //     }
    //     const bar: any = extend({}, foo)
    //     bar.a[0].x = 2
    //     bar.a[0].z.write('text', 'utf-8')
    //     bar.a[1].x = 3
    //     bar.a[1].z.write('lel', 'utf-8')
    //     bar.a[0].y[0] = 3
    //     bar.a[0].y[2].x = 5
    //     bar.a[0].y[2].y.write('heh', 'utf-8')
    //     bar.a[0].y[3].write('ho', 'utf-8')
    //     bar.a[1].y[1] = 3
    //     bar.a[1].y[2].y.write('nah', 'utf-8')
    //     bar.a[1].y[3].write('he', 'utf-8')

    //     expect(obj2.x).toEqual(1)
    //     expect(obj2.z.toString()).toEqual('test')
    //     expect(bar.a[0].x).toEqual(2)
    //     expect(bar.a[0].z.toString()).toEqual('text')
    //     expect(bar.a[1].x).toEqual(3)
    //     expect(bar.a[1].z.toString()).toEqual('lelt')
    //     expect(obj1.x).toEqual(1)
    //     expect(obj1.y.toString()).toEqual('foo')
    //     expect(b.toString()).toEqual('bar')

    //     expect(bar.a[0].y[0]).toEqual(3)
    //     expect(bar.a[0].y[1]).toEqual(4)
    //     expect(bar.a[0].y[2].x).toEqual(5)
    //     expect(bar.a[0].y[2].y.toString()).toEqual('heh')
    //     expect(bar.a[0].y[3].toString()).toEqual('hor')

    //     expect(bar.a[1].y[0]).toEqual(2)
    //     expect(bar.a[1].y[1]).toEqual(3)
    //     expect(bar.a[1].y[2].x).toEqual(1)
    //     expect(bar.a[1].y[2].y.toString()).toEqual('nah')
    //     expect(bar.a[1].y[3].toString()).toEqual('her')

    //     expect(foo.a.length).toEqual(2)
    //     expect(bar.a.length).toEqual(2)
    //     expect(Object.keys(obj2)).toEqual(['x', 'y', 'z'])
    //     expect(Object.keys(bar.a[0])).toEqual(['x', 'y', 'z'])
    //     expect(Object.keys(bar.a[1])).toEqual(['x', 'y', 'z'])
    //     expect(obj2.y.length).toEqual(4)
    //     expect(bar.a[0].y.length).toEqual(4)
    //     expect(bar.a[1].y.length).toEqual(4)
    //     expect(Object.keys(obj2.y[2])).toEqual(['x', 'y'])
    //     expect(Object.keys(bar.a[0].y[2])).toEqual(['x', 'y'])
    //     expect(Object.keys(bar.a[1].y[2])).toEqual(['x', 'y'])
    // })

    // it('checking keys for hasOwnPrototype', function () {
    //     const A = function () {
    //         this.x = 1
    //         this.y = 2
    //     }
    //     A.prototype.z = 3
    //     const foo = new A()
    //     expect(extend({ x: 123 }, foo)).toEqual({
    //         x: 1,
    //         y: 2
    //     })
    //     foo.z = 5
    //     expect(extend({ x: 123 }, foo, { y: 22 })).toEqual({
    //         x: 1,
    //         y: 22,
    //         z: 5
    //     })
    // })

    // describe('issue #33', function () {

    //     it('correct usage (cloning)', function () {
    //         const sharedObject = { foo: 'zero' }
    //         const objDef = { bar: sharedObject, baz: sharedObject }
    //         const obj = { bar: { foo: 'one' }, baz: { foo: 'two' } }
    //         expect(obj).toEqual(extend({}, { bar: objDef.bar, baz: objDef.baz }, obj))
    //         expect(obj).toEqual({ bar: { foo: 'one' }, baz: { foo: 'two' } })
    //     })

    //     it('incorrect usage (just extending)', function () {
    //         const sharedObject = { foo: 'serif' }
    //         const objDef = { bar: sharedObject, baz: sharedObject }
    //         const obj = { bar: { foo: 'one' }, baz: { foo: 'two' } }
    //         expect(obj).toEqual(extend({ bar: objDef.bar, baz: objDef.baz }, obj))
    //         expect(obj).toEqual({ bar: { foo: 'two' }, baz: { foo: 'two' } })
    //     })
    // })

    // it('should not modify Object prototype (hacker1 #311333)', function () {
    //     const a: any = {}
    //     extend({}, JSON.parse('{"__proto__":{"oops":"It works!"}}'))
    //     expect(a.oops).not.toBeDefined()
    //     // @ts-ignore
    //     expect(Object.prototype.oops).not.toBeDefined()
    // })

})