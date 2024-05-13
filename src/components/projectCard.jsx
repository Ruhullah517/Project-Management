import "./projectCard.css";

const ProjectCard = ({ date, title, category, progress, deadline }) => {
    return (
        <div className="projectCard">
            <div className="projectCardTop">
                <p>{date}</p>
                <img id="dots" src="/menu.png" alt="" />
            </div>
            <div className="projectCardMiddle">
                <h3 className="font-bold">{title}</h3>
                <p>{category}</p>
                <div className="progress-loader">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="projectProgress">
                    <p>Progress</p>
                    <p>{progress}%</p>
                </div>
            </div>
            <hr />
            <div className="projectCardEnd">
                <figure className="mb-4 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-person-fill text-white dark:text-indigo-300" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                    </svg>
                </figure>
                <div className="addBtn">
                    <button className="group cursor-pointer outline-none hover:rotate-90 duration-300" title="Add New">
                        <svg
                            className="stroke-teal-500 fill-none group-hover:fill-teal-800 group-active:stroke-teal-200 group-active:fill-teal-600 group-active:duration-0 duration-300"
                            viewBox="0 0 24 24"
                            height="25px"
                            width="25px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path stroke-width="1.5" d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"></path>
                            <path stroke-width="1.5" d="M8 12H16"></path>
                            <path stroke-width="1.5" d="M12 16V8"></path>
                        </svg>
                    </button>
                </div>

                <div className="projectDeadline">
                    {deadline}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
