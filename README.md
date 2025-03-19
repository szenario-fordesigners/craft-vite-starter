<a href="https://craftcms.com/" rel="noopener" target="_blank"><img width="247" height="60" src="https://craftcms.com/craftcms.svg" alt="Craft CMS"></a>

<br>

[Craft](https://craftcms.com/) is a flexible, user-friendly CMS for creating custom digital experiences on the web and beyond.

In technical terms, it’s a self-hosted PHP application backed by a MySQL or Postgres database. Read more in the [official documentation](https://craftcms.com/docs).

__Psst!__ Looking for the Craft source code? Need to file a bug report or feature request? Check out [`craftcms/cms`](https://github.com/craftcms/cms).

---

:postal_horn: **If you just heard about Craft:** Take a feature tour on [our website](https://craftcms.com/features)—then spin up a [demo project](https://craftcms.com/demo) to try it out for yourself.

:construction_worker_woman: **If you are eager to start building:** You’re in exactly the right place!

## Getting Started

This repository is a bare-bones [Composer](https://getcomposer.org/) “project”, intended for use with the `composer create-project` command. It contains only the folders and files absolutely required to run Craft.

> [!TIP]  
> Our [tutorial](https://craftcms.com/docs/getting-started-tutorial/) covers this setup process in greater depth. If you get stuck, give it a once-over; if things still aren’t clicking, help is never far away in [our community](https://craftcms.com/community) or via [official support](https://craftcms.com/support-services).
>
> You can also find these instructions (and some other helpful tips) in [the documentation](https://craftcms.com/docs/5.x/install.html).

The best way to spin up your first project is with [DDEV](https://ddev.com/), a cross-platform, Docker-based PHP development environment.

[Install or update DDEV](https://ddev.readthedocs.io/en/stable/users/install/), then follow these steps:
1. Create a project directory and move into it:
    ```bash
    cd /path/to/web/projects
    mkdir my-project
    cd my-project
    ```
2. Create DDEV configuration files:
    ```bash
    ddev config --project-type=craftcms --docroot=web
    ```
3. Scaffold the project from the official starter project:
   ```bash
   ddev composer create -y "craftcms/craft"
   ```

The setup wizard will start automatically! Accept all defaults (in `[square brackets]`), and note your chosen username and password.

Lauch Craft’s [control panel](https://craftcms.com/docs/5.x/system/control-panel.html) in a browser with `ddev launch admin`. The rest is up to you! Pick up where we left off in [the tutorial](https://craftcms.com/docs/getting-started-tutorial/install/control-panel.html), or dive right in on modeling your own content:
- :card_file_box: [Elements](https://craftcms.com/docs/5.x/system/elements.html): Learn about Craft’s core content types, and how to customize them.
- :triangular_ruler: [Fields](https://craftcms.com/docs/5.x/system/fields.html): Create precisely the data structure and authoring experience you need.
- :pencil2: [Templating](https://craftcms.com/docs/5.x/development/twig.html): Start using your data in a totally custom front-end.

## Resources

Craft comes with a ton of official and community [resources](https://github.com/craftcms/cms#resources). 
