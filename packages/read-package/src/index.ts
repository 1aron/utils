import fs from 'fs-extra'
import upath from 'upath'

export default function readPackage(
    fileName = './package.json',
    { cwd = process.cwd() }: { cwd?: string } = {}
): any {
    return fs.readJSONSync(
        cwd ? upath.resolve(cwd, fileName) : fileName,
        { throws: false })
}