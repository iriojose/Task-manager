module.exports = {
    env: {
        customKey: 'my-value',
    },
    pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],

    /*Ejemplo para produccion, para subir en servidor apache (config de rutas).
    exportPathMap: async function(
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    )
    {
        return {
          '/': { page: '/' },
          '/about': { page: '/about' },
        }
    },*/
};