import { useState, useEffect } from 'react';
import { fetchCast } from 'services/Api';
import { useParams } from 'react-router-dom';
import {
  CastContainer,
  CastItem,
  CastImage,
} from 'components/cast/Cast.styled';
// import { CastItem } from "components/cast/Cast";

const Cast = () => {
  const [cast, setCast] = useState();
  const { id } = useParams();
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
  const placeHolder =
    'https://invisiblechildren.com/wp-content/uploads/2012/07/facebook-profile-picture-no-pic-avatar.jpg';

  useEffect(() => {
    const fetchCastPage = async () => {
      try {
        const result = await fetchCast(id);
        setCast(result);
      } catch ({ responce }) {
        console.log(responce.data.message);
      }
    };
    fetchCastPage();
  }, [id]);
  return (
    <>
      <CastContainer>
        {cast?.cast.map(({ id, profile_path, name }) => (
          <CastItem key={id}>
            <CastImage
              src={profile_path ? baseImgUrl + profile_path : placeHolder}
              alt={name}
            />
            <p>{name}</p>
          </CastItem>
        ))}
      </CastContainer>
    </>
  );
};

export default Cast;
