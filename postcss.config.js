module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    // Add the cssnano plugin for minification
    require('cssnano')({
      preset: 'default',
    }),
    require('autoprefixer'),
    // ...
  ],
};
