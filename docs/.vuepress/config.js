module.exports = {
    // 基础配置
    base: '/blog/', // 部署站点的基础路径，默认'/'
    title: 'Yawn Blog', // 网站的标题
    description: 'Yawn的博客', // 网站的描述
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ], // 注入<head>中的标签
    host: '0.0.0.0', // 用于 dev server 的主机名
    port: 8888, // 用于 dev server 的端口
    temp: '/path/to/@vuepress/core/.temp', // 客户端文件的临时目录
    dest: 'dist', // vuepress build 的输出目录
    // 主题配置
    // theme: ''
    themeConfig: {
        logo: '/user-avatar.jpg',
        // navbar: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: '每日·基础', link: '/views/base/' },
            { text: '每周·进阶', link: '/views/advance/' },
            { text: '算法', link: '/views/algorithm/' }
        ],
        sidebar: {
            '/views/base/': [
                ''
            ],
            '/views/advance/': [
                ''
            ],
            '/views/algorithm/': [
                ''
            ],
            // fallback
            '/': [
                ''
            ]
        },
        sidebarDepth: 2,
        // displayAllHeaders: false, // 显示所以页面的标题链接
        lastUpdated: 'Last Updated',
        smoothScroll: true, // 启用页面滚动效果
        repo: 'https://github.com/Yaaawn/blog',
        repoLabel: 'GitHub',
        editLinks: true,
        docsDir: 'docs',
        docsBranch: 'master'
    },
    evergreen: true
}
