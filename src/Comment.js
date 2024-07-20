import './Comment.css';
import { useRef, useState } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

// const clickHandle = () => {
//   console.log('clicked');
// }
// const clickHandle = (e) => {
//   console.log('clicked',e);
// }
// const clickHandle = (inputP) => {
//   console.log('clicked',inputP);
// }
// const clickHandle = (inputP,e) => {
//   console.log('clicked',inputP,e);
// }

function Comment() {

  var commentListInit = [
    {
      cid: 1001,
      uid: 2001,
      commentStr: 'aaaaaaaaaa',
      date: '2024-07-22',
      likeNum: 0
    },
    {
      cid: 1002,
      uid: 2002,
      commentStr: 'bbbbbbbbbb',
      date: '2024-07-21',
      likeNum: 1
    },
    {
      cid: 1003,
      uid: 2003,
      commentStr: 'cccccccccccccc',
      date: '2024-07-20',
      likeNum: 3
    }
  ]

  var tapList = [
    {
      tapid: 3001,
      tapType: 'new',
      tapLabel: '最新'
    },
    {
      tapid: 3002,
      tapType: 'hot',
      tapLabel: '最热'
    }
  ]

  const delHandle = (cid) => {
    setCommentList(
      commentList.filter(item => item.cid !== cid)
    )
  }

  const changeTap = (tapType) => {
    setTapType(tapType);
    setCommentList(
      _.orderBy(commentList, tapType === 'hot' ? 'likeNum' : 'date', 'desc'),
    )
  }

  const changeText = (e) => {
    setContent(e.target.value);
  }

  const publishComment = () => {
    setCommentList(
      [
        ...commentList,
        {
          cid: uuidv4(),
          uid: 2003,
          commentStr: content,
          date: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
          likeNum: 11
        }
      ]
    )
    setContent('');
    inputRef.current.focus();
  }

  const [commentList, setCommentList] = useState(_.orderBy(commentListInit, 'date', 'desc'));
  const [tapType, setTapType] = useState('new');
  const [content, setContent] = useState();

  const inputRef = useRef(null);

  return (
    <div>
      <div>
        <span>评论：{commentList.length}       </span>
        {tapList.map(item => (
          <span id={item.tapid}
            onClick={() => changeTap(item.tapType)}
            // className={`nav-item ${tapType === item.tapType && 'active'}`}
            className={classNames('nav-ite', { 'active': tapType === item.tapType })}
          >
            {item.tapLabel}
          </span>))}
      </div>
      <div>
        <input onChange={changeText} ref={inputRef} value={content}></input>
        <button onClick={publishComment}>发布</button>
      </div>
      {commentList.map(item => (
        <div>
          <div>{item.commentStr}</div>
          <div id={item.cid}>
            <span>{item.date}</span>
            <span>点赞数:{item.likeNum}</span>
            {item.uid === 2002 &&
              <button onClick={() => delHandle(item.cid)}>delete</button>
            }
          </div>
        </div>
      ))}
    </div>


  );
}

export default Comment;
