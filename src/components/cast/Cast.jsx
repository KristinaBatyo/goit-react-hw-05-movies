

export const CastItem = ({url}) => {
    const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

    return (
        <>
        <img src={baseImgUrl + url} alt="" />
        </>
    )
}