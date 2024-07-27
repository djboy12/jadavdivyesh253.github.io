import "./App.css";
import Header from "./My Components/Header";
import Todos from "./My Components/Todos";
import Footer from "./My Components/Footer";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go To market",
      desc: "You need to go school1",
    },
    {
      sno: 2,
      title: "Go To school",
      desc: "You need to go school2",
    },
    {
      sno: 3,
      title: "Go To ghat",
      desc: "You need to go school3",
    },
    {
      sno: 4,
      title: "Go To moive",
      desc: "You need to go school4",
    },
  ];
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
