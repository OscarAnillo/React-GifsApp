export default function GifGridItem({ title, url }) {
  return (
    <div>
      <img src={url} alt="" />
      <p>{title}</p>
    </div>
  );
}
