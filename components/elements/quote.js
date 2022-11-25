export default function Quote(props) {
    return <blockquote>
        <p>{props.quote}</p>
        <small>{props.author}</small>
    </blockquote>;
  }