import { Container } from "./styles";
import { FiStar } from 'react-icons/fi';
import { BiSolidStar } from 'react-icons/bi';
import { Tag } from '../../components/tag';
import { useNavigate } from "react-router-dom";

export function Movie({id, title, description, tags, rating}) {
  
  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  return(
    <Container>
      <div 
        className="movie"
        onClick={() => handleDetails(id)}
      >

        <h1> {title} </h1>
        {
          [...Array(5)].map((_, index) => (
            <div className="rating" key={index}>
              {index < rating ? (
                <BiSolidStar/>
              ) : ( 
                <FiStar/>
              )}
            </div>

          ))
        }
        <p id={id} >
          {description}
        </p>
        {/* {
          tags &&
          <div className="tags">
            {
              tags.map(tag =>
                <Tag 
                  key={String(tag.id)}
                  id={tag.id}
                  title={tag.name} 
                />
              )
            }
          </div>
        } */}
      </div>
    </Container>
  )
}