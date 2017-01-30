import React from 'react';
import styled from 'styled-components';
import Image from '../components/Image';

const Publication = ({ publications, params }) => {
  if (!publications) return null;
  const title = params.publication;
  const publication = publications.find(
    publication => publication.fields.title === title
  );
  return (
    <Wrapper>
      {title}
    </Wrapper>
  );
};
export default Publication;

const Wrapper = styled.div`
  margin-top: 90px;
  max-width: 935px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
`;
