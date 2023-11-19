/* eslint-disable react/prop-types */
function CardImage({ id, url, desc, link }) {

  return (
    <figure className={id}>
      <a className="img-link hide" target="_blank" rel="noreferrer" href={link}> 
        <img src={url} alt={desc} />
      </a>
    </figure>
  );
}

export default CardImage;
