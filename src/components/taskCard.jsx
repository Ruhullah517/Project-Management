import React from 'react';

const TaskCard = ({ task }) => {
    

    // Destructure task data or use props directly if passed from parent component
    const { title, deadline, priority, status, assignedMembers, attachments, comments, taskHistory, progress } = task;

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <p className="text-sm text-gray-600 mb-2">Deadline: {deadline}</p>
            <p className="text-sm text-gray-600 mb-2">Priority: {priority}</p>
            <p className="text-sm text-gray-600 mb-2">Status: {status}</p>

            {/* Assigned Members */}
            <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm font-bold">Assigned to:</span>
                {assignedMembers.map((member, index) => (
                    <span key={index} className="text-sm text-indigo-500">{member}</span>
                ))}
            </div>

            {/* Attachments, Comments, Task History - You can add UI for these as needed */}

            {/* Task Progress */}
            <div className="flex items-center justify-between">
                <span className="text-sm font-bold">Progress:</span>
                <div className="flex items-center">
                    <span className="text-sm text-gray-600 mr-2">{progress}%</span>
                    <div className="h-2 w-48 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
