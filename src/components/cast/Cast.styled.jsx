import styled from "@emotion/styled";

export const CastContainer = styled.ul `
display: flex;
flex-wrap: wrap;
gap: 10px;
`

export const CastItem = styled.li `
flex-basis: calc((100% - 20px) / 3);
list-style-type: none;
`

export const CastImage = styled.img `
width: 200px;
`