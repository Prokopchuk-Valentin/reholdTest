import path from 'path';
import { BuildEnv, BuildPaths } from 'config/webpack/types/config';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './src/config/webpack/buildWebpackConfig';

export default (env: BuildEnv): Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.PORT || 3000;
    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        PORT,
    });
};
