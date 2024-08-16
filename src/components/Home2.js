import React from 'react'
import styled from 'styled-components';
import { Button, GridRow, GridColumn, Grid, Image, Segment } from 'semantic-ui-react'

const CardContainer = styled.div`
  background-color: gray;
  border-radius: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px 0;
  width: 300px;  
  display: flex;  
  justify-content: space-between
  
`;


const CardContainer2 = styled.div`
  background-color: red;
  border-radius: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px 0;  
`;

const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 0;
`;

const CardText = styled.p`
  font-size: 16px;
  margin-bottom: 0;
`;

const Card = ({ title, text }) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    <CardText>{text}</CardText>
  </CardContainer>
);

const Home2 = () => {
  return (
    <div>

    <CardContainer>
        <div>asd</div>        
        <div>asd</div>
        <div>asd</div>
        <div>asd</div>
    </CardContainer>


 
 
  <div>
  <Accordion fluid styled>
        <AccordionTitle
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          What is a dog?
        </AccordionTitle>
        <AccordionContent active={activeIndex === 0}>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </p>
        </AccordionContent>

        <AccordionTitle
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          What kinds of dogs are there?
        </AccordionTitle>
        <AccordionContent active={activeIndex === 1}>
          <p>
            There are many breeds of dogs. Each breed varies in size and
            temperament. Owners often select a breed of dog that they find to be
            compatible with their own lifestyle and desires from a companion.
          </p>
        </AccordionContent>

        <AccordionTitle
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          How do you acquire a dog?
        </AccordionTitle>
        <AccordionContent active={activeIndex === 2}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from
            pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog
            from a private owner allows you to assess the pedigree and
            upbringing of your dog before choosing to take it home. Lastly,
            finding your dog from a shelter, helps give a good home to a dog who
            may not find one so readily.
          </p>
        </AccordionContent>
      </Accordion>
  </div>
)

    </div>
  )
}

export default Home2