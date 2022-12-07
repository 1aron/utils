import aPlainObj from '../../a-plain-obj/src'

export default function extend(...sources: any[]) {
    const result = {}
    for (const eachSource of sources) {
        (function merge(target, source) {
            for (const key in source) {
                const value = source[key]
                if (aPlainObj(value) && aPlainObj(target[key])) {
                    target[key] = merge(target[key], value)
                } else {
                    target[key] = value
                }
            }
            return target
        })(result, eachSource)
    }
    return result
}