import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import includePaths from 'rollup-plugin-includepaths';
import svgr from '@svgr/rollup';

import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            sourcemap: true
        }
    ],
    external: ['styled-components'],
    plugins: [
        external(),
        includePaths({ paths: ['./src'] }),
        // babel({
        //     extensions: ['.tsx'],
        //     exclude: 'node_modules/**',
        //     runtimeHelpers: true
        // }),
        postcss({
            modules: true
        }),
        url(),
        svgr(),
        resolve(),
        typescript({
            rollupCommonJSResolveHack: true,
            clean: true
        }),
        commonjs()
    ]
};
