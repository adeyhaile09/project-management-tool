const ProjectDetails = (props) => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            voluptate ullam distinctio debitis minima eum natus nisi rem tempora
            dicta ducimus a culpa harum fugit non, doloribus commodi incidunt
            nostrum.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Daniel Marcoci</div>
          <div>23th December, 6pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
