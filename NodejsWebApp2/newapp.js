const tableify = require('html-tableify');
tableify([{
    name: 'optionalArray',
    description: 'Description of optionalArray.',
    required: '',
    type: 'array',
    defaultValue: '[]'
}, {
    name: 'optionalBool',
    description: 'Description of optionalBool.',
    required: '',
    type: 'bool',
    defaultValue: 'false'
}], {
        tidy: false
    });