import React from 'react';

import StudentVideo from '../../containers/StudentVideo';
import AnswerModal from '../../containers/AnswerModal.jsx'

import './style.less';

const StudentPage = props => {
  const streamKey = props.currStream.streamKey;
  return (
    <div className="student-page">
      <div className="columned">
        <h1> LEARN.LY </h1>
        <StudentVideo currStream={props.currStream} />
        <AnswerModal />
      </div>
      <div className="footer">
        Made with ☕ at HackSC 20
      </div>
      <div className="footer2">
        <b>Learn.ly</b> Student View
      </div>
    </div>
  );
};

export default StudentPage;
