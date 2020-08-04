import { React, ReactDOM } from './deps.ts'
import { Hello } from './components/Hello.tsx'
declare let module: any

ReactDOM.render(
  <Hello compiler="Typescript" framework="React" bundler="Webpack" />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
