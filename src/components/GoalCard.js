import React from "react";

function GoalCard({ goal }) {
    return (
        <div className='goalCard'>
            <li>{goal}</li>
        </div>
    );
}

export default GoalCard;