
import styled from "styled-components";

const MainFlexContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    text-align: center;
    height: 100vh;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
`;

function Ugly() {


    return (
        <MainFlexContainer>
            <h1>the party demands you look at this cat.</h1>
            <h1>look at it! nya nya nya!</h1>
            <img src="Screenshot_20220418_094950.png" alt="" />
        </MainFlexContainer>
    );
}

export default Ugly;