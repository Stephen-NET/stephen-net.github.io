export default {
    title: '知识库',
    description: 'Just playing around.',
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide' },
            { text: 'Config', link: '/config' },
            {
                text: 'Dropdown Menu',
                items: [
                    { text: 'Item A', link: '/item-1' },
                    { text: 'Item B', link: '/item-2' },
                    { text: 'Item C', link: '/item-3' }
                ]
            }
        ],
        sidebar: {
            // This sidebar gets displayed when user is under `guide` directory.
            '/guide/': [
                {
                    text: 'Guide',
                    items: [
                        // This shows `/guide/index.md` page.
                        { text: 'Index', link: '/guide/' }, // /guide/index.md
                        { text: 'One', link: '/guide/one' }, // /guide/one.md
                        { text: 'Two', link: '/guide/two' } // /guide/two.md
                    ]
                }
            ],
            // This sidebar gets displayed when user is under `config` directory.
            '/config/': [
                {
                    text: 'Config-SectionA',
                    items: [
                        { text: 'Index', link: '/config/section-a' }, 
                        { text: 'Three', link: '/config/section-a/three' },
                        { text: 'Four', link: '/config/section-a/four' }
                    ]
                },
                {
                    text: 'Config-SectionB',
                    items: [
                        { text: 'Index', link: '/config/section-b' },
                        { text: 'Three', link: '/config/section-b/three' },
                        { text: 'Four', link: '/config/section-b/four' } 
                    ]
                }
            ]
        }
    }
}