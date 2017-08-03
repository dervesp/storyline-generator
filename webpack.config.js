module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: './bin/build/bundle.js',
    },

    // enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        // add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },

    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: 'babel-loader?presets[]=es2015!ts-loader' },
        ],

        preloaders: [
            // all output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: 'source-map-loader' }
        ]
    }
};