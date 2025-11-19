import Header from './Header';
import "./home.css";

export default function Home() {
    document.title += "Colby Sanders Clever Salmon || Home";
  return (
    <>
    <h2>Welcome!</h2>
	<div className="text-box">
    <p>This is all the content for my ITIS 3135 class</p>
	</div>
      
    </>
  );
}