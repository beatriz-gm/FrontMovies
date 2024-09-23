import { Content } from "./styles";
import { Input } from "../../components/input";
import { MainGrid } from '../../components/mainGrid';
import { TextArea } from "../../components/textArea";
import { Button } from '../../components/button';
import { Marker } from '../../components/markers';
import { BiSolidStar } from 'react-icons/bi';
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    if(newTag.trim() !== ''){
      setTags(prevState => [...prevState, newTag]);
      setNewTag("");
    }
  }

  function handleDeleteTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }


  async function saveChanges() {
    if(!title) {
      return alert("Type the movie title!")
    }

    if(!description) {
      return alert("Add a description to your movie!")
    }
      
    if (!rating) {
      return alert("Add a rating from 1 to 5 for your film!");
    }

    if (tags.length === 0) {
      return alert("Add a tag to your movie!")
    } 

    if (newTag) {
      return alert("Click add to save the typed tag on your note!")
    }
  
    await api.post("/movies", {
      title,
      description,
      rating,
      tags
    });
  
    console.log(tags)
    alert("Movie added sucessfully!");
    navigate(-1);

  }

  return (
    <MainGrid>
      <h1>New movie</h1>
      <Content>
        <div className="inputs">
          <Input 
            placeholder="Title" 
            onChange={e => setTitle(e.target.value)}
            />
          <div className="rating"
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
          >
            <p style={{color: isHovered ? "transparent" : "GrayText", opacity: rating > 0 ? 0 : 1 }}
              >Your rate (from 0 to 5)</p>
            <div className="stars">
              <input 
                type="radio"  
                id="star5" 
                name="rating" 
                value="5"
                checked={rating === '5'}
                onChange={e => setRating(e.target.value)}
                 />
              <label htmlFor="star5"><BiSolidStar size={20}/></label>

              <input 
                type="radio"  
                id="star4" 
                name="rating" 
                value="4"
                checked={rating === '4'}
                onChange={e => setRating(e.target.value)}
                />
              <label htmlFor="star4"><BiSolidStar size={20}/></label>

              <input 
                type="radio"  
                id="star3" 
                name="rating" 
                value="3"
                checked={rating === '3'}
                onChange={e => setRating(e.target.value)}
                />
              <label htmlFor="star3"><BiSolidStar size={20}/></label>

              <input 
                type="radio"  
                id="star2" 
                name="rating" 
                value="2"
                checked={rating === '2'}
                onChange={e => setRating(e.target.value)}
                />
              <label htmlFor="star2"><BiSolidStar size={20}/></label>

              <input 
                type="radio"  
                id="star1" 
                name="rating" 
                value="1"
                checked={rating === '1'}
                onChange={e => setRating(e.target.value)}
                />
              <label htmlFor="star1"><BiSolidStar size={20}/></label>
            </div>

          </div>
        </div>
        <TextArea 
          placeholder="Description"
          onChange={e => setDescription(e.target.value)} 
          ></TextArea>
        <h2>Markers</h2>
        <div className="markers">
          {
            tags.map((tag, index) => (
              <Marker 
                key={String(index)}
                value={tag}
                onClick={() => handleDeleteTag(tag)}
              />
            ))
          }

          <Marker 
            isnew="true"
            placeholder="new tag"
            onChange={e => setNewTag(e.target.value)}
            value={newTag}
            onClick={handleAddTag}
          />

        </div>
        <div className="buttons">
          <Button title="Cancel" to="/" />
          <Button title="Save changes" onClick={saveChanges} />

        </div>
      </Content>
    </MainGrid>
  )
}

