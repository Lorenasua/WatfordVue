import 'core-js/stable'
import 'regenerator-runtime/runtime'

import gulp from 'gulp'
import requireDir from 'require-dir'

requireDir('./', { recurse: true })

export const deploy = gulp.series('rsync')
