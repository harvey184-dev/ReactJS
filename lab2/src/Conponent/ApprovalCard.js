import React from 'react';
import './ApprovalCard.css';

const ApprovalCard = (props) => {
    return (
        <div className="approval-card">
            <div className="approval-card-content">{props.children}</div>
            <div className="approval-card-actions">
                <button className="approve-button">Approve</button>
                <button className="reject-button">Reject</button>
            </div>
        </div>
    );
};

export default ApprovalCard;
