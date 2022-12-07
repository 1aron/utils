export default function extend(...sources) {
    return extendTarget({}, ...sources)
}

function extendTarget(target, ...sources) {
    if (!sources.length) return target
    const source = sources.shift()
    if (isObject(source)) {
        console.log(source.constructor.name)
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) target[key] = {}
                extendTarget(target[key], source[key])
            } else {
                Object.assign(target, {
                    [key]: source[key]
                })
            }
        }
    }
    return extendTarget(target, ...sources)
}

const isObject = (item) => {
    return (item && typeof item === 'object' && !Array.isArray(item))
}
