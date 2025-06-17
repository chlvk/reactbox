import Button from "./Button.jsx";

const ProjectsSidebar = ({
  onStartProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((item) => {
          let buttonClasses =
            "w-full px-2 py-1 my-1 text-left rounded-sm hover:text-stone-200 hover:bg-stone-800";
          if (item.id === selectedProjectId) {
            buttonClasses += " bg-stone-800 text-stone-200";
          } else {
            buttonClasses += " text-stone-400";
          }

          return (
            <li key={item.id}>
              <button
                className={buttonClasses}
                onClick={() => onSelectProject(item.id)}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
