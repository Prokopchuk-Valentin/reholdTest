import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoaders = (isDev:boolean) => ({
    test: /\.s[ac]ss$/i,
    use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    exportGlobals: true,
                    localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]',
                },
            },
        },
        'sass-loader',
    ],
});
