const { stripScript, stripTemplate, stripStyle } = require('./util')

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
    const html = stripTemplate(content)
    const css = stripStyle(content)
    const javascript = stripScript(content)
    if (token.info === 'html' && isInDemoContainer) {
      let res = `<template slot="highlight"><el-tab-pane label="Html" name="html">
                  <div class="highlight">
                    <pre v-pre>
                      <code class="html">${md.utils.escapeHtml(html)}</code>
                    </pre>
                  </div>
                </el-tab-pane>`
      if (css) {
        res += `<el-tab-pane label="Css" name="css">
                  <div class="highlight">
                    <pre v-pre>
                      <code class="css">${css}</code>
                    </pre>
                  </div>
                </el-tab-pane>`
      }
      if (javascript) {
        res += `<el-tab-pane label="Javascript" name="javascript">
                  <div class="highlight">
                    <pre v-pre><code class="javascript">${javascript}</code></pre>
                  </div>
                </el-tab-pane>`
      }
      res += '</template>'
      return res
    }
    return defaultRender(tokens, idx, options, env, self)
  }
}
