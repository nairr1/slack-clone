import React from 'react';
import styled from 'styled-components';

function Message({ message, timestamp, user, userImg }) {
  
  return (
    <MessageContainer>
      <img         
        src={userImg}  
        referrerpolicy="no-referrer"
      />
      <MessageInfo>
        <h4>
          {user}{' '}
          <span>
            {new Date(timestamp?.toDate()).toLocaleString()}
          </span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  margin-left: 25px;

  > img {
    height: 50px;
    border-radius: 100%;
    margin-right: 5px;
  }
`;

const MessageInfo = styled.div`
  padding-left: 10px;

  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 10px;
    font-size: 10px;
  }

  > p {
    margin-top: 10px;
    border-radius: 10px;
    padding: 10px;
    width: max-content;
    background-color: var(--slack-color);
  }
`;