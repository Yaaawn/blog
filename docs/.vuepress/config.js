const moment = require('moment')
const { nav, sidebar } = require('./config/routes')

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
        nav,
        sidebar,
        sidebarDepth: 1,
        activeHeaderLinks: true,
        lastUpdated: '上次更新',
        smoothScroll: true, // 启用页面滚动效果
        repo: 'https://github.com/Yaaawn/blog',
        docsDir: 'docs',
        docsBranch: 'master',
        repoLabel: 'GitHub',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！'
    },
    evergreen: true,

    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    moment.locale(lang)
                    return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
                }
            }
        ]
    ]
}
