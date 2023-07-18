import { render } from 'preact'
import './styles/index.css'
import { add } from 'wasm'

const appEl = document.querySelector('#app')

if (appEl) {
  render(
    <>
      <main className="App">
        <h1 data-testid="test">{add(1, 1)}</h1>
      </main>
    </>,
    appEl
  )
}
