<?php

use craft\helpers\App;

return [
    'useDevServer' => App::env('USE_VITE_DEV_SERVER'),
    'manifestPath' => '@webroot/dist/.vite/manifest.json',
    // relative on purpose: nginx proxies this path to the dev server on :3000,
    // so asset URLs work on ddev.site and on a `ddev share` tunnel alike.
    'devServerPublic' => '/vite-dev/',
    'serverPublic' => rtrim(App::env('PRIMARY_SITE_URL'), '/') . '/dist/',
    'errorEntry' => 'src/ts/app.ts',
    'cacheKeySuffix' => '',
    'devServerInternal' => '',
    'checkDevServer' => false,
    'includeReactRefreshShim' => false,
    'includeModulePreloadShim' => true,
    'criticalPath' => '@webroot/dist/criticalcss',
    'criticalSuffix' =>'_critical.min.css',
];
