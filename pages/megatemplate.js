import Header from "../components/header";
import Footer from "../components/footer";
import TitleTextButton from "../components/titleTextButton";

export default function Megatemplate(props) {
    return <div className="megatemplate">
        <Header />
        <div className="main">
            <TitleTextButton title="Main title" text="This is the first paragraph" link="/" btnText="button"/>
            <TitleTextButton title="Main title 2" text="This is the second paragraph" link="/about" btnText="button 2"/>
            <TitleTextButton title="Main title 3" text="This is the third paragraph" link="https://www.google.nl" btnText="button 3"/>
        </div>
        <Footer />
    </div>
  }