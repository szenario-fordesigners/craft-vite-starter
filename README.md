<br />
<div align="center"><strong>What if tooling was done with 1 command?</strong></div>

<img alt="craft-vite" src="header.png"/>
<div align="center"><strong>Craft CMS 5 infused with Vite, TypeScript and tailwindcss.</strong></div>
<div align="center">Lightning fast development, HMR and a production ready build process.</div>

<br />
<div align="center">
  <sub>Made possible by</sub>
  <sub><br />
  <a href="https://www.szenario-design.com/" target="_blank">
    <img src="szenario-logo.svg" style="width:140px;" alt="szenario-design.com logo" /></a>
  </sub><br /><br />
  <sub>The team behind the magic</sub><br />
  <sub><a href="https://twitter.com/smonist">Simon Wesp</a></sub>
  <sub><a href="https://twitter.com/thomasbendl">Thomas Bendl</a></sub>  
</div>

<br />

## Turbostart 🚀

```sh
bash <(curl -s https://raw.githubusercontent.com/szenario-fordesigners/craft-vite-starter/main/init.sh)
```

## Quickstart

1.  `mkdir my-project && cd my-project`
2.  `ddev config --project-type=craftcms --docroot=web`
3.  `ddev composer create-project -n szenario-fordesigners/craft-vite-starter`
4.  `make install`
5.  `make dev`

## Tech Stack

- [🔥 **Craft CMS 5**](https://craftcms.com/)
- [🚢 **DDEV**](https://ddev.com/)
- [📦 **Vite**](https://vite.dev/)
- [🔒 **TypeScript**](https://www.typescriptlang.org/)
- [💨 **tailwindcss**](https://tailwindcss.com/)

## Requirements

- [DDEV](https://ddev.com/)
- Unix-based OS (MacOS, Linux, WSL2)

### If you are on Windows

Use WSL2 and follow the instructions for Unix-based OS. [DDEV Documentation](https://ddev.readthedocs.io/en/stable/users/install/docker-installation/#windows) is a great starting point.

## Commands

- `make install` - patches the DDEV craft config and installs Craft CMS. Should only be used as a first time setup.
- `make dev` - starts the development server
- `make build` - bundles the assets for production
- `make share` - starts the development server and a public `ddev share` tunnel with working HMR. ngrok by default; for no account, run `ddev config global --share-default-provider=cloudflared` once

## Subsequent Use

- `ddev yarn` - for managing frontend packages
- `ddev composer` - for managing backend packages
- `ddev craft` - exposes the [Craft CLI](https://ddev.readthedocs.io/en/stable/users/usage/commands/#craft)

### Responsive Images

This starter kit comes with named AVIF and WebP image transforms (`avif480` … `avif3840`, `webp480` … `webp3840`, no upscaling). Render every image through the component, which builds the `srcset` from them:

```twig
{% include "_includes/components/image.twig" with { asset: entry.image.one(), sizes: "(min-width: 768px) 50vw, 100vw" } only %}
```

Set `sizes` for any image narrower than the viewport and `priority: true` for the above-the-fold (LCP) images. The other lazy images fade in via [lazyish](https://github.com/smonist/lazyish). All params are documented at the top of `templates/_includes/components/image.twig`. For a lightbox or download link, use the `webp3840` transform.

## Credits

This repository is based on the official [Craft CMS starter template](https://github.com/craftcms/craft).  
Thanks to Andrew Welch for the great [craft-vite plugin](https://github.com/nystudio107/craft-vite)!


## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/smonist"><img src="https://avatars.githubusercontent.com/u/7086613?v=4?s=100" width="100px;" alt="Simon Wesp"/><br /><sub><b>Simon Wesp</b></sub></a><br /><a href="https://github.com/szenario-fordesigners/craft-vite-starter/commits?author=smonist" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/thomasbendl"><img src="https://avatars.githubusercontent.com/u/8804216?v=4?s=100" width="100px;" alt="Thomas Bendl"/><br /><sub><b>Thomas Bendl</b></sub></a><br /><a href="https://github.com/szenario-fordesigners/craft-vite-starter/commits?author=thomasbendl" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/estebancastro"><img src="https://avatars.githubusercontent.com/u/2717274?v=4?s=100" width="100px;" alt="Esteban Castro"/><br /><sub><b>Esteban Castro</b></sub></a><br /><a href="https://github.com/szenario-fordesigners/craft-vite-starter/commits?author=estebancastro" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
