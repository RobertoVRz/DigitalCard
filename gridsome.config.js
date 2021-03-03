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
            use: "gridsome-plugin-manifest",
            options: {
                background_color: "#34D399",
                icon_path: "./src/assets/img/favicon.png",
                name: "Digital Card",
                short_name: "Digital Card",
                theme_color: "#34D399",
                lang: "en"
            }
        },
        {
            use: "gridsome-plugin-pwa",
            options: {
                title: "Digital Card",
                startUrl: "/",
                display: "standalone",
                statusBarStyle: "default",
                manifestPath: "manifest.json",
                disableServiceWorker: false,
                serviceWorkerPath: "service-worker.js",
                cachedFileTypes: "js,json,css,html,png,jpg,jpeg,svg",
                shortName: "DigitalCard",
                themeColor: "#34D399",
                backgroundColor: "#34D399",
                icon: "src/favicon.png",
                msTileImage: "",
                msTileColor: "#34D399",
                gcmSenderId: undefined
            }
        }
    ]
};
