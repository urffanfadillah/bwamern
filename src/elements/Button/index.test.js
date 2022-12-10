import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "./index";

test("Tombol tidak bisa di klik jika isDisablednya true", () => {
    const {container} = render(<Button isDisabled></Button>)
    expect(container.querySelector('span.disabled')).toBeInTheDocument()
})

test("Render loading/spinner", () => {
    const {container, getByText} = render(<Button isLoading></Button>)
    expect(getByText(/loading/i)).toBeInTheDocument()
    expect(container.querySelector('span')).toBeInTheDocument()
})

test("Render tag <a> tag", () => {
    const {container} = render(<Button type="link" isExternal></Button>)
    expect(container.querySelector('a')).toBeInTheDocument()
})

test("Render komponent <Link> component", () => {
    const {container} = render(
        <Router>
            <Button type="link" href=""></Button>
        </Router>
    )
    expect(container.querySelector('a')).toBeInTheDocument()
})