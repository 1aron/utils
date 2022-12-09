import type { Options, Pattern } from 'fast-glob'
import readPackage from 'to-read-package'
import queryWorkspaces from 'to-query-workspaces'
import upath from 'upath'

export default function readWorkspacePackages(
    patterns: Pattern[] = [],
    options?: Options
): any[] {
    return queryWorkspaces(patterns, options)?.map((eachWorkspace: string) => {
        return readPackage(upath.join(eachWorkspace, 'package.json'), options)
    })
}