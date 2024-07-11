import React from 'react';
import ApprovalCard from './Conponent/ApprovalCard';
import CommentDetail from './Conponent/CommentDetail';
import DataList from './Conponent/DataList';
import { faker } from '@faker-js/faker';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Comments</h1>
      <div className="comments-container">
        <ApprovalCard>
          <div>
            <h4>Warning!</h4>
            Are you sure you want to do this?
          </div>
        </ApprovalCard>
        <ApprovalCard>
          <DataList />
        </ApprovalCard>
      </div>
    </div>
  );
};

export default App;

