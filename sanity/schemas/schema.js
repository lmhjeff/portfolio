import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'
import experience from './experience'
import pageInfo from './pageInfo'
import project from './project'
import skill from './skill'
import social from './social'

export default createSchema({
    name: 'default',

    types: schemaTypes.concat([pageInfo, experience, project, skill, social]),
})

