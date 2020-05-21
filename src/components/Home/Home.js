import React, { useState , useEffect} from "react";
import homePicture from "../../assets/text2.png";
import jwt from 'jwt-decode'
import {Link} from 'react-router-dom'
import axios from 'axios'
import io from 'socket.io-client'
// import profilePicture from "../../assets/default.jpg";
// import user1 from "../../assets/ozy.png";
import "../style.css";
import Picker from 'emoji-picker-react';
import { showDetailRecentChat } from "../../actionCreators/ChatAction";
import { connect } from "react-redux";

const Home = (props) => {
  const [firstShow, setFirstShow] = useState(true);
  const [senderUserId, setSenderUserId] = useState('')
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [targetUserId, setTargetUserId] = useState('');
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const socket = io(`${process.env.REACT_APP_API_URL}`)
  
      
  useEffect(()=> {
    if(localStorage.token){
      const jwtDecoded = jwt(localStorage.token)
      // console.log(jwtDecoded)
      if(jwtDecoded.id){
        setSenderUserId(jwtDecoded.id)
      }
    } 
    
      axios.get(`http://localhost:8000/chat/gettarget/${targetUserId}`, {headers: {'x-access-token' : localStorage.getItem('token')}})
      .then(messagesdata => {
        // if(localStorage.getItem('token') === messages.data)
        console.log(messagesdata.data)
        setMessages(messagesdata.data[0].messages)
        
        socket.on('sendMessage', (message)=>{
          setMessages(messagesdata.data[0].messages, message)
            // setMessages([newMessage])
            // setMessages([message])
      }) 
      }
        
        )
      .catch(err => console.log(err))
    
  }, [message, firstShow])
  
  const changeFirstShow = (data) => {
    props.showDetailRecentChat(data);
    setFirstShow(false);
    setTargetUserId(`${data._id}`)
    
    
  };

  const onEmojiClick = (e, emojiObject) => {
    setMessage(emojiObject)
  }
  const updateMessage = e => {
    setMessage(e.target.value)
  }
  const sendMessage = (event) => {
    event.preventDefault()
    
    axios.post(`http://localhost:8000/chat/postchat`, {senderUserId, targetUserId, message}, {headers: {'x-access-token' : localStorage.getItem('token')}})
      .then(value => {
        console.log(value.data.messages)
        
        // const message = value
        setMessage('')
        socket.emit('sendMessage', message, () => setMessage(''))
        
        // if(message){
        //   socket.emit('sendMessage', message, () => setMessage(''))
        //   }
      })
      .catch(err => console.log(err))
      
    
  }
  // useEffect(() => {
  //   props.RecentChatContacts();
  // }, []);

  return (
    <div className="row mx-0">
      <div className="col-md-4 vh-100 px-0 bg-mainchat border-right-3 border-white scrollable-div">
        <div className="list-group">
          <div className="list-group-item list-group-item-action py-0">
            <div className="text-center mt-2">
              <h4 className="text-white py-2">CIRCLE MESSENGER</h4>
            </div>
            <div className="form-group h-100  mb-4">
              <span className="input-icon">
                <i className="fas fa-search" />
              </span>
              <input
                type="text"
                className="form-control with-icon h6 my-0"
                placeholder="Search Contacts..."
              />
            </div>
          </div>
        </div>

        <div>
          {props.RecentChatContacts.map((item, index) => {
            return (
              
              <Link to={`/chat/${item._id}`}>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => changeFirstShow(item)}
                className="list-group-item list-group-item-action active section-chat py-3"
                key={index}
              >
                
                <div className="d-flex d-row">
                  <img
                    src={item.image}
                    className="chat-profile-pic rounded-circle"
                    alt="..."
                  />
                  <div className="section-chat-div align-self-center">
                    <div className="d-flex d-row">
                      <h6 className="my-0 name-chat">{item.username}</h6>
                      <span className="dot bg-success" />
                    </div>
                    <p className="preview-chat my-0">(Recent Chat)</p>
                  </div>
                  <p className="ml-auto d-flex align-items-center time-text">
                    12.50
                  </p>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </div>

      {firstShow ? (
        <div className="col-md-8 bg-light vh-100">
          <div className="text-center center-div">
            <img src={homePicture} alt="..." className="w-50" />
            <h1>Welcome to Circle Messenger!</h1>
            <h3>“Executive Chatbox, for Professionals.”</h3>
          </div>
        </div>
      ) : (
        <div className="col-md-8 px-0">
          <div className="bg-main support-scrollable-div">
            <div className="bg-light d-flex py-2">
              <img
                src={props.DetailChatRecentContact.image}
                alt="..."
                className="rounded-circle img-chat ml-3"
              />
              <h5 className="align-self-center font-weight-bold pl-2 my-0">
                {props.DetailChatRecentContact.username}
              </h5>
            </div>

            <div className="container pt-3 scrollable-div">
              <h6 className="font-weight-bold text-center pb-1">
                Friday,15/05/20
              </h6>

              {messages.map(data => {
                // console.log(data)
             
            return(
              
              senderUserId === data.senderUserId
                ? 
            (
            <div className="row justify-content-end pt-2">
            <div className="col-md-6">
              <div className="bg-mainchat p-3">
                <div className="d-flex">
                  <h6 className="font-weight-bold">{data._senderUserId}</h6>
                  <p className="my-0 ml-auto time-text">{data.message}</p>
                </div>
                <h6 className="my-0">
                  
                </h6>
              </div>
            </div>
          </div> 
            )
            :
(
            <div className="row justify-content-start pt-2">
            <div className="col-md-6">
              <div className="bg-light p-3">
                <div className="d-flex">
                        <h6 className="font-weight-bold">{data._id}</h6>
                  <p className="my-0 ml-auto time-text">{data.message}</p>
                </div>
                <h6 className="my-0">
                  
                </h6>
              </div>
            </div>
            </div>
            ))
          }
          
            )}
            </div>
            <div className="d-flex pt-2 px-2 bg-white">
              <textarea
                rows="2"
                type="text"
                placeholder="Input your message here..."
                className="input-chat"
                onChange={updateMessage}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                value={message,message.emoji}
              />

              <p className="align-self-center my-0">
                <i className="far fa-grin-alt h3 px-3 " />
              </p>
              <p className="align-self-center my-0">
                <i className="fas fa-paperclip h3 " />
              </p>
              <p className="align-self-center my-0">
                <i onClick={(event) => sendMessage(event)} className="fas fa-arrow-circle-right h3 px-3 " />
                <Picker onEmojiClick={onEmojiClick}/>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    RecentChatContacts: state.chatReducer.RecentChatContacts,
    DetailChatRecentContact: state.chatReducer.DetailChatRecentContact,
  };
};

const mapDispatchToProps = {
  showDetailRecentChat,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
