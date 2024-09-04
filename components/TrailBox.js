import styled from "styled-components";

const TrailWrapper = styled.div`

`;

const WhiteBox = styled.div`
    background-color: #fff;
    padding: 20px;
    height: 150px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img{
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }
`;

const Title = styled.h2`
    font-weight: normal;
    font-size: 1rem;
    margin:0;
`;

export default function TrailBox({_id, title, description,trailImages}){
    return(
        <TrailWrapper>
        <WhiteBox>
            <img src={trailImages[0]} alt=""/>
        </WhiteBox>
            <Title>{title}</Title>
            {description}
        </TrailWrapper>
    );
}