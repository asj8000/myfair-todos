"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { TodoTask } from "../../types/todoTask";
import { todoState } from "../../recoil/taskState";
import { v4 as uuidv4 } from "uuid";

interface Props {}

const TodoListPage = ({}: Props) => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useRecoilState<TodoTask[]>(todoState);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { id: uuidv4(), text: task, isCompleted: false }]);
      setTask("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTodo = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  };

  return (
    <PageContainer>
      <Title>To Do List</Title>
      <ContentWrapper>
        <TaskInput
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="할 일을 입력해 주세요."
        />
        <TaskBox>
          <Tabs>
            <Tab>All</Tab>
            <Tab>To do</Tab>
            <Tab>Done</Tab>
          </Tabs>
          <TaskCount>총 {tasks.length}개</TaskCount>
          <TaskList>
            {tasks.map((task, index) => (
              <TaskItem key={index}>
                <TaskContent>
                  <HiddenCheckbox
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => toggleTodo(task.id)}
                  />
                  <StyledCheckbox checked={task.isCompleted} />
                  <TaskText>{task.text}</TaskText>
                </TaskContent>
                <RemoveButton onClick={() => removeTask(index)}>
                  <RemoveIcon src="/images/Close.svg" alt="delete" />
                </RemoveButton>
              </TaskItem>
            ))}
          </TaskList>
        </TaskBox>
      </ContentWrapper>
    </PageContainer>
  );
};

export default TodoListPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 4rem auto;
  padding: 0 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 3rem;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TaskInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background: #f0f0f0;
  box-sizing: border-box;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Tab = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background: #ebf4ff;
  color: #2182f3;
  cursor: pointer;
`;

const TaskCount = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const TaskBox = styled.div`
  width: 100%;
  background: #fff;
  padding: 1.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-sizing: border-box;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  box-sizing: border-box;
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 5px;
`;

const TaskContent = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
`;

const HiddenCheckbox = styled.input`
  display: none;
`;

const StyledCheckbox = styled.span<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border: 1px solid;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  cursor: pointer;
  background-color: ${({ checked }) => (checked ? "#007bff" : "transparent")};
  border-color: ${({ checked }) => (checked ? "#007bff" : "#ccc")};

  &::after {
    content: url("/images/check.svg");
    display: ${({ checked }) => (checked ? "block" : "none")};
    transform: scale(0.7);
  }
`;

const TaskText = styled.span`
  font-size: 1rem;
  display: flex;
  align-items: center;
`;

const RemoveButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const RemoveIcon = styled.img`
  width: 20px;
  height: 20px;
`;
