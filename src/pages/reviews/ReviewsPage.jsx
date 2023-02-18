import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviews } from "services/Api";
import { ReviewsStyled, ReviewsTextStyled, ReviewsListStyled } from "components/reviews/Reviews.styled";


export const ReviewsPage = () => {
    const [reviews, setReviews] = useState();
    const {id} = useParams();
    // console.log(reviews)

    useEffect (() => {
        const fetchReviewsPage = async () => {
            try {
                const result = await fetchReviews(id);
                setReviews(result)
            } catch ({responce}) {
                console.log(responce.data.message);
            }
        }
        fetchReviewsPage();
    }, [id])
    return (
        
        <>
        <ul>
            {reviews?.results.map(({author, content, id}) => (
                <ReviewsListStyled key={id}>
                    <ReviewsStyled>{author}</ReviewsStyled>
                    <ReviewsTextStyled>{content}</ReviewsTextStyled>
                </ReviewsListStyled>
            ))}
        </ul>
        </>
    )
}