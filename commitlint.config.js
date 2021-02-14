module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w+)(\(US-[0-9]+\))?:[ ](.+)$/,
    },
  },
  rules: {
    'scope-case': [0],
  },
};
