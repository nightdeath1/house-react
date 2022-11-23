import styled from "styled-components";

export const HSSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

`;
export const HSContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 3rem calc((100vw - 1300px) /2); */
  padding: 5rem 0;

`;

export const HSHeading = styled.h1`
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 6vw, 2rem);
  text-align: center;
  padding-bottom: 4rem;

  @media screen and (max-width: 768px) {
    padding-bottom: 1rem;
  }
`;

export const HSItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
}
`;

export const HSItem = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
width: 45%;

@media screen and (Max-width: 768px) {
  width: 100%;
  justify-content: center;
    align-items: center;
    text-align: center;
}

    p {
        font-size: 1.4rem;

        @media screen and (max-width: 768px) {
          font-size: 1rem;
          
        }
    }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
