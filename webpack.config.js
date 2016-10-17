var path = require('path');

module.exports = {
    entry : {
        javascript : "./src/main.ts"
    },
    output : {
        /* path is the physical folder where compilation output will be placed */
        path : path.resolve(__dirname, "dist"),
        /* public path is the virtual directory in which resources can be accessed when served */
        publicPath : "/assets/",
        filename : 'bundle.js'
    },

    devtool : 'source-map',
    resolve : {
        extensions : ["", ".webpack.js", ".web.js", ".ts", ".js"]
    },
    module : {
        loaders : [
            {
                test : /\.tsx?$/,
                loader : "ts-loader"
            }
        ],
        preLoaders : [
            {
                test : /\.js$/,
                loader : "source-map-loader"
            },
            { 
                test: /\.tsx?$/, 
                loader: 'tslint', 
                exclude: /node_modules/ 
            }
        ]
    },
     // Individual Plugin Options
    tslint: {
        emitErrors: true,
        failOnHint: true
    },
    ts : {
        configFileName : "jsconfig.json"
    }
    
}