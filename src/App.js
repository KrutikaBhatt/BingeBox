import React from 'react';
import jumboData from './fixtures/jumbo'
import Jumbotron from './components/jumbotron';

function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) =>(
        <Jumbotron key={item.id} direction ={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.subTitle>{item.subTitle}</Jumbotron.subTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt}></Jumbotron.Image>
            </Jumbotron.Pane>
        </Jumbotron>
      ))}
      </Jumbotron.Container>
  );
}

export default App;
