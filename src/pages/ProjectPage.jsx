import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";



function ProjectPage() {
    // + // Here we use a hook that comes for free in react router called `useParams`
    // to get the id from the URL so that we can pass it to our useProject hook.
    const { id } = useParams();
    const params = useParams()
    console.log(params)

    // + // useProject returns three pieces of info, so we need to grab them all here
    const { project, isLoading, error } = useProject(id);
    
    if (isLoading) {
        return (<p>loading...</p>)
    }

    if (error) {
        return (<p>error.message</p>)
    }
    
    return (
        <div>
            <h2>{project.title}</h2>
            <h3>Created at: {project.date_created}</h3>
            <h3>{`Status: ${project.is_open}`}</h3>
            {/* <img src={projectData.image} /> how do I add my image to the project? */}
            <h3>Pledges:</h3>
            <ul>
                {project.pledges.map((pledgeData, key) => {
                    return (
                        <li key={key}>
                            {pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    );
                })}
            </ul>

            {/* {<Link to={`/pledge/${id}`}><button>New Pledge</button></Link>} */}
            {/* link to new pledge needs to be above but how? */}
         </div>
     );
}

export default ProjectPage;