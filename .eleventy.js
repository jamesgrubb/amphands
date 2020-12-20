module.exports = (eleventyConfig) => {

    eleventyConfig.addPassthroughCopy({'/src/app.js':'app.js'})

return{
    dir:{
        output: "dist",
        input: "src"
    }
}
}