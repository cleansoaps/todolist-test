import React from "react";
import styled from "styled-components";
import TodoItem from "./Todoitem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text='9 to 6 코드스테이츠 집중하기' done={true} />
      <TodoItem text='블로깅하기' done={true} />
      <TodoItem text='js,react 기본 공부하기' done={false} />
      <TodoItem text='운동하기' done={false} />
    </TodoListBlock>
  );
}

export default TodoList;
