const nav = []
const sidebar = {}

const fs = require('fs')
const path = require('path')
const baseDir = '/papers/'
const basePath = path.join(__dirname, '../..', baseDir)
const { paperGroup } = require('./models') // 页面分组信息

// step1: 按照分组排序，生成nav
const tempDirs = []
paperGroup.forEach(v => {
    const { key, title, children } = v
    const link = `${baseDir}${key}/`

    nav.push({
        text: title,
        link: key ? link : '/'
    })
    if (key) {
        tempDirs.push({
            key,
            link,
            children
        })
    }
})

// step2: 生成sidebar
tempDirs.forEach(v => {
    const { key, link, children } = v
    sidebar[link] = []
    const dirPath = path.join(basePath, key)
    const tempFiles = fs.readdirSync(dirPath).map(v => {
        return v.replace(/\.md$/, '')
    })
    children.forEach((v, i) => {
        sidebar[link].push({
            title: v,
            children: tempFiles.filter(fileName => {
                const reg = `${i + 1}.`
                return fileName.indexOf(reg) === 0
            })
        })
    })
})

module.exports = {
    nav,
    sidebar
}
