import React from 'react';
import { Container, Message, Icon } from 'semantic-ui-react';

const Loader = ({ title, message }) => (
    <Container>
        <Message icon size="big">
            <Icon name="circle notched" loading />
            <Message.Content>
                <Message.Header>{title ? title : 'Apenas um segundo'}</Message.Header>
                {message ? message : 'Estamos buscando esse conteúdo para você.'}
            </Message.Content>
        </Message>
    </Container>

);

export default Loader;
