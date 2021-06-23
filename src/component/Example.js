import styled from "styled-components"


const Example = (props) => {
    const {inputType, input, output} = props
    return (
        <div>
            <h2>Example</h2>
            <h3>Input</h3>
            <div>{input}</div>
            <h3>Output</h3>
            <OutputImg src={"/images/example.png"} />
        </div>
    )
}


const OutputImg = styled.img`
    width: 350px;
`;

export default Example;