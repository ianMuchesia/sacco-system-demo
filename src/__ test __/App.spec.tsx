import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import App from "../App"



test('demo', () => {
    expect(true).toBe(true)
  })
  


  test("Renders the main page correctly", ()=>
  {
    render(<App/>)
    expect(true).toBe(true)
  })