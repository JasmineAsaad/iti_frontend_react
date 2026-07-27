export default function Button({ text, onClick }) {
    return (
        <button className="btn btn-info my-4" onClick={onClick}>
            {text}
        </button>
    )
}