import Paragraph from "./elements/paragraph";

export default function Footer(props) {
    return  <div className="section footer">
                <div className="row">
                    <div className="column footer-copyight">
                        <Paragraph paragraph={props.copyright}/>
                    </div>
                    <div className="column footer-author">
                        <Paragraph paragraph={props.author}/>
                    </div>
                </div>
            </div>;
  }