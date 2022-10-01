export default {
  widgets: [
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
                  buildHookId: '6337d79a0dfefb2fc82a1c94',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-nxabbcpw',
                  apiId: '3c22eba8-2b37-4628-9b26-58367cf4e934'
                },
                {
                  buildHookId: '6337d79bd280e832355e7456',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hq629kdi',
                  apiId: '014399f2-3272-4df8-b454-042c0cb82d10'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shakyracornelius/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hq629kdi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
