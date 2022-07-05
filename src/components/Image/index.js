function Image({ id }) {
  return (
    <img
      src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
      alt={id}
      onError={(e) => {
        e.target.src = "https://kvartal38.ru/images/cc/no_image.jpg";
      }}
    />
  );
}

export default Image;
