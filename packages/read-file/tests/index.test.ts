import readFile, { readFiles } from '../src'
import dedent from 'dedent'

it('read one file', () => {
    expect(
        readFile('a.*', { cwd: __dirname }).toString())
        .toEqual(dedent`
            {
                "name": "a"
            }
        `)
})

it('read files', () => {
    expect(
        readFiles(['*.json'], { cwd: __dirname }).toString())
        .toEqual(dedent`
            {
                "name": "a"
            },{
                "name": "b"
            }
        `)
})