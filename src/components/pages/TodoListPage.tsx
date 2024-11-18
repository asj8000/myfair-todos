"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";

interface Props {}

const TodoListPage = ({}: Props) => {
  const [task, setTask] = useState("");

  return (
    <PageContainer>
      <Title>To Do List</Title>
      <ContentWrapper>
        <TaskInput
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="할 일을 입력해 주세요."
        />
        <TaskBox>
          <Tabs>
            <Tab>All</Tab>
            <Tab>To do</Tab>
            <Tab>Done</Tab>
          </Tabs>
          <TaskCount>총 1234개</TaskCount>
          <TaskList>
            <TaskItem>
              <TaskContent>
                <label>
                  <HiddenCheckbox type="checkbox" />
                  <StyledCheckbox />
                  <TaskText>ㅁㄴㅇㄹ</TaskText>
                </label>
              </TaskContent>
              <RemoveButton>
                <RemoveIcon src="/images/Close.svg" alt="delete" />
              </RemoveButton>
            </TaskItem>
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
  background: #f9f9f9;
  border-radius: 5px;
`;

const TaskContent = styled.div`
  display: flex;
  align-items: center;
`;

const HiddenCheckbox = styled.input`
  display: none;
`;

const StyledCheckbox = styled.span`
  width: 20px;
  height: 20px;
  border: 1px solid #007bff;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  cursor: pointer;
`;

const TaskText = styled.span`
  font-size: 1rem;
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
