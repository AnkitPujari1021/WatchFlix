import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
export default function Dashboard(props) {
  return (
    <>
      <Header {...props}/>
      <HomePage  {...props}/>
      <Footer  {...props}/>
    </>
  );
}
