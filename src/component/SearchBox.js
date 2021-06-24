import React, {useState, useCallback} from 'react';
import styled from "styled-components"

const SearchBox = ({server}) =>{
  const [title, setTitle] = useState("");
  const [statu, setStatu] = useState("");
  const [question, setQustion] = useState("");
  const [answer, setAnswer] = useState("");
  const onClick = useCallback((title) => () => {
    if (title.length === 0) {
      setStatu("질문을 입력하세요!")
    }
    else {
      async function getResult() {
        setStatu("Loading...")
        const postResponse = await fetch(server, 
          {method: "POST", 
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify({
          "top_k": 1,
          "mode": "search",
          "data": [title]})})
        if (postResponse.status === 200) {
          const response = await postResponse.json();
          console.log(response)
          const qa = response["search"]["docs"][0]["matches"][0]["tags"];
          setQustion(qa["question"]);
          setAnswer(qa["answer"]);
          setStatu("");
        }
        else {
          setStatu(postResponse.status + " error");
        }
      }
      getResult();
    }
  }, []);
   
  return(
    <div>
      <h2>Try it!</h2>
      <h3>Title</h3>
        <Input
                  value={title}
                  onChange={(e) => setTitle(e.currentTarget.value)}
          />
        <h3><SearchButton onClick={onClick(title)}>Search</SearchButton></h3>
      <h3>Output</h3>
      <h5>Question</h5>
      <Content>{question}</Content>
      <h5>Answer</h5>
      <Content>{answer}</Content>
      <div>{statu}</div>
    </div>
  );
}
 
const Content = styled.div`
    width: 600px;
`;


const Input = styled.input`
    border-radius: 5px;
    width: 300px;
    height: 30px;
`;

const SearchButton = styled.button`
  height: 30px;
`

export default SearchBox;