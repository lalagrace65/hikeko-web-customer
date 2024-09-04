import styled from "styled-components";
import Center from "./Center";
import TrailBox from "./TrailBox";

const TrailsGrid = styled.div`
    display : grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding-top: 20px;
`;

export default function NewTrailList({ trails }) {
    return (
    <Center>
        <TrailsGrid>
            {trails?.length > 0 && trails.map((trail) => (
                <TrailBox {...trail}>
                </TrailBox>
            ))}
        </TrailsGrid>
    </Center>
    );
  }