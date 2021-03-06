const path = require('path');


const COMPILE = (process.env.NODE_ENV === 'compile');

let config = {
    entry: {
        'index':path.join(__dirname,'src/index.js')
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: [{
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }]
        }]
    },
    resolve:{
        modules: [path.resolve(__dirname, "src"), "node_modules"]
    }

}


module.exports = config;