import React from "react"
import ShallowRenderer from "react-test-renderer/shallow"
import { render } from "@testing-library/react"
import LogoSection from "../../components/home/LogoSection"

describe("LogoSection Component", () => {
  it("renders correctly", () => {
    const renderer = new ShallowRenderer()
    renderer.render(<LogoSection />)
  })
})
