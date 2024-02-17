import { useState } from "react";
import dummy from "./utils/dummy";
// import Card from "../utils/card";
import "bootstrap/dist/css/bootstrap.min.css";
import BackButton from "./commom/backbutton";

function Carddelete() {
  const [item, setitem] = useState(dummy);

  function deleted(delete_id) {
    const result = item.filter(function (item) {
      return item.id != delete_id;
    });
    setitem(result);
  }

  return (
    <section>
      <div>
        <BackButton />
      </div>
      {item.map(function (item) {
        const styles = { width: " 18rem " };
        return (
          <>
            <div class="card " style={styles}>
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div class="card-body">
                <h5 class="card-title">{item.id}</h5>
                <p class="card-text">{item.title}</p>
                <button
                  class="btn btn-primary"
                  onClick={function () {
                    deleted(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
}

export default Carddelete;

// <section>
//   {item.map(function (item, index) {
//     return <Card data={item} index={index} />;
//   })}
// </section>
