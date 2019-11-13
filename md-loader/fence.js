// 覆盖默认的 fence 渲染策略
module.exports = md => {
  const defaultRender = md.renderer.rules.fence
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    // 判断该 fence 是否在 :::demo 内
    const prevToken = tokens[idx - 1]
    const isInDemoContainer =
      prevToken &&
      prevToken.nesting === 1 &&
      prevToken.info.trim().match(/^demo\s*(.*)$/)
    const start = token.content.indexOf('//DEMO_JS_RUN_START')
    const end = token.content.indexOf('//DEMO_JS_RUN_END')
    const endLen = '//DEMO_JS_RUN_END'.length
    let content = token.content
    if (start != -1 && end != -1) {
      content = content
        .replace(content.slice(start, end + endLen), '')
        .replace('//DEMO_JS_SHOW_END', '')
        .replace(' //DEMO_JS_SHOW_START', '')
    }
    if (token.info === 'html' && isInDemoContainer) {
      return `<template slot="highlight"><pre v-pre><code class="html">${md.utils.escapeHtml(
        content
      )}</code></pre></template>`
    }
    return defaultRender(tokens, idx, options, env, self)
  }
}
