export default function Button(props) {
    return <a href={props.link} className={`btn ${props.style} ${props.size} ${props.color}`}>{props.btnText}</a>;
  }