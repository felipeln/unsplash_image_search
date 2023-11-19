/* eslint-disable react/prop-types */
function CardImage({ id, url, desc, link }) {

  return (
    <figure className={id}>
      <img src={url} alt={desc}/>

      <a className="img-link hide" target="_blank" rel="noreferrer" href={link}></a>
    </figure>
  );
}

export default CardImage;
