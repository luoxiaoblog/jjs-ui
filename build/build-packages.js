console.log('build packages')

let fs = require('fs')

let jsFiles = [
  'badge/src/badge.js',
  'checkbox/src/checkbox.js',
  'message/src/message.js',
  'radiogroup/src/radio.js',
  'steps/src/steps.js',
  'timeline/src/timeline.js'
]

let cssFiles = [
  'badge/src/badge.css',
  'checkbox/src/checkbox.css',
  'message/src/message.css',
  'radiogroup/src/radio.css',
  'steps/src/steps.css',
  'timeline/src/timeline.css'
]

let outputJs = 'public/plugins.new.js'
let outputCss = 'public/plugins.new.css'

fs.open(outputJs, 'w', (err, fd) => {
  if (err) {
    console.error(err)
  } else {
    fs.writeFile(outputJs, '', () => {
      fs.close(fd, () => {})
    })
  }
})

fs.open(outputCss, 'w', (err, fd) => {
  if (err) {
    console.error(err)
  } else {
    fs.writeFile(outputCss, '', () => {
      fs.close(fd, () => {})
    })
  }
})

jsFiles.forEach(item => {
  fs.readFile('src/packages/' + item, (err, data) => {
    if (err) {
      console.error(err)
    } else {
      fs.appendFile(outputJs, data.toString() + '\n', () => {})
    }
  })
})

cssFiles.forEach(item => {
  fs.readFile('src/packages/' + item, (err, data) => {
    if (err) {
      console.error(err)
    } else {
      fs.appendFile(outputCss, data.toString() + '\n', () => {})
    }
  })
})
