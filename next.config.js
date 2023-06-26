/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, {dev}) => {
        if (!dev) {
            config.optimization.minimize = true;
            config.optimization.minimizer = [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            comparisons: false,
                            inline: 2,
                        },
                        mangle: {
                            safari10: true,
                        },
                        output: {
                            comments: false,
                            ascii_only: true,
                        },
                        warnings: false,
                    },
                }),
            ];
        }

        if(dev){
            config.devtool = 'cheap-module-source-map';
        }

        return config;
    },
};

module.exports = nextConfig
