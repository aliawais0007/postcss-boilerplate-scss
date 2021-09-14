const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const postcssNested = require('postcss-nested')
const fs = require('fs')

fs.readFile('./index.scss', (err, css) => {
    postcss([postcssNested, autoprefixer])
        .process(css, { parser: require("postcss-scss") }, { from: './index.scss', to: './index.css' })
        .then(result => {
            fs.writeFile('./index.css', result.css, () => true)
            if (result.map) {
                fs.writeFile('./index.css.map', result.map.toString(), () => true)
            }
        })
})