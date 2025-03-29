module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [0, 'always', [
      'build', 'ci', 'chore', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'
    ]],
    'type-case': [0, 'always', 'lower-case'],
    'type-empty': [0, 'never'],
    'scope-enum': [0, 'always', ['api', 'ui', 'core', 'docs']],
    'scope-case': [0, 'always', 'lower-case'],
    'scope-empty': [0, 'never'],
    'subject-case': [0, 'always', 'sentence-case'],
    'subject-empty': [0, 'never'],
    'subject-full-stop': [0, 'never', '.'],
    'header-max-length': [0, 'always', 72],
    'body-max-line-length': [0, 'always', 100],
    'footer-max-length': [0, 'always', 100],
    'signed-off-by': [0, 'always', 'Signed-off-by'],
  }
};
