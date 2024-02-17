import "bootstrap/dist/css/bootstrap.min.css";

function Card1({ data, setData, fullData }) {
  const mapData = (author) => {
   const result= fullData.map(function (item) {
      if (item.author === author) {
        item.author = "Anant Tyagi";
      }
      debugger
      return item
    });
    setData(result);
  };
//   console.log("Title of Books:", titles);
  

  return (
    <>
      <div className="col-sm-12 col-md-4 border border-primary rounded mx-auto">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.author}</p>
        <p className="card-text">{data.pages}</p>
        <a href="#" className="btn btn-danger" onClick={() => mapData(data.author)}>
          Map Button
        </a>
      </div>
    </>
  );
}
export default Card1;