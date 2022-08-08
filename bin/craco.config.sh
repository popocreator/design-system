touch craco.config.js
echo 'module.exports = {' >> craco.config.js
echo '  plugins: [' >> craco.config.js
echo '    {' >> craco.config.js
echo '      plugin: require("craco-alias"),' >> craco.config.js
echo '      options: {' >> craco.config.js
echo '        source: "tsconfig",' >> craco.config.js
echo '        baseUrl: ".",' >> craco.config.js
echo '        tsConfigPath: "tsconfig.paths.json",' >> craco.config.js
echo '        debug: false,' >> craco.config.js
echo '      },' >> craco.config.js
echo '    },' >> craco.config.js
echo '  ],' >> craco.config.js
echo '};' >> craco.config.js
