import "./dashboard.css";
import ProjectCard from "./projectCard";
import CompletedTasksChart from "./chart";
import TeamMemberList from "./teamMemebersLists";
import { useEffect, useState } from "react";


const Dashboard = () => {

    // Dummy data for completed tasks
    const completedTasksData = [
        { date: '2024-05-01', completedCount: 5 },
        { date: '2024-05-02', completedCount: 8 },
        { date: '2024-06-25', completedCount: 6 },
        { date: '2024-07-03', completedCount: 5 },
        { date: '2024-08-28', completedCount: 2 },
        { date: '2024-09-22', completedCount: 9 },
        { date: '2024-10-16', completedCount: 5 },
    ];

    const members = [
        { name: 'Ali Ahmed', position: 'UI Designer' },
        { name: 'John Doe', position: 'Developer' },
        { name: 'Jane Doe', position: 'Manager' },
    ];
    const [userName, setUserName] = useState("")
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setUserName(user.displayName)
    }, [])

    return (<>
        <div className="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
            <input placeholder="Search" type="search" class="input" />
        </div>
        <div className="taskDiv">
            <div>
                <h1 class="text-3xl font-bold">
                    Today Task
                </h1>
                <p>Check Your Daily Task and Schedules</p>
                <button>Today`s Schedule</button>
            </div>
            <div>
                <h2 className="font-bold text-2xl">Welcome {userName}</h2>
            </div>
        </div>
        <div className="flex flex-row mt-5 gap-x-6 gap-y-4 flex-wrap  justify-start">
            <ProjectCard
                date="Nov, 02, 2024"
                title="Web Development"
                category="Designing"
                progress={50}
                deadline="2 days left"
            />
            <ProjectCard
                date="Sept, 06, 2024"
                title="Mobile App"
                category="Shopping"
                progress={20}
                deadline="7 days left"
            />
            <ProjectCard
                date="Aug, 02, 2024"
                title="Animation Illustration"
                category="Designing"
                progress={70}
                deadline="4 days left"
            />
        </div>
        <div className="chartNmemeberDiv">
            <div className="chartDiv">
                <h1 className="font-bold text-xl">Tasks Completed</h1>
                <CompletedTasksChart completedTasksData={completedTasksData} />
            </div>
            <div className="teamMemberDiv">
                <TeamMemberList members={members} />
                <button class="Btn">
                    <span class="text">See All</span>
                </button>
            </div>
        </div>
    </>)
};


export default Dashboard;