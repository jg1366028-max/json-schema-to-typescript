module.exports = {
  input: {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'peoples',
    type: 'array',
    description: '@group Shared/QueryString\n@description <adult>,<child age>|<child age>',
    items: {
      type: 'string',
      description: '@group Shared/QueryString/REGEXP\n@description travel peoples QueryString(<adult>,<child age>|<child age>|...)',
      pattern: '^\\d+,(?:\\d+)(?:-\\d+)*$',
      examples: ['2,5-7', '1,3-4-5'],
    },
  },
  expected: `/**
 * @group Shared/QueryString
 * @description <adult>,<child age>|<child age>
 *
 * Array items:
 * @group Shared/QueryString/REGEXP
 * @description travel peoples QueryString(<adult>,<child age>|<child age>|...)
 */
export type Peoples = string[];`
}