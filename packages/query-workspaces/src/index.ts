import fg, { Options } from 'fast-glob'
import readPackage from 'to-read-package'
import extend from 'to-extend'

export default function queryWorkspaces(
    workspaces: string[] = [],
    options?: Options
): string[] {
    options = extend({
        cwd: process.cwd(),
        ignore: ['**/node_modules/**']
    }, options)
    return fg.sync(
        (workspaces?.length
            ? workspaces
            : readPackage(undefined, { cwd: options.cwd })?.workspaces
        )?.map((eachWorkspace) => eachWorkspace + '/package.json')
        , options
    )
        ?.map((eachWorkspace) => eachWorkspace.replace('/package.json', ''))
}