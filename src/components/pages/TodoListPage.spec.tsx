import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RecoilRoot } from "recoil";
import TodoListPage from "./TodoListPage";
import { ToastContainer } from "react-toastify";

const renderWithRecoil = (component: JSX.Element) => {
  return render(
    <RecoilRoot>
      {component}
      <ToastContainer />
    </RecoilRoot>,
  );
};

describe("TodoListPage", () => {
  beforeEach(() => {
    renderWithRecoil(<TodoListPage />);
  });

  test("should add a task", () => {
    const inputElement = screen.getByLabelText("task input");
    fireEvent.change(inputElement, { target: { value: "New Task" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("should delete a task", () => {
    const inputElement = screen.getByLabelText("task input");
    fireEvent.change(inputElement, { target: { value: "Task to be deleted" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
    const removeButton = screen.getByAltText("delete");

    fireEvent.click(removeButton);

    expect(screen.queryByText("Task to be deleted")).not.toBeInTheDocument();
  });
});
