import {path, copy, emptyDir} from './deps.ts'

const cwd = Deno.cwd()
const distPath = path.join(cwd, '/dist')
emptyDir(distPath)
copy(path.join(cwd, 'src','index.html'), path.join(distPath, 'index.html'))