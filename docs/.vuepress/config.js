module.exports = {
    // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上
    title: 'TheZJH 的个人博客',
    // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
    description: '包含: Java基础、SpringBoot、MySQL',
    // 指定 vuepress build 的输出目录。如果传入的是相对路径，则会基于 process.cwd() 进行解析
    dest: '/.dist',
    port: '8080',
    // 额外的需要被注入到当前页面的 HTML <head> 中的标签，每个标签都可以以 [tagName, { attrName: attrValue }, innerHTML?] 的格式指定
    head: '',
    markdown: {
        lineNumbers: true
    },
    // 为当前的主题提供一些配置，这些选项依赖于你正在使用的主题
    themeConfig: {
        nav: require('./nav.js'),
        sidebar: require('./sidebar.js'),
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    searchMaxSuggestoins: 10,
    serviceWorker: {
        updatePopup: {
            message: '有新的内容',
            buttonText: '更新'
        }
    },
    editLinks: true,
    editLinkText: '在 Github 上编辑此页！'
}