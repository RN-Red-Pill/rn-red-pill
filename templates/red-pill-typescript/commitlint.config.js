export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [2, 'always', 140],
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'ui',
                'style',
                'refactor',
                'perf',
                'test',
                'chore',
                'revert',
                'ci'
            ]
        ]
    }
};
