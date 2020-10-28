import React from 'react';

import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';
import { 
    Container,
    Row,
    Panel,
    Column,
    Gallery,
    Section,
    Description,
} from './styles';

const Product: React.FC = () => {
  return (
      <Container>
          <Row>
              <a href="#"> Compartilhar </a>
              <a href="#"> Vender um igual </a>
          </Row>

          <Panel>
              <Column>
                <Gallery>
                    <img src={tshirtImage} alt="T-Shirt" />
                </Gallery>

                <Info />
              </Column>

              <Column>
                <ProductAction />
                <SellerInfo />

                <WarrantySection />
                <WarrantySection />
                <WarrantySection />
              </Column>
          </Panel>
      </Container>
  );
}

const WarrantySection = () =>  (
    <Section>
        <h4>Garantia</h4>

        <div>
            <span>
                <p className="title"> Compra garantida com o Lorem Ipsum </p>
                <p className="description"> Receba o produto que você está esperando ou devolvemos o seu dinheiro </p>
            </span>
            <span>
                <p className="title"> Garantia com o vendedor </p>
                <p className="description"> sem garantia </p>
            </span>
        </div>

        <a href="#"> Saiba mais sobre garantia </a>
    </Section>
)

const Info = () => (
    <Description>
        <h2> Descrição </h2>

        <p> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae minima consequuntur explicabo aut aperiam quas, accusamus hic aspernatur repudiandae, iusto unde ipsa sit architecto magni dignissimos totam. Odit, ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos atque harum accusamus esse nihil et similique! Iure saepe odio quis. Accusamus alias error natus! Reprehenderit amet aut officia dolores deserunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ex repellendus error rerum doloremque veritatis accusamus? Modi perferendis dicta culpa tempore quaerat cupiditate sequi dolore, voluptates quasi nesciunt. Illo, voluptates!
            <br />
            <br />
            Itens inclusos: <br />
            - 1x LED <br />
            - 1x LED <br />
            - 1x LED <br />
            - 1x LED <br />    
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae minima consequuntur explicabo aut aperiam quas, accusamus hic aspernatur repudiandae, iusto unde ipsa sit architecto magni dignissimos totam. Odit, ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos atque harum accusamus esse nihil et similique! Iure saepe odio quis. Accusamus alias error natus! Reprehenderit amet aut officia dolores deserunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ex repellendus error rerum doloremque veritatis accusamus? Modi perferendis dicta culpa tempore quaerat cupiditate sequi dolore, voluptates quasi nesciunt. Illo, voluptates!
        </p>
    </Description>
)

export default Product;