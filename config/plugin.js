module.exports = () => {
    const plugin = {}
    plugin.nunjucks = {
        enable: true,
        package: 'egg-view-nunjucks'
    }
    plugin.xframe = {
        enable: false
    }
    return plugin
}