import './Comment.css';
import { useState } from 'react';
import _ from 'lodash';
import classNames from 'classnames';

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
  var commentList = [
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

  var mystate = {
    tapType: 'new',
    commentList: _.orderBy(commentList, 'date', 'desc')
  }
  const [commentState, setCommentState] = useState(mystate);

  const delHandle = (cid) => {
    setCommentState(
      {
        ...commentState,
        commentList: commentState.commentList.filter(item => item.cid !== cid)
      }
    )
  }

  const changeTap = (tapType) => {
    setCommentState(
      {
        ...commentState,
        commentList: _.orderBy(commentState.commentList, tapType==='hot'?'likeNum':'date', 'desc'),
        tapType
      }
    )
  }

  return (
    <div>
      <div>
      <span>评论：{commentState.commentList.length}       </span>
        {tapList.map(item => (
          <span id={item.tapid}
            onClick={() => changeTap(item.tapType)}
            // className={`nav-item ${commentState.tapType === item.tapType && 'active'}`}
            className={classNames('nav-ite', {'active' :commentState.tapType === item.tapType})}
          >
            {item.tapLabel}
          </span>))}
      </div>
      {commentState.commentList.map(item => (
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
