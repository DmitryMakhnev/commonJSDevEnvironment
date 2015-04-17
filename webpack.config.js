var path = require('path');
var webpack = require('webpack');
var bowerConfig = require('./bower');

module.exports = {

    entry: path.resolve(bowerConfig.publicInit),

    output: {
        path: path.resolve(bowerConfig.publicDir),
        filename: bowerConfig.umdName + '.js',
        libraryTarget: 'umd',
        library: bowerConfig.umdName
    },

    resolve: {
        root: [path.join(__dirname, 'bower_components')]
    },

    module: {
        loaders: [
            {
                test: /^.*.js$/,
                loader: 'jsx-loader'
            }
        ]
    },

    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        )
    ]
};