export default function Checkbox(props) {
    return <div>
        <input type="checkbox" id="id" name={props.checkboxName} value="value"/>
        <label for={props.checkboxName}>{props.checkboxText}</label>
    </div>
  }