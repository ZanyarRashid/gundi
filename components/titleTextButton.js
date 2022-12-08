import Button from "./elements/button";
import Header1 from "./elements/header1";
import Paragraph from "./elements/paragraph";

export default function TitleTextButton(props) {
    return <div className="section section-1">
        <div className="row">
            <div className="column">
                <Header1 title= {props.title}/>
            </div>
            <div className="column">
                <Paragraph paragraph= {props.text}/>
            </div>
            <div className="column">
                <Button link={props.link} btnText={props.btnText}/>
            </div>
        </div>
    </div>;
  }