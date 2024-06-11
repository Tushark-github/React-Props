export default function HeadingColor({ color, text }) {
  return (
    <div>
      <h1 style={{ color: color }}>{text}</h1>
    </div>
  )
}