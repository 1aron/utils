import readPackage from '../src'
import pkg from './package.json'

it('read package.json content', () => {
    expect(readPackage(undefined, { cwd: __dirname })).toEqual(pkg)
})

it('read non-existing package.json', () => {
    expect(readPackage('./wijvoiweoif/wefwef', { cwd: __dirname })).toBeNull()
})
