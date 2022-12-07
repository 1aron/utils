import isPlainObject from '../../is-plain-object/src'

export default function extend(...sources) {
    return extendTarget({}, ...sources)
}

function extendTarget(target, ...sources) {
    if (!sources.length) return target
    const source = sources.shift()
    for (const key in source) {
        const sourceValue = source[key]
        if (isPlainObject(sourceValue)) {
            if (!target[key]) target[key] = {}
            extendTarget(target[key], sourceValue)
        } else {
            console.log(sourceValue)
            target[key] = sourceValue
        }
    }
    return extendTarget(target, ...sources)
}

