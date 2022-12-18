import crossImport from '../src'

it('import .ts in .js', () => {
    expect(
        crossImport('./foo.ts', { cwd: __dirname })
    ).toEqual({'bar': 'bar', 'foo': 'foo'})
})

it('read config from file', () => {
    expect(
        crossImport('home-config.ts', { cwd: __dirname }))
        .toEqual({
            'default': {
                'classes': { 'btn': 'font:12' },
                'colors': {
                    'red': { '50': '#ff0000' }
                }
            }
        })
})