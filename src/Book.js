const Book = (props) => {
    const {image, title, author, number} = props;
    return (
      <article className="book">
  
          <img alt={title} src={image}/>
  
          <h2>{title}</h2>
  
          <h4 >{author}</h4>
  <span className="number">{`#${number+1}`} </span>
      </article>
  
  
    );
   
  }

  export default Book;