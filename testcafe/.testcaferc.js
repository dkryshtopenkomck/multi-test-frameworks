const os = require("os");
const path = require("path");

module.exports = { // Settings go inside the module.exports statement.
    src: "./tests/**/*.spec.ts", // Tests
    browsers: ["chrome"], // Browsers
    baseUrl: "https://seleniumbase.io/demo_page", // URL
    skipJsErrors: true, // Ignores JavaScript errors
    hostname: os.hostname(), // localhost
    reporter: [
        {
            name: "spec"
        },
        {
            name: "allure-expanded",
        }
    ],
    quarantineMode: {
        successThreshold: 2,
        attemptLimit: 3
    },
    appCommand: "echo 'What is going on'",
    //
    // Screenshots & Videos configuration
    screenshots: {
        path: "reports/screenshots",
        takeOnFails: true,
        pathPattern: "${DATE}_${TIME}/${TEST}/${USERAGENT}/${QUARANTINE_ATTEMPT}.png",
        fullPage: true,
        thumbnails: true
    },
    videoPath: "reports/videos",
    videoOptions: {
        singleFile: false,
        failedOnly: false,
        pathPattern: "${DATE}_${TIME}/${TEST}/${USERAGENT}/${FILE_INDEX}.mp4"
    },
    //
    // Typescript compiler
    compilerOptions: {
        typescript: {
            configPath: "./tsconfig.json",
            options: {"experimentalDecorators":  "true"}
        }
    }
}
