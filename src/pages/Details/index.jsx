import { FiClock } from "react-icons/fi";
import { BiSolidStar } from 'react-icons/bi';
import { FiStar } from 'react-icons/fi';
import { Main } from "./styles";
import { MainGrid } from '../../components/mainGrid';
import { Button } from "../../components/button";
import { DetailsTag } from '../../components/detailsTag';
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  async function handleRemove() {
    const confirm = window.confirm("Do you really want to delete this movie?")

    if(confirm) {
      await api.delete(`/movies/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
    }

    fetchMovies()
  }, []);

  return(
    <MainGrid>
      {
        data && 
      <Main>
        <div className="mainTitle">
          <h1>{data.title}</h1>
          {
            [...Array(5)].map((_, index) => (
              <div className="rating" key={index}>
                {index < data.rating ? (
                  <BiSolidStar/>
                ) : ( 
                  <FiStar/>
                )}
              </div>
  
            ))
            
          }
        </div>

        <div className="info">
          <img src="https://github.com/beatriz-gm.png" alt="profile photo" />
          <p>By <a href="https://github.com/beatriz-gm">Beatriz Galvão</a></p>
          <FiClock/>
          {
            <p>
              {data.created_at}
            </p>

          }
        </div>

       { 
        data.tags &&
          <div className="tags">
            {
              data.tags.map(tag => (
                <DetailsTag 
                key={String(tag.id)}
                title={tag.name} 
                />
              ))
            }
          </div>
        }
        <div className="desc">
          <p>
            {data.description}
          </p>
        </div>
      </Main>
      }
      <Button 
        title="Delete Movie"
        onClick={handleRemove} 
      />
    </MainGrid>
  )
}