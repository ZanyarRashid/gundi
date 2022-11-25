import Button from "./elements/button";
import Header1 from "./elements/header1";
import Paragraph from "./elements/paragraph";

export default function TitleTextButton(props) {
    return <div>
        <Header1 title= {props.title}/>
        <Paragraph paragraph= {props.text}/>
        <Button link={props.link} btnText={props.btnText}/>
    </div>;
  }