module.exports = {
  '**/*.(ts|tsx)': () => 'npm run tsc --noEmit',

  '**/*.(ts|tsx|js)': (filenames) => [
    `npm run eslint --fix -- ${filenames.join(' ')}`,
    `npm run prettier -- --write ${filenames.join(' ')}`,
  ],

  '**/*.(md|json)': (filenames) =>
    `npm run prettier -- --write ${filenames.join(' ')}`,
};
