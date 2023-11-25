import React from 'react';
import { Container, Segment, Header, Icon } from 'semantic-ui-react';

const Offline = () => {
  window.addEventListener('online', () => window.location.reload());

  return (
      <Container>
        <Segment placeholder>
          <Header icon>
            <Icon name="unlink" />
            <h1>Sem Conexão</h1>
            <p>
              Não há conexão com a Internet. Tentaremos recarregar automaticamente
              assim que você estiver online novamente!{' '}
              <span role="img" aria-label="sinal">
          📶
        </span>
            </p>
          </Header>
        </Segment>
      </Container>
  );
};

export default Offline;
