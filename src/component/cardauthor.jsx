import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import BackButton from "./commom/backbutton";
import Card1 from "./utils/card1";

const library = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
  { title: "1984", author: "George Orwell", pages: 328 },
  { title: "Pride and Prejudice", author: "Jane Austen", pages: 279 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", pages: 224 },
  { title: "Animal Farm", author: "George Orwell", pages: 112 },
];
// const temp = ["The Gatsby", "The Great Gatsby"]
function Cardauthor() {
  const [data, setData] = useState(library);
  return (
    <>
    <BackButton/>
    <div className="row">
      {data.map(function (item) {
        console.log(item);
        return <Card1 data={item} fullData={data} setData={setData} />;
      })}
    </div>
    </>
  );
}
export default Cardauthor;
