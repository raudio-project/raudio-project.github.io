module.exports = (eleventyConfig) => {

    // Tells BrowserSync where the CSS files are
    eleventyConfig.setBrowserSyncConfig({
        files: './dist/css/**/*.css'
    })

    // Tells 11ty to simply pass these files through into the final build
    eleventyConfig.addPassthroughCopy('./src/assets/')

    return {
        dir: {
            input: 'src',
            output: 'dist'
        }
    }
}