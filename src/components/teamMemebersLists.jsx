

const TeamMemberList = ({ members }) => {
    return (
        <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">Team Members</h2>
            <div className="grid gap-4 p-4">
                {members.map((member, index) => (
                    <div key={index} className="bg-white rounded-lg p-2 shadow-md pr-8 ">
                        <div className="flex items-center">
                            <figure className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-fill text-white dark:text-indigo-300" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                                </svg>
                            </figure>
                            <div className="ml-2">
                                <h2 className="text-sm font-semibold">{member.name}</h2>
                                <p className="text-sm text-gray-600">{member.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamMemberList;
