import fs from 'fs-extra'
import upath from 'upath'
import fg from 'fast-glob'
import extend from 'to-extend'

interface Options extends fg.Options {
    encoding?: null
    flag?: string
}

export default function readFile(
    source: string | fg.Pattern[],
    options?: Options
): Buffer {
    if (!source?.length) return
    options = extend({ cwd: process.cwd() }, options)
    const filePath = fg.sync(source, options)[0]
    const resolvedFilePath = upath.resolve(options.cwd, filePath)
    return fs.readFileSync(resolvedFilePath, options)
}

export function readFiles(
    source: string | fg.Pattern[],
    options?: Options
) {
    if (!source?.length) return []
    options = extend({ cwd: process.cwd() }, options)
    const filePaths = fg.sync(source, options)
    return filePaths
        .map((eachFilePath) => fs.readFileSync(upath.resolve(options.cwd, eachFilePath), options))
        .filter((eachFile) => eachFile)
}