import fs from 'fs-extra'
import path from 'path'

export default function readPackage(
    fileName = './package.json',
    { cwd = process.cwd() }: { cwd?: string } = {}
): JSON | undefined {
    return fs.readJSONSync(
        cwd ? path.resolve(cwd, fileName) : fileName,
        { throws: false })
}