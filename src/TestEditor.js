import { useState } from 'react';
import './TestEditor.css';

const TestEditor = () => {
  const [header, setHeader] = useState('본문입력');
  const [text, setText] = useState('');
  return (
    <div className='editor'>
      <header>
        <h3>{header}</h3>
        <button className='close'>
          <i className='fa-solid fa-xmark'></i>
        </button>
      </header>
      <div className='container__text'>
        <textarea
          className='text'
          placeholder='여기에 영어 문장을 직접 작성하거나 붙여넣기 해주세요. 교정 버튼을 누르면 교정 제안이 하단에 나타납니다.'
          maxlength='1000'
          onChange={(e) => {
            setText(e.target.value);
            setHeader('입력중');
          }}
        >
          {text}
        </textarea>
        <div className='container__indicator'>
          <div className={text.length > 0 ? 'indicator__letter__after' : 'indicator__letter__before'}>
            {text.length}/1000
          </div>
          <button className='indicator__arrow'>
            <i className='fa-solid fa-arrow-right'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestEditor;
