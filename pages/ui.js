import Header1 from "../components/elements/header1";
import Header2 from "../components/elements/header2";
import Header3 from "../components/elements/header3";
import Header4 from "../components/elements/header4";
import Header5 from "../components/elements/header5";
import Header6 from "../components/elements/header6";
import Paragraph from "../components/elements/paragraph";
import Quote from "../components/elements/quote";
import Button from "../components/elements/button";
import Input from "../components/elements/input";
import Checkbox from "../components/elements/checkbox";
import RadioButton from "../components/elements/radioButton";

export default function Ui(props) {
    return <div className="main-body ui">
                <div className="section">
                    <div className="row">
                        <Header1 title="Typography"/>
                    </div>
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
                </div>
                <div className="section">
                    <div className="row">
                        <Header1 title="Buttons"/>
                    </div>
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
                <div className="section">
                    <div className="row">
                        <Header1 title="Form elements"/>
                    </div>
                    <div className="row">
                        <Input inputText="Write something..."/>
                        <Checkbox checkboxName="checkbox1" checkboxText="This is a checkbox."/>
                        <RadioButton radioButtonName="radioButton1" radioButtonText="This is a radio button."/>
                    </div>
                </div>
            </div>
  }