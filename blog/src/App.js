import './App.css';
import { useState } from 'react';

function App() {
  let [title, titleEdit] = useState(['React state', 'Vue state', 'Dart?']);
  let [like, likeEdit] = useState(0);
  // const posts = 'React vs Vue';

  return (
    <div className="App">
      <div className="black-nav">
        <div>Dev Blog</div>
      </div>
      <div className="list">
        <h3>
          {title[0]}{' '}
          <span
            onClick={() => {
              likeEdit(like++);
            }}
          >
            {' '}
            👍{' '}
          </span>{' '}
          {like}
        </h3>
        <p>1월 15일 발행</p>
        <button
          onClick={() => {
            titleEdit((title = ['바뀌나?']));
          }}
        >
          제목 변경
        </button>
        <hr />
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>1월 15일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[2]}</h3>
        <p>1월 15일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
