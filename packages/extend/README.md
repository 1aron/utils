<br>
<div align="center">

<p align="center">
    <a href="https://repo.master.co">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/33840671/204220749-4536401e-20c4-49b7-bf37-b07fce15f1c2.svg">
            <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/33840671/204220755-744f6b4f-a90e-442f-bd30-53ce7995a8f8.svg">
            <img alt="aronrepo" src="https://user-images.githubusercontent.com/33840671/204220755-744f6b4f-a90e-442f-bd30-53ce7995a8f8.svg" width="100%">
        </picture>
    </a>
</p>
<p align="center">Aron's semantic release config</p>

<p align="center">
    <a aria-label="overview" href="https://github.com/1aron/aronrepo">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/%E2%AC%85%20back-%20?color=212022&style=for-the-badge">
            <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/badge/%E2%AC%85%20back-%20?color=f6f7f8&style=for-the-badge">
            <img alt="NPM Version" src="https://img.shields.io/badge/%E2%AC%85%20back-%20?color=f6f7f8&style=for-the-badge">
        </picture>
    </a>
    <a aria-label="GitHub release (latest by date including pre-releases)" href="https://github.com/1aron/aronrepo/releases">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/github/v/release/1aron/aronrepo?include_prereleases&color=212022&label=&style=for-the-badge&logo=github&logoColor=fff">
            <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/github/v/release/1aron/aronrepo?include_prereleases&color=f6f7f8&label=&style=for-the-badge&logo=github&logoColor=%23000">
            <img alt="NPM Version" src="https://img.shields.io/github/v/release/1aron/aronrepo?include_prereleases&color=f6f7f8&label=&style=for-the-badge&logo=github">
        </picture>
    </a>
    <a aria-label="NPM Package" href="https://www.npmjs.com/package/aronrepo">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/npm/dm/aronrepo?color=212022&label=%20&logo=npm&style=for-the-badge">
            <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/npm/dm/aronrepo?color=f6f7f8&label=%20&logo=npm&style=for-the-badge">
            <img alt="NPM package ( download / month )" src="https://img.shields.io/npm/dm/aronrepo?color=f6f7f8&label=%20&logo=npm&style=for-the-badge">
        </picture>
    </a>
    <a aria-label="Follow @aron1tw" href="https://twitter.com/aron1tw">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/static/v1?label=%20&message=twitter&color=212022&logo=twitter&style=for-the-badge">
            <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/static/v1?label=%20&message=twitter&color=f6f7f8&logo=twitter&style=for-the-badge">
            <img alt="Follow @mastercorg" src="https://img.shields.io/static/v1?label=%20&message=twitter&color=f6f7f8&logo=twitter&style=for-the-badge">
        </picture>
    </a>
    <a aria-label="Github Actions" href="https://github.com/1aron/aronrepo/actions/workflows/release.yml">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/github/workflow/status/1aron/aronrepo/Release?label=%20&message=twitter&color=212022&logo=githubactions&style=for-the-badge">
            <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/github/workflow/status/1aron/aronrepo/Release?label=%20&message=twitter&color=f6f7f8&logo=githubactions&style=for-the-badge&logoColor=%23000">
            <img alt="Github release actions" src="https://img.shields.io/github/workflow/status/1aron/aronrepo/Release?label=%20&message=twitter&color=f6f7f8&logo=githubactions&style=for-the-badge&logoColor=%23000">
        </picture>
    </a>
</p>

</div>

<br>

## Getting Started

Skip if you have already run `npm install aronrepo`:
```
npm install semantic-release-config-aron -D
```

### Configuration
Create a `release.config.js` file in your project root and extend `aron`:
```js
module.exports = {
    extends: 'semantic-release-config-aron'
}
```

For full configuration, check out the [configure.js](https://github.com/1aron/aronrepo/blob/beta/packages/semantic-release-config/configure.js) file and [Aron's conventional commits for the release rules](https://github.com/1aron/aronrepo/tree/beta/packages/conventional-commits)

Since `.plugins` use arrays for configuration, even `extends` will override all preset plugins.

So I provide a `configure(options)` API to allow you to set additional config friendly:
```js
const configure = require('semantic-release-config-aron/configure')

module.exports = configure({
    // for @semantic-release/commit-analyzer and @semantic-release/release-notes-generator preset
    preset: 'aron',
    // for @semantic-release/github assets
    assets: [],
    // for @semantic-release/commit-analyzer
    scripts: {
        prepare: 'npm run check && npm run build',
        publish: 'aron version ${nextRelease.version} && npm publish --workspaces --access public'
    },
    branches: [
        '+([0-9])?(.{+([0-9]),x}).x',
        'main',
        'next',
        'next-major',
        {
            name: 'beta',
            prerelease: true
        },
        {
            name: 'alpha',
            prerelease: true
        }
    ],
    // additional plugins
    plugins: []
})
```
The above example is equivalent to the `extends: 'semantic-release-config-aron'` preset.

<br>

<a aria-label="overview" href="https://github.com/1aron/aronrepo#ecosystem">
<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/%E2%AC%85%20back%20to%20contents-%20?color=212022&style=for-the-badge">
    <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/badge/%E2%AC%85%20back%20to%20contents-%20?color=f6f7f8&style=for-the-badge">
    <img alt="NPM Version" src="https://img.shields.io/badge/%E2%AC%85%20back%20to%20contents-%20?color=f6f7f8&style=for-the-badge">
</picture>
</a>