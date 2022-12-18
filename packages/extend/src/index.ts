export default function extend(...sources: any[]) {
    const result = {}
    for (const eachSource of sources) {
        if (!isObject(eachSource)) continue
        (function merge(target, source) {
            for (const key in source) {
                const value = source[key]
                if (isObject(value) && isObject(target[key])) {
                    target[key] = merge(target[key], value)
                } else {
                    target[key] = JSON.parse(JSON.stringify(value))
                }
            }
            return target
        })(result, eachSource)
    }
    return result
}

function isObject(x: any) {
    return typeof x === 'object' && x !== null && !Array.isArray(x)
}