console.log('build packages')

var fs = require('fs')

var files = [
  'badge/src/badge.js',
  'checkbox/src/checkbox.js',
  'message/src/message.js',
  'radiogroup/src/radio.js',
  'steps/src/steps.js',
  'timeline/src/timeline.js'
]

var outputJs = 'public/plugins.new.js'

fs.open(outputJs, 'w', (err, fd) => {
  if (err) {
    console.error(err)
  } else {
    fs.writeFile(outputJs, '', () => {
      fs.close(fd, () => {})
    })
  }
})

files.forEach(item => {
  fs.readFile('src/packages/' + item, (err, data) => {
    if (err) {
      console.error(err)
    } else {
      fs.appendFile(outputJs, data.toString() + '\n', () => {})
    }
  })
})
