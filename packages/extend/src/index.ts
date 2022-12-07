import isPlainObject from '../../is-plain-object/src'

export default function extend(...sources) {
    return function extendTarget(parent, parentKey, sources) {
        if (!sources.length) return parent
        const eachTarget = parentKey ? parent[parentKey] : parent
        const source = sources.shift()
        if (isPlainObject(eachTarget)) {
            for (const sourceKey in source) {
                const sourceValue = source[sourceKey]
                if (isPlainObject(sourceValue)) {
                    if (!eachTarget[sourceKey]) eachTarget[sourceKey] = {}
                    extendTarget(eachTarget, sourceKey, [sourceValue])
                } else {
                    eachTarget[sourceKey] = sourceValue
                }
            }
        } else {
            parent[parentKey] = source
        }
        return extendTarget(parent, '', sources)
    }({}, '', sources)
}