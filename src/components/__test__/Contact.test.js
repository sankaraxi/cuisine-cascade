import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("",()=>{
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

})

test("",()=>{
    render(<Contact />);

    const input = screen.getByRole("button");
    expect(input).toBeInTheDocument();

})

test("Email",()=>{
    render(<Contact />);

    const input = screen.getByText("Email:");
    expect(input).toBeInTheDocument();

})

test("input",()=>{
    render(<Contact />);

    const inputPlace = screen.getByPlaceholderText("Name");
    expect(inputPlace).toBeInTheDocument();

})

test("inputBoxes",()=>{
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);

})