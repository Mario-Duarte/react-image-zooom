var path = require('path');
const { use } = require('react');

const ReactCompilerConfig = {
    target: 19
};

module.exports = function () {
    return {
        plugins: [
            ['babel-plugin-react-compiler', ReactCompilerConfig],
        ],
    };
};

module.exports = {
    mode: 'production',
    entry: './src/react-image-zooom.tsx',
    output: {
        path: path.resolve('lib'),
        filename: 'react-image-zooom.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                {
                        loader: 'ts-loader'
                    }
                ],
                exclude: /(node_modules)/
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        }
    },
    externals: {
        // Don't bundle react or react-dom      
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        },
        "styled-components": "styled-components"
    }
}