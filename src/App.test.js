import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Footer from "./components/Footer/Footer";

describe("App", () => {
  it("renders App component", () => {
    render(<App />);

    const inputText = screen.getByRole("textbox");
    expect(inputText).toBeInTheDocument();
    expect(inputText).toHaveFocus();
    expect(inputText).toHaveValue("");

    expect(screen.getByText(/todos/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("What needs to be done?")
    ).toBeInTheDocument();
  });
});

describe("events", () => {
  it("checkbox click", () => {
    render(<App />);
    const checkbox = screen.getAllByRole("checkbox");
    checkbox.forEach((el) => {
      expect(el).not.toBeChecked();
      userEvent.click(el);
      expect(el).toBeChecked();
    });
  });

  it("user add new todo", () => {
    render(<App />);
    const inputText = screen.getByRole("textbox");
    userEvent.type(inputText, "React");
    expect(inputText).toHaveValue("React");
    userEvent.keyboard("{Enter}");
    expect(screen.getByText(/React/)).toBeInTheDocument();
  });

  it("focus", () => {
    render(<Footer />);
    const [all, active, completed, clear] = screen.getAllByRole("button");

    expect(screen.getByText(/items left/i)).toBeInTheDocument();
    expect(all).toBeInTheDocument();
    expect(active).toBeInTheDocument();
    expect(completed).toBeInTheDocument();
    expect(clear).toBeInTheDocument();

    userEvent.tab();
    expect(all).toHaveFocus();
    userEvent.tab();
    expect(active).toHaveFocus();
    userEvent.tab();
    expect(completed).toHaveFocus();
    userEvent.tab();
    expect(clear).toHaveFocus();
  });
});
