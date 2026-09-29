<?php

use craft\helpers\App;

return [
    // in dev, use the Vite dev server while it runs and fall back to the last build otherwise
    'useDevServer' => App::env('CRAFT_ENVIRONMENT') === 'dev',
    'manifestPath' => '@webroot/dist/.vite/manifest.json',
    // relative on purpose: nginx proxies this path to the dev server on :3000,
    // so asset URLs work on ddev.site and on a `ddev share` tunnel alike.
    'devServerPublic' => '/vite-dev/',
    'serverPublic' => rtrim(App::env('PRIMARY_SITE_URL'), '/') . '/dist/',
    'errorEntry' => 'src/ts/app.ts',
    'cacheKeySuffix' => '',
    'devServerInternal' => 'http://localhost:3000/vite-dev/',
    'checkDevServer' => true,
    'includeReactRefreshShim' => false,
    'includeModulePreloadShim' => false,
];
