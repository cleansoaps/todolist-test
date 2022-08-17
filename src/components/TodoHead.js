import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #07132a;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
    text-align: center;
  }
  .title {
    margin: 0;
    font-size: 48px;
    color: #343a40;
    text-align: center;
    margin-bottom: 30px;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
    text-align: center;
  }
  .tasks-left {
    color: white;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
    background-color: #07132a;
    text-align: center;
  }
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1 className='title'>To Do List</h1>
      <h1>2022년 08월 17일</h1>
      <div className='day'>수요일</div>
      <div className='tasks-left'>할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
