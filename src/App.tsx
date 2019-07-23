import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./styles/App.scss";
import { fontFamily, fontSize, gray2, accent1, gray5, gray1 } from "./Styles";

interface IPost {
  id: number;
  title: string;
  body: string;
}

const posts: IPost[] = [
  { id: 1, title: "One", body: "This is some sample text" },
  { id: 2, title: "Two", body: "This is some sample text" },
  { id: 3, title: "Three", body: "This is some sample text" }
];

const Container = styled.div`
  width: 400px;
  margin: 30px auto;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  color: ${gray2};
  border: 12px solid ${accent1}

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 3px solid ${accent1};
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  border-top: 1px solid ${gray5};
  :first-child {
    border-top: none;
  }
`;

interface ITextProps {
  size?: string;
}
const Text = styled.div<ITextProps>`
  font-family: ${fontFamily};
  font-size: ${props => props.size || fontSize};
  color: ${gray2};
`;

const Title = styled(Text)`
  font-size: 18px;
  color: ${gray1};
  margin-bottom: 5px;
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Container>
        <div>
          <List>
            {posts.map(({ id, title, body }) => (
              <ListItem key={id}>
                <Title>{title}</Title>
                <Text size="14px" as='p'>
                  {body}
                </Text>
              </ListItem>
            ))}
          </List>
        </div>
      </Container>
    </div>
  );
};

export default App;
