// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: "Digital Card",
    plugins: [
        {
            use: "gridsome-plugin-sass-resources-loader",
            options: {
                resources: "@/assets/sass/app.scss"
            }
        },
        {
            use: "gridsome-plugin-tailwindcss",
            options: {
                tailwindConfig: "./tailwind.config.js",
                purgeConfig: {
                    // Prevent purging of prism classes.
                    whitelistPatternsChildren: [/token$/]
                }
            }
        },
        {
            use: "gridsome-plugin-pwa",
            options: {
                // Service Worker Options
                disableServiceWorker: false,
                serviceWorkerPath: "service-worker.js",
                cachedFileTypes: "js,json,css,html,png,jpg,jpeg,svg,gif",
                disableTemplatedUrls: false, // Optional

                // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
                manifestPath: "manifest.json",
                title: "Gridsome",
                startUrl: "/",
                display: "standalone",
                statusBarStyle: "default",
                themeColor: "#666600",
                backgroundColor: "#ffffff",
                icon: "~/favicon.png",
                shortName: "Gridsome", // Optional
                description: "Gridsome is awesome!", // Optional
                categories: ["education"], // Optional
                lang: "en-GB", // Optional
                dir: "auto", // Optional
                maskableIcon: true, // Optional
                screenshots: [
                    // Optional
                    {
                        src: "src/screenshot1.png",
                        sizes: "1280x720",
                        type: "image/png"
                    }
                ],
                gcmSenderId: undefined, // Optional

                // Standard Meta Tags
                svgFavicon: "favicon.svg", // Optional. Requires favicon.ico fallback

                // Microsoft Windows Meta Tags
                msTileColor: "#666600", // Optional

                // Apple MacOS Meta Tags
                appleMaskIcon: "favicon.svg", // Optional
                appleMaskIconColor: "#666600" // Optional
            }
        }
    ]
};
