import upath from 'upath'
import requireFromString from 'require-from-string'
import fg from 'fast-glob'
import extend from 'to-extend'
import { buildSync } from 'esbuild'

export default function crossImport(
    source: string | fg.Pattern[],
    options?: fg.Options
): any {
    options = extend({
        cwd: process.cwd()
    }, options)
    if (!source) return
    const filePath = fg.sync(source, options)[0]
    if (!filePath) return
    const resolvedFilePath = upath.resolve(options.cwd, filePath)
    const buildResult = buildSync({
        entryPoints: [resolvedFilePath],
        logLevel: 'silent',
        bundle: true,
        format: 'cjs',
        write: false
    })
    const { text } = buildResult.outputFiles[0]
    return requireFromString(text, upath.changeExt(resolvedFilePath, '.js'))
}