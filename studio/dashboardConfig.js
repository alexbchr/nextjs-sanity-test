export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fac0a428042f619a0321871',
                  title: 'Sanity Studio',
                  name: 'nextjs-sanity-test-studio',
                  apiId: '5fcbeacb-ee45-4e7c-a6a4-dbe8c448bf47'
                },
                {
                  buildHookId: '5fac0a427f547a1852b56187',
                  title: 'Landing pages Website',
                  name: 'nextjs-sanity-test',
                  apiId: '7cc98e3e-c66e-4dac-b5f0-80fa562d9b5e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alexbchr/nextjs-sanity-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nextjs-sanity-test.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
