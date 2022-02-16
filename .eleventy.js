const { DateTime } = require('luxon');

module.exports = (eleventyConfig) => {

    // Tells BrowserSync where the CSS files are
    eleventyConfig.setBrowserSyncConfig({
        files: './dist/css/**/*.css'
    })

    // Tells 11ty to simply pass these files through into the final build
    eleventyConfig.addPassthroughCopy('./src/assets/')

    eleventyConfig.addFilter("blogDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    return {
        dir: {
            input: 'src',
            output: 'dist'
        }
    }
}