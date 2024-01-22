module.exports = {
  singleQuote: false,
  overrides: [
    {
      files: ['*.html'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.vue'],
      options: {
        singleQuote: true,
      },
    },
    {
      files: ['*.js'],
      options: {
        singleQuote: true,
      },
    },
  ],
};
