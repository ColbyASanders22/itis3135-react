import Header from './Header';

export default function Home() {
    document.title += "Colby Sanders Clever Salmon || Home";
  return (
    <>
           <Header></Header>
    <h2>Welcome!</h2>
	<div class="text-box">
    <p>This is all the content for my ITIS 3135 class</p>
	</div>
      
    </>
  );
}