import styled from "styled-components";

const MainFlexContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    text-align: center;
    height: 100%;
    width: 50vw;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    margin: 0 auto;
`;

const AlignLeftSplitHalfGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(100%, auto);
    gap: 5%;
    width: 100%;
    text-align: left;
`;

const LeftGrid = styled.div`
    grid-column: 1;
    grid-row: 1;
`;

const RightGrid = styled.div`
    grid-column: 2;
    grid-row: 1;
`;

const ResizeImg = styled.img`
    width: 100%;
    height: auto;
`;

const SplitHalfTextGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(1rem, auto);
    gap: 5%;
    width: 100%;
    text-align: left;
`;



function LearnMorePage() {
    return (
        <MainFlexContainer>
            <h1 style={{ paddingBottom: "2rem" }}>About Me</h1>
            <AlignLeftSplitHalfGrid>
                <LeftGrid>
                    <ResizeImg src="https://i.redd.it/bdhll8oqtej81.png" alt="Tip: Ownership is theft." />
                </LeftGrid>
                <RightGrid>
                    <h3>helo I am l. rho, professional rust programmer steryotype</h3>
                    <p>THE KNOWLEDGE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF UNLEASHING INDESCRIBABLE HORRORS THAT SHATTER YOUR PSYCHE AND SET YOUR MIND ADRIFT IN THE UNKNOWABLY INFINITE COSMOS.</p>
                    <p>haha crabbo go z o o o o o o o o m :DDDDDD</p>
                    <AlignLeftSplitHalfGrid>
                        <LeftGrid>
                            <p>Name</p>
                            <p>Email</p>
                            <p>Phone</p>
                            <p>DoB</p>
                        </LeftGrid>
                        <RightGrid style={ {textAlign: "right"} }>
                            <p>L. Rho</p> 
                            <p>[EMAIL PROTECTION ACTIVE]</p>
                            <p>1234567890</p>
                            <p>older than you are</p>
                        </RightGrid>
                    </AlignLeftSplitHalfGrid>

                </RightGrid>
            </AlignLeftSplitHalfGrid>
            <h1 style={{ paddingTop: "80vh" }}>Education</h1>
            <ResizeImg src="https://i.redd.it/9dzlqi2ew7f81.jpg" alt="average rust user" />
            <p>education? whats that??</p>
        </MainFlexContainer>
    );
}

export default LearnMorePage;