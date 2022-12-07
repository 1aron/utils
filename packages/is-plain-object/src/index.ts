export default function isPlainObject(target: any) {
    return target === null
        ? false
        : (target?.constructor?.name === 'Object' || typeof target === 'object' && !target?.__proto__) // for Object.create({})
}
