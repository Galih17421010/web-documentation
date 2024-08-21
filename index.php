<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />

    <title>Installation - Laravel 11.x - The PHP Framework For Web Artisans</title>

    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

    <link rel="canonical" href="https://laravel.com/installation" />

    <!-- Primary Meta Tags -->
    <meta name="title" content="Laravel - The PHP Framework For Web Artisans" />
    <meta name="description" content="Laravel is a PHP web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://laravel.com/" />
    <meta property="og:title" content="Laravel - The PHP Framework For Web Artisans" />
    <meta property="og:description" content="Laravel is a PHP web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things." />
    <meta property="og:image" content="./assets/img/og-image.jpg" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://laravel.com/" />
    <meta property="twitter:title" content="Laravel - The PHP Framework For Web Artisans" />
    <meta property="twitter:description" content="Laravel is a PHP web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things." />
    <meta property="twitter:image" content="./assets/img/og-image.jpg" />

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="./assets/img/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="./assets/img/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="./assets/img/favicon/favicon-16x16.png" />
    <link rel="manifest" href="./assets/img/favicon/site.webmanifest" />
    <link rel="mask-icon" href="./assets/img/favicon/safari-pinned-tab.svg" color="#ff2d20" />
    <link rel="shortcut icon" href="./assets/img/favicon/favicon.ico" />
    <meta name="msapplication-TileColor" content="#ff2d20" />
    <meta name="msapplication-config" content="./assets/img/favicon/browserconfig.xml" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="color-scheme" content="light" />

    <link rel="preconnect" href="https://E3MIRNPJH5-dsn.algolia.net" crossorigin />

    <link rel="stylesheet" href="https://use.typekit.net/ins2wgm.css" />

    <link rel="preload" as="style" href="./assets/css/app.css" />
    <link rel="modulepreload" href="./assets/js/app.js" />
    <link rel="modulepreload" href="./assets/js/docs.js" />
    <link rel="stylesheet" href="./assets/css/app.css" />
    <script type="module" src="./assets/js/app.js"></script>
    <script type="module" src="./assets/js/docs.js"></script>

    <!-- Fathom - beautiful, simple website analytics -->
    <script src="https://cdn.usefathom.com/script.js" data-site="DVMEKBYF" defer></script>
    <!-- / Fathom -->

    <!-- Clearbit -->
    <script async src="https://tag.clearbitscripts.com/v1/pk_97d2bf69f817feb07be42fcda1460119/tags.js" referrerpolicy="strict-origin-when-cross-origin"></script>

    <script>
      const alwaysLightMode = false;
    </script>

    <script>
      function updateTheme() {
        if (!("theme" in localStorage)) {
          localStorage.theme = "system";
        }

        switch (localStorage.theme) {
          case "system":
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
              document.documentElement.classList.add("dark");
              document.documentElement.setAttribute("data-theme", "dark");
            } else {
              document.documentElement.classList.remove("dark");
              document.documentElement.setAttribute("data-theme", "light");
            }

            document.documentElement.setAttribute("color-theme", "system");
            break;

          case "dark":
            document.documentElement.classList.add("dark");
            document.documentElement.setAttribute("color-theme", "dark");
            document.documentElement.setAttribute("data-theme", "dark");
            break;

          case "light":
            document.documentElement.classList.remove("dark");
            document.documentElement.setAttribute("color-theme", "light");
            document.documentElement.setAttribute("data-theme", "light");
            break;
        }

        updateThemeAndSchemeColor();
      }

      function updateThemeAndSchemeColor() {
        if (!alwaysLightMode) {
          if (document.documentElement.classList.contains("dark")) {
            document.querySelector('meta[name="color-scheme"]').setAttribute("content", "dark");
            document.querySelector('meta[name="theme-color"]').setAttribute("content", "#171923");

            return;
          }

          document.querySelector('meta[name="color-scheme"]').setAttribute("content", "light");
          document.querySelector('meta[name="theme-color"]').setAttribute("content", "#ffffff");
        }
      }

      updateTheme();
    </script>
  </head>
  <body
    x-data="{
        navIsOpen: false,
    }"
    class="w-full h-full font-sans antialiased text-gray-900 language-php"
    data-instant-intensity="0"
  >
    <a id="skip-to-content-link" href="#main-content" class="absolute bg-gray-100 px-4 py-2 top-3 left-3 text-gray-700 shadow-xl"> Skip to content </a>

    <div class="hidden lg:flex items-center justify-center bg-gradient-to-b from-red-500 to-red-600 p-2 text-center text-white text-sm h-9">
      <template id="news-herd">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" stroke-linecap="round" fill="none" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
            <path d="M7 8v1" />
            <path d="M17 8v1" />
            <path d="M12.5 4c-.654 1.486 -1.26 3.443 -1.5 9h2.5c-.19 2.867 .094 5.024 .5 7" />
            <path d="M7 15.5c3.667 2 6.333 2 10 0" />
          </svg>
        </div>

        <div class="mt-px ml-1">Get started with Galih <a href="https://github.com/Galih17421010" class="underline">Galih</a>.</div>
      </template>
    </div>
    <script>
      const activeNewsTemplate = document.getElementById(
        "news-" + JSON.parse("[\u0022herd\u0022]")[Math.floor(Math.random() * 1)]
      );

      activeNewsTemplate.replaceWith(activeNewsTemplate.content);
    </script>

    <div class="relative dark:bg-dark-700" id="docsScreen">
      <div class="relative lg:flex lg:items-start">
        <aside
          class="hidden fixed top-0 bottom-0 left-0 z-20 w-16 bg-gradient-to-b from-gray-100 to-white transition-all duration-300 lg:sticky lg:w-80 lg:shrink-0 lg:flex lg:flex-col lg:justify-end lg:items-end 2xl:max-w-lg 2xl:w-full dark:from-dark-800 dark:to-dark-700"
        >
          <div class="relative max-h-screen overflow-auto flex-1 flex flex-col xl:w-80">
            <a href="/" class="flex items-center py-8 px-4 lg:px-8 xl:px-16">
              <img class="w-8 h-8 shrink-0 transition-all duration-300 lg:w-12 lg:h-12" src="./assets/img/logomark.min.svg" alt="Laravel" width="50" height="52" />
              <img src="./assets/img/logotype.min.svg" alt="Laravel" class="hidden ml-4 lg:block" width="114" height="29" />
            </a>
            <div class="px-4 pb-10 lg:px-8 xl:px-16">
              <nav id="indexed-nav" class="hidden lg:block lg:mt-4">
                <div class="docs_sidebar">
                  <ul>
                    <li>
                      <h2>Prologue</h2>
                      <ul>
                        <li>
                          <a href="/releases">Release Notes</a>
                        </li>
                        <li>
                          <a href="/upgrade">Upgrade Guide</a>
                        </li>
                        <li>
                          <a href="/contributions">Contribution Guide</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sub--on">
                      <h2>Getting Started</h2>
                      <ul>
                        <li class="active">
                          <a href="/installation">Installation</a>
                        </li>
                        <li>
                          <a href="/configuration">Configuration</a>
                        </li>
                        <li>
                          <a href="/structure">Directory Structure</a>
                        </li>
                        <li>
                          <a href="/frontend">Frontend</a>
                        </li>
                        <li>
                          <a href="/starter-kits">Starter Kits</a>
                        </li>
                        <li>
                          <a href="/deployment">Deployment</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h2>Architecture Concepts</h2>
                      <ul>
                        <li>
                          <a href="/lifecycle">Request Lifecycle</a>
                        </li>
                        <li>
                          <a href="/container">Service Container</a>
                        </li>
                        <li>
                          <a href="/providers">Service Providers</a>
                        </li>
                        <li>
                          <a href="/facades">Facades</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h2>The Basics</h2>
                      <ul>
                        <li>
                          <a href="/routing">Routing</a>
                        </li>
                        <li>
                          <a href="/middleware">Middleware</a>
                        </li>
                        <li>
                          <a href="/csrf">CSRF Protection</a>
                        </li>
                        <li>
                          <a href="/controllers">Controllers</a>
                        </li>
                        <li>
                          <a href="/requests">Requests</a>
                        </li>
                        <li>
                          <a href="/responses">Responses</a>
                        </li>
                        <li>
                          <a href="/views">Views</a>
                        </li>
                        <li>
                          <a href="/blade">Blade Templates</a>
                        </li>
                        <li>
                          <a href="/vite">Asset Bundling</a>
                        </li>
                        <li>
                          <a href="/urls">URL Generation</a>
                        </li>
                        <li>
                          <a href="/session">Session</a>
                        </li>
                        <li>
                          <a href="/validation">Validation</a>
                        </li>
                        <li>
                          <a href="/errors">Error Handling</a>
                        </li>
                        <li>
                          <a href="/logging">Logging</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h2>Digging Deeper</h2>
                      <ul>
                        <li>
                          <a href="/artisan">Artisan Console</a>
                        </li>
                        <li>
                          <a href="/broadcasting">Broadcasting</a>
                        </li>
                        <li>
                          <a href="/cache">Cache</a>
                        </li>
                        <li>
                          <a href="/collections">Collections</a>
                        </li>
                        <li>
                          <a href="/context">Context</a>
                        </li>
                        <li>
                          <a href="/contracts">Contracts</a>
                        </li>
                        <li>
                          <a href="/events">Events</a>
                        </li>
                        <li>
                          <a href="/filesystem">File Storage</a>
                        </li>
                        <li>
                          <a href="/helpers">Helpers</a>
                        </li>
                        <li>
                          <a href="/http-client">HTTP Client</a>
                        </li>
                        <li>
                          <a href="/localization">Localization</a>
                        </li>
                        <li>
                          <a href="/mail">Mail</a>
                        </li>
                        <li>
                          <a href="/notifications">Notifications</a>
                        </li>
                        <li>
                          <a href="/packages">Package Development</a>
                        </li>
                        <li>
                          <a href="/processes">Processes</a>
                        </li>
                        <li>
                          <a href="/queues">Queues</a>
                        </li>
                        <li>
                          <a href="/rate-limiting">Rate Limiting</a>
                        </li>
                        <li>
                          <a href="/strings">Strings</a>
                        </li>
                        <li>
                          <a href="/scheduling">Task Scheduling</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h2>Security</h2>
                      <ul>
                        <li>
                          <a href="/authentication">Authentication</a>
                        </li>
                        <li>
                          <a href="/authorization">Authorization</a>
                        </li>
                        <li>
                          <a href="/verification">Email Verification</a>
                        </li>
                        <li>
                          <a href="/encryption">Encryption</a>
                        </li>
                        <li>
                          <a href="/hashing">Hashing</a>
                        </li>
                        <li>
                          <a href="/passwords">Password Reset</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h2>Database</h2>
                      <ul>
                        <li>
                          <a href="/database">Getting Started</a>
                        </li>
                        <li>
                          <a href="/queries">Query Builder</a>
                        </li>
                        <li>
                          <a href="/pagination">Pagination</a>
                        </li>
                        <li>
                          <a href="/migrations">Migrations</a>
                        </li>
                        <li>
                          <a href="/seeding">Seeding</a>
                        </li>
                        <li>
                          <a href="/redis">Redis</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h2>Eloquent ORM</h2>
                      <ul>
                        <li>
                          <a href="/eloquent">Getting Started</a>
                        </li>
                        <li>
                          <a href="/eloquent-relationships">Relationships</a>
                        </li>
                        <li>
                          <a href="/eloquent-collections">Collections</a>
                        </li>
                        <li>
                          <a href="/eloquent-mutators">Mutators / Casts</a>
                        </li>
                        <li>
                          <a href="/eloquent-resources">API Resources</a>
                        </li>
                        <li>
                          <a href="/eloquent-serialization">Serialization</a>
                        </li>
                        <li>
                          <a href="/eloquent-factories">Factories</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h2>Testing</h2>
                      <ul>
                        <li>
                          <a href="/testing">Getting Started</a>
                        </li>
                        <li>
                          <a href="/http-tests">HTTP Tests</a>
                        </li>
                        <li>
                          <a href="/console-tests">Console Tests</a>
                        </li>
                        <li>
                          <a href="/dusk">Browser Tests</a>
                        </li>
                        <li>
                          <a href="/database-testing">Database</a>
                        </li>
                        <li>
                          <a href="/mocking">Mocking</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h2>Packages</h2>
                      <ul>
                        <li>
                          <a href="/starter-kits#laravel-breeze">Breeze</a>
                        </li>
                        <li>
                          <a href="/billing">Cashier (Stripe)</a>
                        </li>
                        <li>
                          <a href="/cashier-paddle">Cashier (Paddle)</a>
                        </li>
                        <li>
                          <a href="/dusk">Dusk</a>
                        </li>
                        <li>
                          <a href="/envoy">Envoy</a>
                        </li>
                        <li>
                          <a href="/fortify">Fortify</a>
                        </li>
                        <li>
                          <a href="/folio">Folio</a>
                        </li>
                        <li>
                          <a href="/homestead">Homestead</a>
                        </li>
                        <li>
                          <a href="/horizon">Horizon</a>
                        </li>
                        <li>
                          <a href="https://jetstream.laravel.com">Jetstream</a>
                        </li>
                        <li>
                          <a href="/mix">Mix</a>
                        </li>
                        <li>
                          <a href="/octane">Octane</a>
                        </li>
                        <li>
                          <a href="/passport">Passport</a>
                        </li>
                        <li>
                          <a href="/pennant">Pennant</a>
                        </li>
                        <li>
                          <a href="/pint">Pint</a>
                        </li>
                        <li>
                          <a href="/precognition">Precognition</a>
                        </li>
                        <li>
                          <a href="/prompts">Prompts</a>
                        </li>
                        <li>
                          <a href="/pulse">Pulse</a>
                        </li>
                        <li>
                          <a href="/reverb">Reverb</a>
                        </li>
                        <li>
                          <a href="/sail">Sail</a>
                        </li>
                        <li>
                          <a href="/sanctum">Sanctum</a>
                        </li>
                        <li>
                          <a href="/scout">Scout</a>
                        </li>
                        <li>
                          <a href="/socialite">Socialite</a>
                        </li>
                        <li>
                          <a href="/telescope">Telescope</a>
                        </li>
                        <li>
                          <a href="/valet">Valet</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/api/11.x">API Documentation</a>
                    </li>
                  </ul>
                </div>
              </nav>

              <template id="promote-forge">
                <div class="mt-4 px-3 py-2 border-dashed border-gray-200 border rounded-lg text-xs leading-loose text-gray-700 lg:block dark:border-gray-400 dark:text-gray-200">
                  <span class="font-medium">Laravel Forge:</span> create and manage PHP 8 servers. Deploy your Laravel applications in seconds. <a class="underline text-red-600" href="https://forge.laravel.com">Sign up now!</a>.
                </div>
              </template>

              <template id="promote-vapor">
                <div class="mt-4 px-3 py-2 border-dashed border-gray-200 border rounded-lg text-xs leading-loose text-gray-700 lg:block dark:border-gray-400 dark:text-gray-200">
                  <span class="font-medium">Laravel Vapor:</span> experience extreme scale on a dedicated serverless platform for Laravel. <a class="underline text-red-600" href="https://vapor.laravel.com">Sign up now!</a>.
                </div>
              </template>

              <template id="promote-nova">
                <div class="mt-4 px-3 py-2 border-dashed border-gray-200 border rounded-lg text-xs leading-loose text-gray-700 lg:block dark:border-gray-400 dark:text-gray-200">
                  <span class="font-medium">Laravel Nova:</span> The next generation of Nova is <a class="underline text-red-600" href="https://nova.laravel.com">now available</a>.
                </div>
              </template>

              <template id="promote-pulse">
                <div class="mt-4 px-3 py-2 border-dashed border-gray-200 border rounded-lg text-xs leading-loose text-gray-700 lg:block dark:border-gray-400 dark:text-gray-200">
                  <span class="font-medium">Laravel Pulse:</span> How's your health? Check your application's vital signs using <a href="https://pulse.laravel.com" class="underline text-red-600">Laravel Pulse</a>.
                </div>
              </template>

              <template id="promote-reverb">
                <div class="mt-4 px-3 py-2 border-dashed border-gray-200 border rounded-lg text-xs leading-loose text-gray-700 lg:block dark:border-gray-400 dark:text-gray-200">
                  <span class="font-medium">Laravel Reverb:</span> You can easily build dynamic, real-time Laravel applications using WebSockets. <a href="https://reverb.laravel.com" class="underline text-red-600">Laravel Reverb</a> is now
                  available!
                </div>
              </template>
              <script>
                const activePromotionTemplate = document.getElementById("promote-" + JSON.parse("[\u0022forge\u0022,\u0022vapor\u0022,\u0022nova\u0022,\u0022pulse\u0022,\u0022reverb\u0022]")[Math.floor(Math.random() * 5)]);

                activePromotionTemplate.replaceWith(activePromotionTemplate.content);
              </script>
            </div>
          </div>
        </aside>

        <header class="lg:hidden" @keydown.window.escape="navIsOpen = false" @click.away="navIsOpen = false">
          <div class="relative mx-auto w-full py-10 bg-white transition duration-200 dark:bg-dark-700">
            <div class="mx-auto px-8 sm:px-16 flex items-center justify-between">
              <a href="/" class="flex items-center">
                <img class="" src="./assets/img/logomark.min.svg" alt="Laravel" width="50" height="52" />
                <img class="hidden ml-5 sm:block" src="./assets/img/logotype.min.svg" alt="Laravel" width="114" height="29" />
              </a>
              <div class="flex-1 flex items-center justify-end">
                <button id="header__sun" onclick="toSystemMode()" title="Switch to system theme" class="relative w-10 h-10 focus:outline-none focus:shadow-outline text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                  </svg>
                </button>
                <button id="header__moon" onclick="toLightMode()" title="Switch to light mode" class="relative w-10 h-10 focus:outline-none focus:shadow-outline text-gray-500">
                  <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"
                    />
                  </svg>
                </button>
                <button id="header__indeterminate" onclick="toDarkMode()" title="Switch to dark mode" class="relative w-10 h-10 focus:outline-none focus:shadow-outline text-gray-500">
                  <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20V4Z" />
                  </svg>
                </button>
                <button class="ml-2 relative w-10 h-10 p-2 text-red-600 lg:hidden focus:outline-none focus:shadow-outline" aria-label="Menu" @click.prevent="navIsOpen = !navIsOpen">
                  <svg x-show="! navIsOpen" x-transition.opacity class="absolute inset-0 mt-2 ml-2 w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                  <svg x-show="navIsOpen" x-transition.opacity x-cloak class="absolute inset-0 mt-2 ml-2 w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
            <span :class="{ 'shadow-sm': navIsOpen }" class="absolute inset-0 z-20 pointer-events-none"></span>
          </div>
          <div x-show="navIsOpen" x-transition:enter="duration-150" x-transition:leave="duration-100 ease-in" x-cloak>
            <nav
              x-show="navIsOpen"
              x-cloak
              class="absolute w-full transform origin-top shadow-sm z-10"
              x-transition:enter="duration-150 ease-out"
              x-transition:enter-start="opacity-0 -translate-y-8 scale-75"
              x-transition:enter-end="opacity-100 scale-100"
              x-transition:leave="duration-100 ease-in"
              x-transition:leave-start="opacity-100 scale-100"
              x-transition:leave-end="opacity-0 -translate-y-8 scale-75"
            >
              <div class="relative p-8 bg-white docs_sidebar dark:bg-dark-600">
                <ul>
                  <li>
                    <h2>Prologue</h2>
                    <ul>
                      <li>
                        <a href="/releases">Release Notes</a>
                      </li>
                      <li>
                        <a href="/upgrade">Upgrade Guide</a>
                      </li>
                      <li>
                        <a href="/contributions">Contribution Guide</a>
                      </li>
                    </ul>
                  </li>
                  <li class="sub--on">
                    <h2>Getting Started</h2>
                    <ul>
                      <li class="active">
                        <a href="/installation">Installation</a>
                      </li>
                      <li>
                        <a href="/configuration">Configuration</a>
                      </li>
                      <li>
                        <a href="/structure">Directory Structure</a>
                      </li>
                      <li>
                        <a href="/frontend">Frontend</a>
                      </li>
                      <li>
                        <a href="/starter-kits">Starter Kits</a>
                      </li>
                      <li>
                        <a href="/deployment">Deployment</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Architecture Concepts</h2>
                    <ul>
                      <li>
                        <a href="/lifecycle">Request Lifecycle</a>
                      </li>
                      <li>
                        <a href="/container">Service Container</a>
                      </li>
                      <li>
                        <a href="/providers">Service Providers</a>
                      </li>
                      <li>
                        <a href="/facades">Facades</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>The Basics</h2>
                    <ul>
                      <li>
                        <a href="/routing">Routing</a>
                      </li>
                      <li>
                        <a href="/middleware">Middleware</a>
                      </li>
                      <li>
                        <a href="/csrf">CSRF Protection</a>
                      </li>
                      <li>
                        <a href="/controllers">Controllers</a>
                      </li>
                      <li>
                        <a href="/requests">Requests</a>
                      </li>
                      <li>
                        <a href="/responses">Responses</a>
                      </li>
                      <li>
                        <a href="/views">Views</a>
                      </li>
                      <li>
                        <a href="/blade">Blade Templates</a>
                      </li>
                      <li>
                        <a href="/vite">Asset Bundling</a>
                      </li>
                      <li>
                        <a href="/urls">URL Generation</a>
                      </li>
                      <li>
                        <a href="/session">Session</a>
                      </li>
                      <li>
                        <a href="/validation">Validation</a>
                      </li>
                      <li>
                        <a href="/errors">Error Handling</a>
                      </li>
                      <li>
                        <a href="/logging">Logging</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Digging Deeper</h2>
                    <ul>
                      <li>
                        <a href="/artisan">Artisan Console</a>
                      </li>
                      <li>
                        <a href="/broadcasting">Broadcasting</a>
                      </li>
                      <li>
                        <a href="/cache">Cache</a>
                      </li>
                      <li>
                        <a href="/collections">Collections</a>
                      </li>
                      <li>
                        <a href="/context">Context</a>
                      </li>
                      <li>
                        <a href="/contracts">Contracts</a>
                      </li>
                      <li>
                        <a href="/events">Events</a>
                      </li>
                      <li>
                        <a href="/filesystem">File Storage</a>
                      </li>
                      <li>
                        <a href="/helpers">Helpers</a>
                      </li>
                      <li>
                        <a href="/http-client">HTTP Client</a>
                      </li>
                      <li>
                        <a href="/localization">Localization</a>
                      </li>
                      <li>
                        <a href="/mail">Mail</a>
                      </li>
                      <li>
                        <a href="/notifications">Notifications</a>
                      </li>
                      <li>
                        <a href="/packages">Package Development</a>
                      </li>
                      <li>
                        <a href="/processes">Processes</a>
                      </li>
                      <li>
                        <a href="/queues">Queues</a>
                      </li>
                      <li>
                        <a href="/rate-limiting">Rate Limiting</a>
                      </li>
                      <li>
                        <a href="/strings">Strings</a>
                      </li>
                      <li>
                        <a href="/scheduling">Task Scheduling</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Security</h2>
                    <ul>
                      <li>
                        <a href="/authentication">Authentication</a>
                      </li>
                      <li>
                        <a href="/authorization">Authorization</a>
                      </li>
                      <li>
                        <a href="/verification">Email Verification</a>
                      </li>
                      <li>
                        <a href="/encryption">Encryption</a>
                      </li>
                      <li>
                        <a href="/hashing">Hashing</a>
                      </li>
                      <li>
                        <a href="/passwords">Password Reset</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Database</h2>
                    <ul>
                      <li>
                        <a href="/database">Getting Started</a>
                      </li>
                      <li>
                        <a href="/queries">Query Builder</a>
                      </li>
                      <li>
                        <a href="/pagination">Pagination</a>
                      </li>
                      <li>
                        <a href="/migrations">Migrations</a>
                      </li>
                      <li>
                        <a href="/seeding">Seeding</a>
                      </li>
                      <li>
                        <a href="/redis">Redis</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Eloquent ORM</h2>
                    <ul>
                      <li>
                        <a href="/eloquent">Getting Started</a>
                      </li>
                      <li>
                        <a href="/eloquent-relationships">Relationships</a>
                      </li>
                      <li>
                        <a href="/eloquent-collections">Collections</a>
                      </li>
                      <li>
                        <a href="/eloquent-mutators">Mutators / Casts</a>
                      </li>
                      <li>
                        <a href="/eloquent-resources">API Resources</a>
                      </li>
                      <li>
                        <a href="/eloquent-serialization">Serialization</a>
                      </li>
                      <li>
                        <a href="/eloquent-factories">Factories</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Testing</h2>
                    <ul>
                      <li>
                        <a href="/testing">Getting Started</a>
                      </li>
                      <li>
                        <a href="/http-tests">HTTP Tests</a>
                      </li>
                      <li>
                        <a href="/console-tests">Console Tests</a>
                      </li>
                      <li>
                        <a href="/dusk">Browser Tests</a>
                      </li>
                      <li>
                        <a href="/database-testing">Database</a>
                      </li>
                      <li>
                        <a href="/mocking">Mocking</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Packages</h2>
                    <ul>
                      <li>
                        <a href="/starter-kits#laravel-breeze">Breeze</a>
                      </li>
                      <li>
                        <a href="/billing">Cashier (Stripe)</a>
                      </li>
                      <li>
                        <a href="/cashier-paddle">Cashier (Paddle)</a>
                      </li>
                      <li>
                        <a href="/dusk">Dusk</a>
                      </li>
                      <li>
                        <a href="/envoy">Envoy</a>
                      </li>
                      <li>
                        <a href="/fortify">Fortify</a>
                      </li>
                      <li>
                        <a href="/folio">Folio</a>
                      </li>
                      <li>
                        <a href="/homestead">Homestead</a>
                      </li>
                      <li>
                        <a href="/horizon">Horizon</a>
                      </li>
                      <li>
                        <a href="https://jetstream.laravel.com">Jetstream</a>
                      </li>
                      <li>
                        <a href="/mix">Mix</a>
                      </li>
                      <li>
                        <a href="/octane">Octane</a>
                      </li>
                      <li>
                        <a href="/passport">Passport</a>
                      </li>
                      <li>
                        <a href="/pennant">Pennant</a>
                      </li>
                      <li>
                        <a href="/pint">Pint</a>
                      </li>
                      <li>
                        <a href="/precognition">Precognition</a>
                      </li>
                      <li>
                        <a href="/prompts">Prompts</a>
                      </li>
                      <li>
                        <a href="/pulse">Pulse</a>
                      </li>
                      <li>
                        <a href="/reverb">Reverb</a>
                      </li>
                      <li>
                        <a href="/sail">Sail</a>
                      </li>
                      <li>
                        <a href="/sanctum">Sanctum</a>
                      </li>
                      <li>
                        <a href="/scout">Scout</a>
                      </li>
                      <li>
                        <a href="/socialite">Socialite</a>
                      </li>
                      <li>
                        <a href="/telescope">Telescope</a>
                      </li>
                      <li>
                        <a href="/valet">Valet</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/api/11.x">API Documentation</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        <section class="flex-1 dark:bg-dark-700">
          <div class="max-w-screen-lg px-8 sm:px-16 lg:px-24">
            <div class="flex flex-col items-end border-b border-gray-200 py-1 transition-colors dark:border-gray-700 lg:mt-8 lg:flex-row-reverse">
              <div class="hidden lg:flex items-center justify-center ml-8">
                <button id="header__sun" onclick="toSystemMode()" title="Switch to system theme" class="relative w-10 h-10 focus:outline-none focus:shadow-outline text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                  </svg>
                </button>
                <button id="header__moon" onclick="toLightMode()" title="Switch to light mode" class="relative w-10 h-10 focus:outline-none focus:shadow-outline text-gray-500">
                  <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"
                    />
                  </svg>
                </button>
                <button id="header__indeterminate" onclick="toDarkMode()" title="Switch to dark mode" class="relative w-10 h-10 focus:outline-none focus:shadow-outline text-gray-500">
                  <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20V4Z" />
                  </svg>
                </button>
              </div>
              <div class="w-full lg:w-40 lg:pl-12">
                <div>
                  <label class="text-gray-600 text-xs tracking-widest uppercase dark:text-gray-500" for="version-switcher">Version</label>
                  <div x-data class="relative w-full bg-white transition-all duration-500 focus-within:border-gray-600 dark:bg-gray-800">
                    <select
                      id="version-switcher"
                      aria-label="Laravel version"
                      class="appearance-none flex-1 w-full px-0 py-1 placeholder-gray-900 tracking-wide bg-white focus:outline-none dark:bg-dark-700 dark:text-gray-400 dark:placeholder-gray-500"
                      @change="window.location = $event.target.value"
                    >
                      <option value="https://laravel.com/docs/master">Master</option>
                      <option selected value="https://laravel.com">11.x</option>
                      <option value="https://laravel.com/docs/10.x">10.x</option>
                      <option value="https://laravel.com/docs/9.x">9.x</option>
                      <option value="https://laravel.com/docs/8.x">8.x</option>
                      <option value="https://laravel.com/docs/7.x">7.x</option>
                      <option value="https://laravel.com/docs/6.x">6.x</option>
                      <option value="https://laravel.com/docs/5.8">5.8</option>
                      <option value="https://laravel.com/docs/5.7">5.7</option>
                      <option value="https://laravel.com/docs/5.6">5.6</option>
                      <option value="https://laravel.com/docs/5.5">5.5</option>
                      <option value="https://laravel.com/docs/5.4">5.4</option>
                      <option value="https://laravel.com/docs/5.3">5.3</option>
                      <option value="https://laravel.com/docs/5.2">5.2</option>
                      <option value="https://laravel.com/docs/5.1">5.1</option>
                      <option value="https://laravel.com/docs/5.0">5.0</option>
                      <option value="https://laravel.com/docs/4.2">4.2</option>
                    </select>
                    <img class="absolute inset-y-0 right-0 mt-2.5 w-2.5 h-2.5 text-gray-900 pointer-events-none dark:hidden" src="./assets/img/drop_arrow.min.svg" alt="" width="10" height="10" />
                    <img class="absolute inset-y-0 right-0 mt-2.5 w-2.5 h-2.5 text-gray-900 pointer-events-none hidden dark:block" src="./assets/img/drop_arrow.dark.min.svg" alt="" width="10" height="10" />
                  </div>
                </div>
              </div>
              <div class="relative mt-8 flex items-center justify-end w-full h-10 lg:mt-0">
                <div class="flex-1 flex items-center">
                  <button id="docsearch" class="text-gray-800 transition-colors dark:text-gray-400 w-full"></button>
                </div>
              </div>
            </div>

            <section class="mt-8 md:mt-16">
              <section class="docs_main max-w-prose">
                <div id="main-content">
                  <h1>Installation</h1>
                  <ul>
                    <li>
                      <a href="#meet-laravel">Meet Laravel</a>
                      <ul>
                        <li>
                          <a href="#why-laravel">Why Laravel?</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#creating-a-laravel-project">Creating a Laravel Project</a>
                    </li>
                    <li>
                      <a href="#initial-configuration">Initial Configuration</a>
                      <ul>
                        <li>
                          <a href="#environment-based-configuration">Environment Based Configuration</a>
                        </li>
                        <li>
                          <a href="#databases-and-migrations">Databases and Migrations</a>
                        </li>
                        <li>
                          <a href="#directory-configuration">Directory Configuration</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#local-installation-using-herd">Local Installation Using Herd</a>
                      <ul>
                        <li>
                          <a href="#herd-on-macos">Herd on macOS</a>
                        </li>
                        <li>
                          <a href="#herd-on-windows">Herd on Windows</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#docker-installation-using-sail">Docker Installation Using Sail</a>
                      <ul>
                        <li>
                          <a href="#sail-on-macos">Sail on macOS</a>
                        </li>
                        <li>
                          <a href="#sail-on-windows">Sail on Windows</a>
                        </li>
                        <li>
                          <a href="#sail-on-linux">Sail on Linux</a>
                        </li>
                        <li>
                          <a href="#choosing-your-sail-services">Choosing Your Sail Services</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#ide-support">IDE Support</a>
                    </li>
                    <li>
                      <a href="#next-steps">Next Steps</a>
                      <ul>
                        <li>
                          <a href="#laravel-the-fullstack-framework">Laravel the Full Stack Framework</a>
                        </li>
                        <li>
                          <a href="#laravel-the-api-backend">Laravel the API Backend</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p><a name="meet-laravel"></a></p>
                  <h2>Meet Laravel</h2>
                  <p>
                    Laravel is a web application framework with expressive, elegant syntax. A web framework provides a structure and starting point for creating your application, allowing you to focus on creating something amazing while we
                    sweat the details.
                  </p>
                  <p>
                    Laravel strives to provide an amazing developer experience while providing powerful features such as thorough dependency injection, an expressive database abstraction layer, queues and scheduled jobs, unit and
                    integration testing, and more.
                  </p>
                  <p>
                    Whether you are new to PHP web frameworks or have years of experience, Laravel is a framework that can grow with you. We'll help you take your first steps as a web developer or give you a boost as you take your expertise
                    to the next level. We can't wait to see what you build.
                  </p>
                  <div class="mb-10 max-w-2xl mx-auto px-4 py-8 shadow-lg lg:flex lg:items-center callout">
                    <div class="w-20 h-20 mb-6 flex items-center justify-center shrink-0 lg:mb-0 bg-purple-600">
                      <div class="opacity-75">
                        <svg width="28" height="40" viewBox="0 0 28 40" xmlns="http://www.w3.org/2000/svg">
                          <title>lightbulb</title>
                          <path
                            d="M12 28h4v-8h-4v8zM8 40h12v-8H8v8zm13.98-14.52c-1.001.705-1.661 1.545-1.98 2.52H8c-.416-.959-1.076-1.799-1.98-2.52A13.99 13.99 0 0 1 0 14C0 6.272 6.272 0 14 0s14 6.272 14 14a13.99 13.99 0 0 1-6.02 11.48z"
                            fill="#FFF"
                            fill-rule="nonzero"
                          />
                        </svg>
                      </div>
                    </div>
                    <p class="mb-0 lg:ml-6 callout">
                      New to Laravel? Check out the <a href="https://bootcamp.laravel.com">Laravel Bootcamp</a> for a hands-on tour of the framework while we walk you through building your first Laravel application.
                    </p>
                  </div>
                  <p><a name="why-laravel"></a></p>
                  <h3>Why Laravel?</h3>
                  <p>There are a variety of tools and frameworks available to you when building a web application. However, we believe Laravel is the best choice for building modern, full-stack web applications.</p>
                  <h4>A Progressive Framework</h4>
                  <p>
                    We like to call Laravel a &quot;progressive&quot; framework. By that, we mean that Laravel grows with you. If you're just taking your first steps into web development, Laravel's vast library of documentation, guides, and
                    <a href="https://laracasts.com">video tutorials</a> will help you learn the ropes without becoming overwhelmed.
                  </p>
                  <p>
                    If you're a senior developer, Laravel gives you robust tools for <a href="/container">dependency injection</a>, <a href="/testing">unit testing</a>, <a href="/queues">queues</a>,
                    <a href="/broadcasting">real-time events</a>, and more. Laravel is fine-tuned for building professional web applications and ready to handle enterprise work loads.
                  </p>
                  <h4>A Scalable Framework</h4>
                  <p>
                    Laravel is incredibly scalable. Thanks to the scaling-friendly nature of PHP and Laravel's built-in support for fast, distributed cache systems like Redis, horizontal scaling with Laravel is a breeze. In fact, Laravel
                    applications have been easily scaled to handle hundreds of millions of requests per month.
                  </p>
                  <p>Need extreme scaling? Platforms like <a href="https://vapor.laravel.com">Laravel Vapor</a> allow you to run your Laravel application at nearly limitless scale on AWS's latest serverless technology.</p>
                  <h4>A Community Framework</h4>
                  <p>
                    Laravel combines the best packages in the PHP ecosystem to offer the most robust and developer friendly framework available. In addition, thousands of talented developers from around the world have
                    <a href="https://github.com/laravel/framework">contributed to the framework</a>. Who knows, maybe you'll even become a Laravel contributor.
                  </p>
                  <p><a name="creating-a-laravel-project"></a></p>
                  <h2>Creating a Laravel Project</h2>
                  <p>
                    Before creating your first Laravel project, make sure that your local machine has PHP and <a href="https://getcomposer.org">Composer</a> installed. If you are developing on macOS or Windows, PHP, Composer, Node and NPM
                    can be installed in minutes via <a href="#local-installation-using-herd">Laravel Herd</a>.
                  </p>
                  <p>After you have installed PHP and Composer, you may create a new Laravel project via Composer's <code>create-project</code> command:</p>
                  <div class="code-container">
                    <pre><code data-theme="olaolu-palenight" data-lang="nothing" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #BFC7D5;">composer create-project laravel/laravel example-app</span></div></code></pre>
                  </div>
                  <p>
                    Or, you may create new Laravel projects by globally installing <a href="https://github.com/laravel/installer">the Laravel installer</a> via Composer. The Laravel installer allows you to select your preferred testing
                    framework, database, and starter kit when creating new applications:
                  </p>
                  <div class="code-container">
                    <pre><code data-theme="olaolu-palenight" data-lang="nothing" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #BFC7D5;">composer global require laravel/installer</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #BFC7D5;">laravel new example-app</span></div></code></pre>
                  </div>
                  <p>Once the project has been created, start Laravel's local development server using Laravel Artisan's <code>serve</code> command:</p>
                  <div class="code-container">
                    <pre><code data-theme="olaolu-palenight" data-lang="nothing" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #BFC7D5;">cd example-app</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #BFC7D5;">php artisan serve</span></div></code></pre>
                  </div>
                  <p>
                    Once you have started the Artisan development server, your application will be accessible in your web browser at <a href="http://localhost:8000">http://localhost:8000</a>. Next, you're ready to
                    <a href="#next-steps">start taking your next steps into the Laravel ecosystem</a>. Of course, you may also want to <a href="#databases-and-migrations">configure a database</a>.
                  </p>
                  <div class="mb-10 max-w-2xl mx-auto px-4 py-8 shadow-lg lg:flex lg:items-center callout">
                    <div class="w-20 h-20 mb-6 flex items-center justify-center shrink-0 lg:mb-0 bg-purple-600">
                      <div class="opacity-75">
                        <svg width="28" height="40" viewBox="0 0 28 40" xmlns="http://www.w3.org/2000/svg">
                          <title>lightbulb</title>
                          <path
                            d="M12 28h4v-8h-4v8zM8 40h12v-8H8v8zm13.98-14.52c-1.001.705-1.661 1.545-1.98 2.52H8c-.416-.959-1.076-1.799-1.98-2.52A13.99 13.99 0 0 1 0 14C0 6.272 6.272 0 14 0s14 6.272 14 14a13.99 13.99 0 0 1-6.02 11.48z"
                            fill="#FFF"
                            fill-rule="nonzero"
                          />
                        </svg>
                      </div>
                    </div>
                    <p class="mb-0 lg:ml-6 callout">
                      If you would like a head start when developing your Laravel application, consider using one of our <a href="/starter-kits">starter kits</a>. Laravel's starter kits provide backend and frontend authentication
                      scaffolding for your new Laravel application.
                    </p>
                  </div>
                  <p><a name="initial-configuration"></a></p>
                  <h2>Initial Configuration</h2>
                  <p>
                    All of the configuration files for the Laravel framework are stored in the <code>config</code> directory. Each option is documented, so feel free to look through the files and get familiar with the options available to
                    you.
                  </p>
                  <p>
                    Laravel needs almost no additional configuration out of the box. You are free to get started developing! However, you may wish to review the <code>config/app.php</code> file and its documentation. It contains several
                    options such as <code>timezone</code> and <code>locale</code> that you may wish to change according to your application.
                  </p>
                  <p><a name="environment-based-configuration"></a></p>
                  <h3>Environment Based Configuration</h3>
                  <p>
                    Since many of Laravel's configuration option values may vary depending on whether your application is running on your local machine or on a production web server, many important configuration values are defined using the
                    <code>.env</code> file that exists at the root of your application.
                  </p>
                  <p>
                    Your <code>.env</code> file should not be committed to your application's source control, since each developer / server using your application could require a different environment configuration. Furthermore, this would
                    be a security risk in the event an intruder gains access to your source control repository, since any sensitive credentials would be exposed.
                  </p>
                  <div class="mb-10 max-w-2xl mx-auto px-4 py-8 shadow-lg lg:flex lg:items-center callout">
                    <div class="w-20 h-20 mb-6 flex items-center justify-center shrink-0 lg:mb-0 bg-purple-600">
                      <div class="opacity-75">
                        <svg width="28" height="40" viewBox="0 0 28 40" xmlns="http://www.w3.org/2000/svg">
                          <title>lightbulb</title>
                          <path
                            d="M12 28h4v-8h-4v8zM8 40h12v-8H8v8zm13.98-14.52c-1.001.705-1.661 1.545-1.98 2.52H8c-.416-.959-1.076-1.799-1.98-2.52A13.99 13.99 0 0 1 0 14C0 6.272 6.272 0 14 0s14 6.272 14 14a13.99 13.99 0 0 1-6.02 11.48z"
                            fill="#FFF"
                            fill-rule="nonzero"
                          />
                        </svg>
                      </div>
                    </div>
                    <p class="mb-0 lg:ml-6 callout">
                      For more information about the <code>.env</code> file and environment based configuration, check out the full <a href="/configuration#environment-configuration">configuration documentation</a>.
                    </p>
                  </div>
                  <p><a name="databases-and-migrations"></a></p>
                  <h3>Databases and Migrations</h3>
                  <p>
                    Now that you have created your Laravel application, you probably want to store some data in a database. By default, your application's <code>.env</code> configuration file specifies that Laravel will be interacting with
                    a SQLite database.
                  </p>
                  <p>During the creation of the project, Laravel created a <code>database/database.sqlite</code> file for you, and ran the necessary migrations to create the application's database tables.</p>
                  <p>
                    If you prefer to use another database driver such as MySQL or PostgreSQL, you can update your <code>.env</code> configuration file to use the appropriate database. For example, if you wish to use MySQL, update your
                    <code>.env</code> configuration file's <code>DB_*</code> variables like so:
                  </p>
                  <div class="code-container">
                    <pre><code data-theme="olaolu-palenight" data-lang="ini" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #C792EA;">DB_CONNECTION</span><span style="color: #BFC7D5;">=mysql</span></div><div class='line'><span style="color: #C792EA;">DB_HOST</span><span style="color: #BFC7D5;">=127.0.0.1</span></div><div class='line'><span style="color: #C792EA;">DB_PORT</span><span style="color: #BFC7D5;">=3306</span></div><div class='line'><span style="color: #C792EA;">DB_DATABASE</span><span style="color: #BFC7D5;">=laravel</span></div><div class='line'><span style="color: #C792EA;">DB_USERNAME</span><span style="color: #BFC7D5;">=root</span></div><div class='line'><span style="color: #C792EA;">DB_PASSWORD</span><span style="color: #BFC7D5;">=</span></div></code></pre>
                  </div>
                  <p>If you choose to use a database other than SQLite, you will need to create the database and run your application's <a href="/migrations">database migrations</a>:</p>
                  <div class="code-container">
                    <pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #BFC7D5;">php </span><span style="color: #BFC7D5;">artisan</span><span style="color: #BFC7D5;"> </span><span style="color: #BFC7D5;">migrate</span></div></code></pre>
                  </div>
                  <div class="mb-10 max-w-2xl mx-auto px-4 py-8 shadow-lg lg:flex lg:items-center callout">
                    <div class="w-20 h-20 mb-6 flex items-center justify-center shrink-0 lg:mb-0 bg-purple-600">
                      <div class="opacity-75">
                        <svg width="28" height="40" viewBox="0 0 28 40" xmlns="http://www.w3.org/2000/svg">
                          <title>lightbulb</title>
                          <path
                            d="M12 28h4v-8h-4v8zM8 40h12v-8H8v8zm13.98-14.52c-1.001.705-1.661 1.545-1.98 2.52H8c-.416-.959-1.076-1.799-1.98-2.52A13.99 13.99 0 0 1 0 14C0 6.272 6.272 0 14 0s14 6.272 14 14a13.99 13.99 0 0 1-6.02 11.48z"
                            fill="#FFF"
                            fill-rule="nonzero"
                          />
                        </svg>
                      </div>
                    </div>
                    <p class="mb-0 lg:ml-6 callout">If you are developing on macOS or Windows and need to install MySQL, PostgreSQL, or Redis locally, consider using <a href="https://herd.laravel.com/#plans">Herd Pro</a>.</p>
                  </div>
                  <p><a name="directory-configuration"></a></p>
                  <h3>Directory Configuration</h3>
                  <p>
                    Laravel should always be served out of the root of the &quot;web directory&quot; configured for your web server. You should not attempt to serve a Laravel application out of a subdirectory of the &quot;web
                    directory&quot;. Attempting to do so could expose sensitive files present within your application.
                  </p>
                  <p><a name="local-installation-using-herd"></a></p>
                  <h2>Local Installation Using Herd</h2>
                  <p>
                    <a href="https://herd.laravel.com">Laravel Herd</a> is a blazing fast, native Laravel and PHP development environment for macOS and Windows. Herd includes everything you need to get started with Laravel development,
                    including PHP and Nginx.
                  </p>
                  <p>
                    Once you install Herd, you're ready to start developing with Laravel. Herd includes command line tools for <code>php</code>, <code>composer</code>, <code>laravel</code>, <code>expose</code>, <code>node</code>,
                    <code>npm</code>, and <code>nvm</code>.
                  </p>
                  <div class="mb-10 max-w-2xl mx-auto px-4 py-8 shadow-lg lg:flex lg:items-center callout">
                    <div class="w-20 h-20 mb-6 flex items-center justify-center shrink-0 lg:mb-0 bg-purple-600">
                      <div class="opacity-75">
                        <svg width="28" height="40" viewBox="0 0 28 40" xmlns="http://www.w3.org/2000/svg">
                          <title>lightbulb</title>
                          <path
                            d="M12 28h4v-8h-4v8zM8 40h12v-8H8v8zm13.98-14.52c-1.001.705-1.661 1.545-1.98 2.52H8c-.416-.959-1.076-1.799-1.98-2.52A13.99 13.99 0 0 1 0 14C0 6.272 6.272 0 14 0s14 6.272 14 14a13.99 13.99 0 0 1-6.02 11.48z"
                            fill="#FFF"
                            fill-rule="nonzero"
                          />
                        </svg>
                      </div>
                    </div>
                    <p class="mb-0 lg:ml-6 callout">
                      <a href="https://herd.laravel.com/#plans">Herd Pro</a> augments Herd with additional powerful features, such as the ability to create and manage local MySQL, Postgres, and Redis databases, as well as local mail viewing
                      and log monitoring.
                    </p>
                  </div>
                  <p><a name="herd-on-macos"></a></p>
                  <h3>Herd on macOS</h3>
                  <p>
                    If you develop on macOS, you can download the Herd installer from the <a href="https://herd.laravel.com">Herd website</a>. The installer automatically downloads the latest version of PHP and configures your Mac to always
                    run <a href="https://www.nginx.com/">Nginx</a> in the background.
                  </p>
                  <p>
                    Herd for macOS uses <a href="https://en.wikipedia.org/wiki/Dnsmasq">dnsmasq</a> to support &quot;parked&quot; directories. Any Laravel application in a parked directory will automatically be served by Herd. By default,
                    Herd creates a parked directory at <code>~/Herd</code> and you can access any Laravel application in this directory on the <code>.test</code> domain using its directory name.
                  </p>
                  <p>After installing Herd, the fastest way to create a new Laravel project is using the Laravel CLI, which is bundled with Herd:</p>
                  <div class="code-container">
                    <pre><code data-theme="olaolu-palenight" data-lang="nothing" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #BFC7D5;">cd ~/Herd</span></div><div class='line'><span style="color: #BFC7D5;">laravel new my-app</span></div><div class='line'><span style="color: #BFC7D5;">cd my-app</span></div><div class='line'><span style="color: #BFC7D5;">herd open</span></div></code></pre>
                  </div>
                  <p>Of course, you can always manage your parked directories and other PHP settings via Herd's UI, which can be opened from the Herd menu in your system tray.</p>
                  <p>You can learn more about Herd by checking out the <a href="https://herd.laravel.com/docs">Herd documentation</a>.</p>
                  <p><a name="herd-on-windows"></a></p>
                  <h3>Herd on Windows</h3>
                  <p>
                    You can download the Windows installer for Herd on the <a href="https://herd.laravel.com/windows">Herd website</a>. After the installation finishes, you can start Herd to complete the onboarding process and access the
                    Herd UI for the first time.
                  </p>
                  <p>The Herd UI is accessible by left-clicking on Herd's system tray icon. A right-click opens the quick menu with access to all tools that you need on a daily basis.</p>
                  <p>
                    During installation, Herd creates a &quot;parked&quot; directory in your home directory at <code>%USERPROFILE%\Herd</code>. Any Laravel application in a parked directory will automatically be served by Herd, and you can
                    access any Laravel application in this directory on the <code>.test</code> domain using its directory name.
                  </p>
                  <p>After installing Herd, the fastest way to create a new Laravel project is using the Laravel CLI, which is bundled with Herd. To get started, open Powershell and run the following commands:</p>
                  <div class="code-container">
                    <pre><code data-theme="olaolu-palenight" data-lang="nothing" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #BFC7D5;">cd ~\Herd</span></div><div class='line'><span style="color: #BFC7D5;">laravel new my-app</span></div><div class='line'><span style="color: #BFC7D5;">cd my-app</span></div><div class='line'><span style="color: #BFC7D5;">herd open</span></div></code></pre>
                  </div>
                  <p>You can learn more about Herd by checking out the <a href="https://herd.laravel.com/docs/windows">Herd documentation for Windows</a>.</p>
                  <p><a name="docker-installation-using-sail"></a></p>
                  <h2>Docker Installation Using Sail</h2>
                  <p>
                    We want it to be as easy as possible to get started with Laravel regardless of your preferred operating system. So, there are a variety of options for developing and running a Laravel project on your local machine. While
                    you may wish to explore these options at a later time, Laravel provides <a href="/sail">Sail</a>, a built-in solution for running your Laravel project using <a href="https://www.docker.com">Docker</a>.
                  </p>
                  <p>
                    Docker is a tool for running applications and services in small, light-weight &quot;containers&quot; which do not interfere with your local machine's installed software or configuration. This means you don't have to
                    worry about configuring or setting up complicated development tools such as web servers and databases on your local machine. To get started, you only need to install
                    <a href="https://www.docker.com/products/docker-desktop">Docker Desktop</a>.
                  </p>
                  <p>
                    Laravel Sail is a light-weight command-line interface for interacting with Laravel's default Docker configuration. Sail provides a great starting point for building a Laravel application using PHP, MySQL, and Redis
                    without requiring prior Docker experience.
                  </p>
                  <div class="mb-10 max-w-2xl mx-auto px-4 py-8 shadow-lg lg:flex lg:items-center callout">
                    <div class="w-20 h-20 mb-6 flex items-center justify-center shrink-0 lg:mb-0 bg-purple-600">
                      <div class="opacity-75">
                        <svg width="28" height="40" viewBox="0 0 28 40" xmlns="http://www.w3.org/2000/svg">
                          <title>lightbulb</title>
                          <path
                            d="M12 28h4v-8h-4v8zM8 40h12v-8H8v8zm13.98-14.52c-1.001.705-1.661 1.545-1.98 2.52H8c-.416-.959-1.076-1.799-1.98-2.52A13.99 13.99 0 0 1 0 14C0 6.272 6.272 0 14 0s14 6.272 14 14a13.99 13.99 0 0 1-6.02 11.48z"
                            fill="#FFF"
                            fill-rule="nonzero"
                          />
                        </svg>
                      </div>
                    </div>
                    <p class="mb-0 lg:ml-6 callout">Already a Docker expert? Don't worry! Everything about Sail can be customized using the <code>docker-compose.yml</code> file included with Laravel.</p>
                  </div>
                  <p><a name="sail-on-macos"></a></p>
                  <h3>Sail on macOS</h3>
                  <p>
                    If you're developing on a Mac and <a href="https://www.docker.com/products/docker-desktop">Docker Desktop</a> is already installed, you can use a simple terminal command to create a new Laravel project. For example, to
                    create a new Laravel application in a directory named &quot;example-app&quot;, you may run the following command in your terminal:
                  </p>
                  <div class="code-container">
                    <pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #BFC7D5;">curl </span><span style="color: #82AAFF;">-s</span><span style="color: #BFC7D5;"> </span><span style="color: #D9F5DD;">&quot;</span><span style="color: #C3E88D;">https://laravel.build/example-app</span><span style="color: #D9F5DD;">&quot;</span><span style="color: #BFC7D5;"> </span><span style="color: #89DDFF;">|</span><span style="color: #BFC7D5;"> bash</span></div></code></pre>
                  </div>
                  <p>
                    Of course, you can change &quot;example-app&quot; in this URL to anything you like - just make sure the application name only contains alpha-numeric characters, dashes, and underscores. The Laravel application's
                    directory will be created within the directory you execute the command from.
                  </p>
                  <p>Sail installation may take several minutes while Sail's application containers are built on your local machine.</p>
                  <p>
                    After the project has been created, you can navigate to the application directory and start Laravel Sail. Laravel Sail provides a simple command-line interface for interacting with Laravel's default Docker configuration:
                  </p>
                  <div class="code-container">
                    <pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #89DDFF;">cd</span><span style="color: #BFC7D5;"> </span><span style="color: #BFC7D5;">example-app</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #BFC7D5;">./vendor/bin/sail </span><span style="color: #BFC7D5;">up</span></div></code></pre>
                  </div>
                  <p>Once the application's Docker containers have started, you should run your application's <a href="/migrations">database migrations</a>:</p>
                  <div class="code-container">
                    <pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #BFC7D5;">./vendor/bin/sail </span><span style="color: #BFC7D5;">artisan</span><span style="color: #BFC7D5;"> </span><span style="color: #BFC7D5;">migrate</span></div></code></pre>
                  </div>
                  <p>Finally, you can access the application in your web browser at: <a href="http://localhost">http://localhost</a>.</p>
                  <div class="mb-10 max-w-2xl mx-auto px-4 py-8 shadow-lg lg:flex lg:items-center callout">
                    <div class="w-20 h-20 mb-6 flex items-center justify-center shrink-0 lg:mb-0 bg-purple-600">
                      <div class="opacity-75">
                        <svg width="28" height="40" viewBox="0 0 28 40" xmlns="http://www.w3.org/2000/svg">
                          <title>lightbulb</title>
                          <path
                            d="M12 28h4v-8h-4v8zM8 40h12v-8H8v8zm13.98-14.52c-1.001.705-1.661 1.545-1.98 2.52H8c-.416-.959-1.076-1.799-1.98-2.52A13.99 13.99 0 0 1 0 14C0 6.272 6.272 0 14 0s14 6.272 14 14a13.99 13.99 0 0 1-6.02 11.48z"
                            fill="#FFF"
                            fill-rule="nonzero"
                          />
                        </svg>
                      </div>
                    </div>
                    <p class="mb-0 lg:ml-6 callout">To continue learning more about Laravel Sail, review its <a href="/sail">complete documentation</a>.</p>
                  </div>
                  <p><a name="sail-on-windows"></a></p>
                  <h3>Sail on Windows</h3>
                  <p>
                    Before we create a new Laravel application on your Windows machine, make sure to install <a href="https://www.docker.com/products/docker-desktop">Docker Desktop</a>. Next, you should ensure that Windows Subsystem for
                    Linux 2 (WSL2) is installed and enabled. WSL allows you to run Linux binary executables natively on Windows 10. Information on how to install and enable WSL2 can be found within Microsoft's
                    <a href="https://docs.microsoft.com/en-us/windows/wsl/install-win10">developer environment documentation</a>.
                  </p>
                  <div class="mb-10 max-w-2xl mx-auto px-4 py-8 shadow-lg lg:flex lg:items-center callout">
                    <div class="w-20 h-20 mb-6 flex items-center justify-center shrink-0 lg:mb-0 bg-purple-600">
                      <div class="opacity-75">
                        <svg width="28" height="40" viewBox="0 0 28 40" xmlns="http://www.w3.org/2000/svg">
                          <title>lightbulb</title>
                          <path
                            d="M12 28h4v-8h-4v8zM8 40h12v-8H8v8zm13.98-14.52c-1.001.705-1.661 1.545-1.98 2.52H8c-.416-.959-1.076-1.799-1.98-2.52A13.99 13.99 0 0 1 0 14C0 6.272 6.272 0 14 0s14 6.272 14 14a13.99 13.99 0 0 1-6.02 11.48z"
                            fill="#FFF"
                            fill-rule="nonzero"
                          />
                        </svg>
                      </div>
                    </div>
                    <p class="mb-0 lg:ml-6 callout">After installing and enabling WSL2, you should ensure that Docker Desktop is <a href="https://docs.docker.com/docker-for-windows/wsl/">configured to use the WSL2 backend</a>.</p>
                  </div>
                  <p>
                    Next, you are ready to create your first Laravel project. Launch <a href="https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?rtc=1&amp;activetab=pivot:overviewtab">Windows Terminal</a> and begin a new
                    terminal session for your WSL2 Linux operating system. Next, you can use a simple terminal command to create a new Laravel project. For example, to create a new Laravel application in a directory named
                    &quot;example-app&quot;, you may run the following command in your terminal:
                  </p>
                  <div class="code-container">
                    <pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #BFC7D5;">curl </span><span style="color: #82AAFF;">-s</span><span style="color: #BFC7D5;"> </span><span style="color: #BFC7D5;">https://laravel.build/example-app</span><span style="color: #BFC7D5;"> </span><span style="color: #89DDFF;">|</span><span style="color: #BFC7D5;"> bash</span></div></code></pre>
                  </div>
                  <p>
                    Of course, you can change &quot;example-app&quot; in this URL to anything you like - just make sure the application name only contains alpha-numeric characters, dashes, and underscores. The Laravel application's
                    directory will be created within the directory you execute the command from.
                  </p>
                  <p>Sail installation may take several minutes while Sail's application containers are built on your local machine.</p>
                  <p>
                    After the project has been created, you can navigate to the application directory and start Laravel Sail. Laravel Sail provides a simple command-line interface for interacting with Laravel's default Docker configuration:
                  </p>
                  <div class="code-container">
                    <pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #89DDFF;">cd</span><span style="color: #BFC7D5;"> </span><span style="color: #BFC7D5;">example-app</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #BFC7D5;">./vendor/bin/sail </span><span style="color: #BFC7D5;">up</span></div></code></pre>
                  </div>
                  <p>Once the application's Docker containers have started, you should run your application's <a href="/migrations">database migrations</a>:</p>
                  <div class="code-container">
                    <pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #BFC7D5;">./vendor/bin/sail </span><span style="color: #BFC7D5;">artisan</span><span style="color: #BFC7D5;"> </span><span style="color: #BFC7D5;">migrate</span></div></code></pre>
                  </div>
                  <p>Finally, you can access the application in your web browser at: <a href="http://localhost">http://localhost</a>.</p>
                  <div class="mb-10 max-w-2xl mx-auto px-4 py-8 shadow-lg lg:flex lg:items-center callout">
                    <div class="w-20 h-20 mb-6 flex items-center justify-center shrink-0 lg:mb-0 bg-purple-600">
                      <div class="opacity-75">
                        <svg width="28" height="40" viewBox="0 0 28 40" xmlns="http://www.w3.org/2000/svg">
                          <title>lightbulb</title>
                          <path
                            d="M12 28h4v-8h-4v8zM8 40h12v-8H8v8zm13.98-14.52c-1.001.705-1.661 1.545-1.98 2.52H8c-.416-.959-1.076-1.799-1.98-2.52A13.99 13.99 0 0 1 0 14C0 6.272 6.272 0 14 0s14 6.272 14 14a13.99 13.99 0 0 1-6.02 11.48z"
                            fill="#FFF"
                            fill-rule="nonzero"
                          />
                        </svg>
                      </div>
                    </div>
                    <p class="mb-0 lg:ml-6 callout">To continue learning more about Laravel Sail, review its <a href="/sail">complete documentation</a>.</p>
                  </div>
                  <h4>Developing Within WSL2</h4>
                  <p>
                    Of course, you will need to be able to modify the Laravel application files that were created within your WSL2 installation. To accomplish this, we recommend using Microsoft's
                    <a href="https://code.visualstudio.com">Visual Studio Code</a> editor and their first-party extension for
                    <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack">Remote Development</a>.
                  </p>
                  <p>Once these tools are installed, you may open any Laravel project by executing the <code>code .</code> command from your application's root directory using Windows Terminal.</p>
                  <p><a name="sail-on-linux"></a></p>
                  <h3>Sail on Linux</h3>
                  <p>If you're developing on Linux and <a href="https://docs.docker.com/compose/install/">Docker Compose</a> is already installed, you can use a simple terminal command to create a new Laravel project.</p>
                  <p>First, if you are using Docker Desktop for Linux, you should execute the following command. If you are not using Docker Desktop for Linux, you may skip this step:</p>
                  <div class="code-container">
                    <pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #BFC7D5;">docker </span><span style="color: #BFC7D5;">context</span><span style="color: #BFC7D5;"> </span><span style="color: #BFC7D5;">use</span><span style="color: #BFC7D5;"> </span><span style="color: #BFC7D5;">default</span></div></code></pre>
                  </div>
                  <p>Then, to create a new Laravel application in a directory named &quot;example-app&quot;, you may run the following command in your terminal:</p>
                  <div class="code-container">
                    <pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #BFC7D5;">curl </span><span style="color: #82AAFF;">-s</span><span style="color: #BFC7D5;"> </span><span style="color: #BFC7D5;">https://laravel.build/example-app</span><span style="color: #BFC7D5;"> </span><span style="color: #89DDFF;">|</span><span style="color: #BFC7D5;"> bash</span></div></code></pre>
                  </div>
                  <p>
                    Of course, you can change &quot;example-app&quot; in this URL to anything you like - just make sure the application name only contains alpha-numeric characters, dashes, and underscores. The Laravel application's
                    directory will be created within the directory you execute the command from.
                  </p>
                  <p>Sail installation may take several minutes while Sail's application containers are built on your local machine.</p>
                  <p>
                    After the project has been created, you can navigate to the application directory and start Laravel Sail. Laravel Sail provides a simple command-line interface for interacting with Laravel's default Docker configuration:
                  </p>
                  <div class="code-container">
                    <pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #89DDFF;">cd</span><span style="color: #BFC7D5;"> </span><span style="color: #BFC7D5;">example-app</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #BFC7D5;">./vendor/bin/sail </span><span style="color: #BFC7D5;">up</span></div></code></pre>
                  </div>
                  <p>Once the application's Docker containers have started, you should run your application's <a href="/migrations">database migrations</a>:</p>
                  <div class="code-container">
                    <pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #BFC7D5;">./vendor/bin/sail </span><span style="color: #BFC7D5;">artisan</span><span style="color: #BFC7D5;"> </span><span style="color: #BFC7D5;">migrate</span></div></code></pre>
                  </div>
                  <p>Finally, you can access the application in your web browser at: <a href="http://localhost">http://localhost</a>.</p>
                  <div class="mb-10 max-w-2xl mx-auto px-4 py-8 shadow-lg lg:flex lg:items-center callout">
                    <div class="w-20 h-20 mb-6 flex items-center justify-center shrink-0 lg:mb-0 bg-purple-600">
                      <div class="opacity-75">
                        <svg width="28" height="40" viewBox="0 0 28 40" xmlns="http://www.w3.org/2000/svg">
                          <title>lightbulb</title>
                          <path
                            d="M12 28h4v-8h-4v8zM8 40h12v-8H8v8zm13.98-14.52c-1.001.705-1.661 1.545-1.98 2.52H8c-.416-.959-1.076-1.799-1.98-2.52A13.99 13.99 0 0 1 0 14C0 6.272 6.272 0 14 0s14 6.272 14 14a13.99 13.99 0 0 1-6.02 11.48z"
                            fill="#FFF"
                            fill-rule="nonzero"
                          />
                        </svg>
                      </div>
                    </div>
                    <p class="mb-0 lg:ml-6 callout">To continue learning more about Laravel Sail, review its <a href="/sail">complete documentation</a>.</p>
                  </div>
                  <p><a name="choosing-your-sail-services"></a></p>
                  <h3>Choosing Your Sail Services</h3>
                  <p>
                    When creating a new Laravel application via Sail, you may use the <code>with</code> query string variable to choose which services should be configured in your new application's <code>docker-compose.yml</code> file.
                    Available services include <code>mysql</code>, <code>pgsql</code>, <code>mariadb</code>, <code>redis</code>, <code>memcached</code>, <code>meilisearch</code>, <code>typesense</code>, <code>minio</code>,
                    <code>selenium</code>, and <code>mailpit</code>:
                  </p>
                  <div class="code-container">
                    <pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #BFC7D5;">curl </span><span style="color: #82AAFF;">-s</span><span style="color: #BFC7D5;"> </span><span style="color: #D9F5DD;">&quot;</span><span style="color: #C3E88D;">https://laravel.build/example-app?with=mysql,redis</span><span style="color: #D9F5DD;">&quot;</span><span style="color: #BFC7D5;"> </span><span style="color: #89DDFF;">|</span><span style="color: #BFC7D5;"> bash</span></div></code></pre>
                  </div>
                  <p>
                    If you do not specify which services you would like configured, a default stack of <code>mysql</code>, <code>redis</code>, <code>meilisearch</code>, <code>mailpit</code>, and <code>selenium</code> will be configured.
                  </p>
                  <p>You may instruct Sail to install a default <a href="/sail#using-devcontainers">Devcontainer</a> by adding the <code>devcontainer</code> parameter to the URL:</p>
                  <div class="code-container">
                    <pre><code data-theme="olaolu-palenight" data-lang="shell" class='torchlight' style='background-color: #292D3E; --theme-selection-background: #7580B850;'><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #BFC7D5;">curl </span><span style="color: #82AAFF;">-s</span><span style="color: #BFC7D5;"> </span><span style="color: #D9F5DD;">&quot;</span><span style="color: #C3E88D;">https://laravel.build/example-app?with=mysql,redis&amp;devcontainer</span><span style="color: #D9F5DD;">&quot;</span><span style="color: #BFC7D5;"> </span><span style="color: #89DDFF;">|</span><span style="color: #BFC7D5;"> bash</span></div></code></pre>
                  </div>
                  <p><a name="ide-support"></a></p>
                  <h2>IDE Support</h2>
                  <p>
                    You are free to use any code editor you wish when developing Laravel applications; however, <a href="https://www.jetbrains.com/phpstorm/laravel/">PhpStorm</a> offers extensive support for Laravel and its ecosystem,
                    including <a href="https://www.jetbrains.com/help/phpstorm/using-laravel-pint.html">Laravel Pint</a>.
                  </p>
                  <p>
                    In addition, the community maintained <a href="https://laravel-idea.com/">Laravel Idea</a> PhpStorm plugin offers a variety of helpful IDE augmentations, including code generation, Eloquent syntax completion, validation
                    rule completion, and more.
                  </p>
                  <p><a name="next-steps"></a></p>
                  <h2>Next Steps</h2>
                  <p>Now that you have created your Laravel project, you may be wondering what to learn next. First, we strongly recommend becoming familiar with how Laravel works by reading the following documentation:</p>
                  <div class="content-list" markdown="1">
                    <ul>
                      <li>
                        <a href="/lifecycle">Request Lifecycle</a>
                      </li>
                      <li>
                        <a href="/configuration">Configuration</a>
                      </li>
                      <li>
                        <a href="/structure">Directory Structure</a>
                      </li>
                      <li>
                        <a href="/frontend">Frontend</a>
                      </li>
                      <li>
                        <a href="/container">Service Container</a>
                      </li>
                      <li>
                        <a href="/facades">Facades</a>
                      </li>
                    </ul>
                  </div>
                  <p>How you want to use Laravel will also dictate the next steps on your journey. There are a variety of ways to use Laravel, and we'll explore two primary use cases for the framework below.</p>
                  <div class="mb-10 max-w-2xl mx-auto px-4 py-8 shadow-lg lg:flex lg:items-center callout">
                    <div class="w-20 h-20 mb-6 flex items-center justify-center shrink-0 lg:mb-0 bg-purple-600">
                      <div class="opacity-75">
                        <svg width="28" height="40" viewBox="0 0 28 40" xmlns="http://www.w3.org/2000/svg">
                          <title>lightbulb</title>
                          <path
                            d="M12 28h4v-8h-4v8zM8 40h12v-8H8v8zm13.98-14.52c-1.001.705-1.661 1.545-1.98 2.52H8c-.416-.959-1.076-1.799-1.98-2.52A13.99 13.99 0 0 1 0 14C0 6.272 6.272 0 14 0s14 6.272 14 14a13.99 13.99 0 0 1-6.02 11.48z"
                            fill="#FFF"
                            fill-rule="nonzero"
                          />
                        </svg>
                      </div>
                    </div>
                    <p class="mb-0 lg:ml-6 callout">
                      New to Laravel? Check out the <a href="https://bootcamp.laravel.com">Laravel Bootcamp</a> for a hands-on tour of the framework while we walk you through building your first Laravel application.
                    </p>
                  </div>
                  <p><a name="laravel-the-fullstack-framework"></a></p>
                  <h3>Laravel the Full Stack Framework</h3>
                  <p>
                    Laravel may serve as a full stack framework. By &quot;full stack&quot; framework we mean that you are going to use Laravel to route requests to your application and render your frontend via
                    <a href="/blade">Blade templates</a> or a single-page application hybrid technology like <a href="https://inertiajs.com">Inertia</a>. This is the most common way to use the Laravel framework, and, in our
                    opinion, the most productive way to use Laravel.
                  </p>
                  <p>
                    If this is how you plan to use Laravel, you may want to check out our documentation on <a href="/frontend">frontend development</a>, <a href="/routing">routing</a>,
                    <a href="/views">views</a>, or the <a href="/eloquent">Eloquent ORM</a>. In addition, you might be interested in learning about community packages like
                    <a href="https://livewire.laravel.com">Livewire</a> and <a href="https://inertiajs.com">Inertia</a>. These packages allow you to use Laravel as a full-stack framework while enjoying many of the UI benefits provided by
                    single-page JavaScript applications.
                  </p>
                  <p>If you are using Laravel as a full stack framework, we also strongly encourage you to learn how to compile your application's CSS and JavaScript using <a href="/vite">Vite</a>.</p>
                  <div class="mb-10 max-w-2xl mx-auto px-4 py-8 shadow-lg lg:flex lg:items-center callout">
                    <div class="w-20 h-20 mb-6 flex items-center justify-center shrink-0 lg:mb-0 bg-purple-600">
                      <div class="opacity-75">
                        <svg width="28" height="40" viewBox="0 0 28 40" xmlns="http://www.w3.org/2000/svg">
                          <title>lightbulb</title>
                          <path
                            d="M12 28h4v-8h-4v8zM8 40h12v-8H8v8zm13.98-14.52c-1.001.705-1.661 1.545-1.98 2.52H8c-.416-.959-1.076-1.799-1.98-2.52A13.99 13.99 0 0 1 0 14C0 6.272 6.272 0 14 0s14 6.272 14 14a13.99 13.99 0 0 1-6.02 11.48z"
                            fill="#FFF"
                            fill-rule="nonzero"
                          />
                        </svg>
                      </div>
                    </div>
                    <p class="mb-0 lg:ml-6 callout">If you want to get a head start building your application, check out one of our official <a href="/starter-kits">application starter kits</a>.</p>
                  </div>
                  <p><a name="laravel-the-api-backend"></a></p>
                  <h3>Laravel the API Backend</h3>
                  <p>
                    Laravel may also serve as an API backend to a JavaScript single-page application or mobile application. For example, you might use Laravel as an API backend for your <a href="https://nextjs.org">Next.js</a> application.
                    In this context, you may use Laravel to provide <a href="/sanctum">authentication</a> and data storage / retrieval for your application, while also taking advantage of Laravel's powerful services such as
                    queues, emails, notifications, and more.
                  </p>
                  <p>
                    If this is how you plan to use Laravel, you may want to check out our documentation on <a href="/routing">routing</a>, <a href="/sanctum">Laravel Sanctum</a>, and the
                    <a href="/eloquent">Eloquent ORM</a>.
                  </p>
                  <div class="mb-10 max-w-2xl mx-auto px-4 py-8 shadow-lg lg:flex lg:items-center callout">
                    <div class="w-20 h-20 mb-6 flex items-center justify-center shrink-0 lg:mb-0 bg-purple-600">
                      <div class="opacity-75">
                        <svg width="28" height="40" viewBox="0 0 28 40" xmlns="http://www.w3.org/2000/svg">
                          <title>lightbulb</title>
                          <path
                            d="M12 28h4v-8h-4v8zM8 40h12v-8H8v8zm13.98-14.52c-1.001.705-1.661 1.545-1.98 2.52H8c-.416-.959-1.076-1.799-1.98-2.52A13.99 13.99 0 0 1 0 14C0 6.272 6.272 0 14 0s14 6.272 14 14a13.99 13.99 0 0 1-6.02 11.48z"
                            fill="#FFF"
                            fill-rule="nonzero"
                          />
                        </svg>
                      </div>
                    </div>
                    <p class="mb-0 lg:ml-6 callout">
                      Need a head start scaffolding your Laravel backend and Next.js frontend? Laravel Breeze offers an <a href="/starter-kits#breeze-and-next">API stack</a> as well as a
                      <a href="https://github.com/laravel/breeze-next">Next.js frontend implementation</a> so you can get started in minutes.
                    </p>
                  </div>

                  <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CKYILK3E&placement=laravelcom" id="_carbonads_js"></script>
                </div>
              </section>
            </section>
          </div>
        </section>
      </div>
    </div>

    <footer class="relative pt-12 dark:bg-dark-700">
      <div class="max-w-screen-2xl mx-auto w-full px-8">
        <div>
          <a href="/" class="inline-flex">
            <img class="w-16 h-16" src="./assets/img/logomark.min.svg" alt="Laravel" width="64" height="64" loading="lazy" />
          </a>
        </div>

        <div class="mt-6 grid grid-cols-12 md:gap-x-8 gap-y-12 sm:mt-12">
          <div class="col-span-12 lg:col-span-4">
            <p class="max-w-sm text-xs text-gray-700 sm:text-sm dark:text-gray-500">
              Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing
              common tasks used in most web projects.
            </p>
            <ul class="mt-6 flex items-center space-x-3">
              <li>
                <a href="https://x.com/laravelphp">
                  <img class="hidden dark:inline-block w-6 h-6" src="./assets/img/social/x.dark.min.svg" alt="X" width="24" height="20" loading="lazy" />
                  <img class="inline-block dark:hidden w-6 h-6" src="./assets/img/social/x.min.svg" alt="X" width="24" height="20" loading="lazy" />
                </a>
              </li>
              <li>
                <a href="https://github.com/laravel">
                  <img class="hidden dark:inline-block w-6 h-6" src="./assets/img/social/github.dark.min.svg" alt="GitHub" width="24" height="24" loading="lazy" />
                  <img class="inline-block dark:hidden w-6 h-6" src="./assets/img/social/github.min.svg" alt="GitHub" width="24" height="24" loading="lazy" />
                </a>
              </li>
              <li>
                <a href="https://discord.gg/laravel">
                  <img class="hidden dark:inline-block w-6 h-6" src="./assets/img/social/discord.dark.min.svg" alt="Discord" width="21" height="24" loading="lazy" />
                  <img class="inline-block dark:hidden w-6 h-6" src="./assets/img/social/discord.min.svg" alt="Discord" width="21" height="24" loading="lazy" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/laravelphp">
                  <img class="hidden dark:inline-block w-6 h-6" src="./assets/img/social/youtube.dark.min.svg" alt="YouTube" width="169" height="150" loading="lazy" />
                  <img class="inline-block dark:hidden w-6 h-6" src="./assets/img/social/youtube.min.svg" alt="YouTube" width="169" height="150" loading="lazy" />
                </a>
              </li>
            </ul>
          </div>
          <div class="text-xs col-span-6 md:col-span-3 lg:col-span-2">
            <span class="uppercase dark:text-gray-200">Highlights</span>
            <div class="mt-5">
              <ul class="space-y-3 text-gray-700 dark:text-gray-500">
                <li>
                  <a href="/releases" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Release Notes</a>
                </li>
                <li>
                  <a href="/installation" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Getting Started</a>
                </li>
                <li>
                  <a href="/routing" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Routing</a>
                </li>
                <li>
                  <a href="/blade" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Blade Templates</a>
                </li>
                <li>
                  <a href="/authentication" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Authentication</a>
                </li>
                <li>
                  <a href="/authorization" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Authorization</a>
                </li>
                <li>
                  <a href="/artisan" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Artisan Console</a>
                </li>
                <li>
                  <a href="/database" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Database</a>
                </li>
                <li>
                  <a href="/eloquent" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Eloquent ORM</a>
                </li>
                <li>
                  <a href="/testing" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Testing</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="text-xs col-span-6 md:col-span-3 lg:col-span-2">
            <span class="uppercase dark:text-gray-200">Resources</span>
            <div class="mt-5">
              <ul class="space-y-3 text-gray-700 dark:text-gray-500">
                <li>
                  <a href="https://bootcamp.laravel.com" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Laravel Bootcamp</a>
                </li>
                <li>
                  <a href="https://laracasts.com" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Laracasts</a>
                </li>
                <li>
                  <a href="https://laravel-news.com" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Laravel News</a>
                </li>
                <li>
                  <a href="https://laracon.us" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Laracon</a>
                </li>
                <li>
                  <a href="https://laracon.au" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Laracon AU</a>
                </li>
                <li>
                  <a href="https://laracon.eu/" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Laracon EU</a>
                </li>
                <li>
                  <a href="https://laracon.in/" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Laracon India</a>
                </li>
                <li>
                  <a href="https://larabelles.com/" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Larabelles</a>
                </li>
                <li>
                  <a href="https://laravel.com/careers" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Careers</a>
                </li>
                <li>
                  <a href="https://larajobs.com/?partner=5" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Jobs</a>
                </li>
                <li>
                  <a href="https://laracasts.com/discuss" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Forums</a>
                </li>
                <li>
                  <a href="/trademark" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Trademark</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="text-xs col-span-6 md:col-span-3 lg:col-span-2">
            <span class="uppercase dark:text-gray-200">Partners</span>
            <div class="mt-5">
              <ul class="space-y-3 text-gray-700 dark:text-gray-500">
                <li>
                  <a href="https://vehikl.com" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Vehikl</a>
                </li>
                <li>
                  <a href="https://webreinvent.com/?utm_source=laravel&amp;utm_medium=laravel.com&amp;utm_campaign=footer-link" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">WebReinvent</a>
                </li>
                <li>
                  <a href="https://tighten.co" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Tighten</a>
                </li>
                <li>
                  <a href="https://www.bacancytechnology.com/hire-laravel-developer?utm_source=laravel&amp;utm_medium=partners.laravel&amp;utm_campaign=sponsors" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400"
                    >Bacancy</a
                  >
                </li>
                <li>
                  <a href="https://64robots.com/" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">64 Robots</a>
                </li>
                <li>
                  <a href="https://activelogic.com/" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Active Logic</a>
                </li>
                <li>
                  <a href="https://www.blackairplane.com/" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Black Airplane</a>
                </li>
                <li>
                  <a href="https://www.byte5.net/" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Byte 5</a>
                </li>
                <li>
                  <a href="https://www.curotec.com/services/technologies/laravel/" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Curotec</a>
                </li>
                <li>
                  <a href="https://www.cyber-duck.co.uk/how-we-work/technology/laravel?utm_source=Laravel%20Partner&amp;utm_medium=Sponsorship" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Cyber-Duck</a>
                </li>
                <li>
                  <a href="https://devsquad.com/" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">DevSquad</a>
                </li>
                <li>
                  <a href="https://jump24.co.uk/" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Jump24</a>
                </li>
                <li>
                  <a href="https://kirschbaumdevelopment.com/" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Kirschbaum</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="text-xs col-span-6 md:col-span-3 lg:col-span-2">
            <span class="uppercase dark:text-gray-200">Ecosystem</span>
            <div class="mt-5">
              <ul class="space-y-3 text-gray-700 dark:text-gray-500">
                <li>
                  <a href="/starter-kits#laravel-breeze" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Breeze</a>
                </li>
                <li>
                  <a href="/billing" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Cashier</a>
                </li>
                <li>
                  <a href="/dusk" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Dusk</a>
                </li>
                <li>
                  <a href="/broadcasting" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Echo</a>
                </li>
                <li>
                  <a href="https://envoyer.io" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Envoyer</a>
                </li>
                <li>
                  <a href="https://forge.laravel.com" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Forge</a>
                </li>
                <li>
                  <a href="https://herd.laravel.com" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Herd</a>
                </li>
                <li>
                  <a href="/horizon" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Horizon</a>
                </li>
                <li>
                  <a href="https://inertiajs.com" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Inertia</a>
                </li>
                <li>
                  <a href="https://jetstream.laravel.com" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Jetstream</a>
                </li>
                <li>
                  <a href="https://livewire.laravel.com" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Livewire</a>
                </li>
                <li>
                  <a href="https://nova.laravel.com" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Nova</a>
                </li>
                <li>
                  <a href="/octane" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Octane</a>
                </li>
                <li>
                  <a href="/pennant" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Pennant</a>
                </li>
                <li>
                  <a href="/pint" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Pint</a>
                </li>
                <li>
                  <a href="/prompts" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Prompts</a>
                </li>
                <li>
                  <a href="https://pulse.laravel.com" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Pulse</a>
                </li>
                <li>
                  <a href="https://reverb.laravel.com" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Reverb</a>
                </li>
                <li>
                  <a href="/sail" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Sail</a>
                </li>
                <li>
                  <a href="/sanctum" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Sanctum</a>
                </li>
                <li>
                  <a href="/scout" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Scout</a>
                </li>
                <li>
                  <a href="/socialite" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Socialite</a>
                </li>
                <li>
                  <a href="https://spark.laravel.com" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Spark</a>
                </li>
                <li>
                  <a href="/telescope" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Telescope</a>
                </li>
                <li>
                  <a href="https://vapor.laravel.com" class="transition-colors hover:text-gray-600 dark:hover:text-gray-400">Vapor</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-10 border-t pt-6 pb-16 border-gray-200 dark:border-dark-500">
          <p class="text-xs text-gray-700 dark:text-gray-400">
            Laravel is a Trademark of Laravel Holdings Inc.<br />
            Copyright &copy; 2011-2024 Laravel Holdings Inc.
          </p>
          <p class="mt-6 text-xs text-gray-700 dark:text-gray-400">Code highlighting provided by <a href="https://torchlight.dev">Torchlight</a></p>
        </div>
      </div>
    </footer>

    <script>
      var algolia_app_id = "E3MIRNPJH5";
      var algolia_search_key = "1fa3a8fec06eb1858d6ca137211225c0";
      var version = "11.x";
    </script>

   

    <!-- HubSpot -->
    <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/45240648.js"></script>

    <div class="fixed">
      <input type="text" />
    </div>
  </body>
</html>
