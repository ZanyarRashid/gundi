import Header1 from "../components/elements/header1";
import Header2 from "../components/elements/header2";
import Header3 from "../components/elements/header3";
import Header4 from "../components/elements/header4";
import Header5 from "../components/elements/header5";
import Header6 from "../components/elements/header6";
import Paragraph from "../components/elements/paragraph";
import Quote from "../components/elements/quote";
import Button from "../components/elements/button";

export default function Ui(props) {
    return <div className="ui">
        <Header1 title="Typography"/>
        <div className="row">
        <Header1 title="This is a header 1"/>
        <Header2 title="This is a header 2"/>
        <Header3 title="This is a header 3"/>
        <Header4 title="This is a header 4"/>
        <Header5 title="This is a header 5"/>
        <Header6 title="This is a header 6"/>
        <Paragraph paragraph="This is a paragraph"/>
        <Quote quote="All true artists, whether they know it or not, create from a place of no-mind, from inner stillness" author="Eckhart Tolle"/>
        </div>
        <Header1 title="Buttons"/>
        <div className="row">
        <Button link="#" btnText="Default" style="default" size="small" color="primary"/>
        <Button link="#" btnText="Rounded" style="rounded" size="small" color="primary"/>
        <Button link="#" btnText="Outline" style="outline" size="small" color="primary"/>
        <Button link="#" btnText="Outline rounded" style="outline rounded" size="small" color="primary"/>
        </div>
        <div className="row">
        <Button link="#" btnText="Small" style="default" size="small" color="primary"/>
        <Button link="#" btnText="Regular" style="default" size="regular" color="primary"/>
        <Button link="#" btnText="Large" style="default" size="large" color="primary"/>
        </div>
        <div className="row">
        <Button link="#" btnText="Primary" style="default" size="small" color="primary"/>
        <Button link="#" btnText="Secondary" style="default" size="small" color="secondary"/>
        </div>
    </div>
  }