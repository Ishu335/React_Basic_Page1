// import ".Card.css"
function Card({ name, children}) {
  return (
    <div className="card">
      <h3>{name}</h3>
     {children}
    </div>
  );
}

export default Card;


{/* <div>
        <Card 
        name="Anthony Blake">
        <p>
          Blake is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Anthony</a>
        </p>
      </Card>
      <Card 
        name="Maria Miles">
        <p>
          Maria is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Maria</a>
        </p>
  </Card>
      </div> */}