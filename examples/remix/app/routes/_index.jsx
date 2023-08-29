import { add } from 'wasm'

export const meta = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  console.log('yoo', add(1, 1))
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Welcome to Remix</h1>
      <h3 data-testid="wasm">
        Wasm add function reports that 1 + 1 = {add(1, 1)}
      </h3>
    </div>
  )
}
