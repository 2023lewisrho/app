import styled from "styled-components";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    text-align: left;
`;

const LeftGrid = styled.div`
    grid-column: 1;
`;

const RightGrid = styled.div`
    grid-column: 2;
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
                        <p style={{
                            gridColumn: 1,
                            gridRow: 1,
                        }}>Name</p>
                        <p style={{
                            gridColumn: 1,
                            gridRow: 2,
                        }}>Email</p>
                        <p style={{
                            gridColumn: 1,
                            gridRow: 3,
                        }}>Phone</p>
                        <p style={{
                            gridColumn: 1,
                            gridRow: 4,
                        }}>DoB</p>
                        <p style={{
                            gridColumn: 2,
                            gridRow: 1,
                        }}>L. Rho</p> 
                        <p style={{
                            gridColumn: 2,
                            gridRow: 2,
                        }}>[REDACTED]</p>
                        <p style={{
                            gridColumn: 2,
                            gridRow: 3,
                        }}>1234567890</p>
                        <p style={{
                            gridColumn: 2,
                            gridRow: 4,
                        }}>older than you are</p>
                    </AlignLeftSplitHalfGrid>
                </RightGrid>
            </AlignLeftSplitHalfGrid>
            <div>

                <h1 style={{ paddingTop: "80vh" }}>Education</h1>
                <p>education? whats that??</p>
                <AlignLeftSplitHalfGrid>
                    <p style={{
                            gridColumn: 1,
                            gridRow: 1,
                        }}>GPA</p>
                    <p style={{
                            gridColumn: 1,
                            gridRow: 2,
                        }}>SAT</p>
                    <p style={{
                            gridColumn: 1,
                            gridRow: 3,
                        }}>POG</p>
                    <p style={{
                            gridColumn: 1,
                            gridRow: 4,
                        }}>BAGET</p>
                    <ProgressBar style={{
                            gridColumn: 2,
                            gridRow: 1,
                        }} min={0.0} max={5.0} now={3.14159} label={"3.14/5.0"} />
                    <ProgressBar style={{
                            gridColumn: 2,
                            gridRow: 2,
                        }} min={0.0} max={1500.0} now={1480.0} label={"1480/1500"} />
                    <ProgressBar style={{
                            gridColumn: 2,
                            gridRow: 3,
                        }} min={0.0} max={10.0} now={9} label={"9/10"} />
                    <ProgressBar style={{
                            gridColumn: 2,
                            gridRow: 4,
                        }} min={0.0} max={5.0} now={3.14159} label={"3.14/5.0"} />
                </AlignLeftSplitHalfGrid>


            </div>
        </MainFlexContainer>
    );
}

export default LearnMorePage;