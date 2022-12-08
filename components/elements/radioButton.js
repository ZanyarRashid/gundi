export default function RadioButton(props) {
    return <div>
        <input type="radio" id="id" name={props.radioButtonName} value="value"/>
        <label for={props.radioButtonName}>{props.radioButtonText}</label>
    </div>
  }