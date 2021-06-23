import styled from "styled-components"

const Header = () => {
    return (
        <div>
            <Title>
                <img src="/images/jina_search.svg" />
                <h1>LegalQA using SentenceKoBART</h1>
            </Title>
            <Description>Implementation of legal QA system based on SentenceKoBART.<br /><br />
                         We are not responsible for any legal decisions we make based on the resources provided here.</Description>
            <Link>Github : <a href={"https://github.com/haven-jeon/LegalQA"} target="_blank">haven-jeon/LegalQA <br /></a> </Link>
            <Link>Open API : <a href={"https://ainize.ai/scy6500/Jina-LegalQA?branch=main"} target="_blank">On Ainize</a></Link>
            <Link>License : <a href={"https://github.com/haven-jeon/LegalQA/blob/main/LICENSE"} target="_blank">CC-BY-NC-SA 4.0</a></Link>
            <Line/>
        </div>
    )
}

const Title = styled.div`
    margin-bottom: 30px;
    display: flex;
`

const Description = styled.p`
    margin-bottom: 30px;
`

const Link = styled.div`
    margin-top: 5px;
`
const Line = styled.hr`
  margin: 20px 40px;
  opacity: 0.2;
`;

export default Header;
