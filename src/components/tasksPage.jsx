import React from 'react';
import TaskCard from './taskCard';


const TasksPage = () => {
    // Mock task data or fetch actual data from API
    const tasks = [
        { id: 1, title: 'Design Landing Page', deadline: '2024-05-15', priority: 'High', status: 'In Progress', assignedMembers: ['John Doe, rahul, abdullah'], progress: 60 },
        { id: 2, title: 'Fix Bugs in Backend', deadline: '2024-05-18', priority: 'Medium', status: 'Pending', assignedMembers: ['Jane Doe, sana, rehan'], progress: 90 },
        { id: 3, title: 'Frontend Design', deadline: '2024-07-18', priority: 'Medium', status: 'In Progress', assignedMembers: ['Jane Doe,sana, rehan'], progress: 10 },
        { id: 4, title: 'Chatbot integration', deadline: '2024-09-18', priority: 'high', status: 'Pending', assignedMembers: ['Jane Doe,rahul, abdullah'], progress: 30 },
        // Add more task objects as needed
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Projects</h1>
            {tasks.map(task => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TasksPage;
