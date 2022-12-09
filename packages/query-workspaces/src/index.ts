import fg from 'fast-glob'
import type { Options, Pattern } from 'fast-glob'
import readPackage from 'to-read-package'
import extend from 'to-extend'

export default function queryWorkspaces(
    patterns: Pattern[] = [],
    options?: Options
): string[] {
    options = extend({
        cwd: process.cwd(),
        ignore: ['**/node_modules/**']
    }, options)
    return fg.sync(
        (patterns?.length
            ? patterns
            : readPackage(undefined, { cwd: options.cwd })?.workspaces
        )?.map((eachWorkspace) => eachWorkspace + '/package.json')
        , options
    )
        ?.map((eachWorkspace) => eachWorkspace.replace('/package.json', ''))
}