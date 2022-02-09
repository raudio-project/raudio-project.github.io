module.exports = (eleventyConfig) => {

    eleventyConfig.setBrowserSyncConfig({
        files: './dist/css/**/*.css'
    })

    return {
        dir: {
            input: 'src',
            output: 'dist'
        }
    }
}