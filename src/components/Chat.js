import React, { useRef } from 'react';
import styled from 'styled-components';
import { 
  StarBorderOutlined, 
  InfoOutlined 
} from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { db } from '../firebase';
import Message from './Message';
import { useEffect } from 'react';

function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);

  const [roomDetails] = useDocument(
    roomId && 
    db.collection('rooms').doc(roomId)
  );

  const [roomMessages, loading] = useCollection(
    roomId &&
    db.collection('rooms')
      .doc(roomId)
      .collection('message')
      .orderBy('timestamp', 'asc')
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [roomId, loading]);

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [roomMessages, loading]);

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
              </h4>
              <StarBorderOutlined />
            </HeaderLeft>

            <HeaderRight>
              <p>
                <InfoOutlined /> Details
              </p>
            </HeaderRight>
          </Header>

          <ChatMessages>
            {
              roomMessages?.docs.map((doc) => {
                const { message, timestamp, user, userImg } = doc.data();

                return (
                  <Message 
                    key={doc.id}
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userImg={userImg}
                  />
                );
              })
            }
            <ChatBottom ref={chatRef}/>
          </ChatMessages>

          <ChatInput 
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid #4C474F;
`;

const ChatMessages = styled.div`
`;

const ChatBottom = styled.div`
  height: 100px;
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
    color: #4C474F;
  }

  > .MuiSvgIcon-root { 
    margin-left: 2px;
    font-size: 18px;
  }
`;