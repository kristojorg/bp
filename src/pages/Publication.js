import React from 'react';
import styled from 'styled-components';
import StretchedImage from '../components/StretchedImage'

const Publication = ({ publications, params }) => {
  console.log('PUBLICATIONS', publications);
  if (!publications) return null;
  const title = params.publication;
  const publication = publications.find(
    publication => publication.fields.title === title
  );
  const scans = publication.fields.scans;
  return (
    <Wrapper>
      {/* <Title>{title}</Title> */}
      <Scans>
        {scans.map(scan => (
            <StretchedImage
              key={scan.sys.id}
              src={scan.fields.file.url}
              details={scan.fields.file.details.image}
            />
        ))}
      </Scans>
    </Wrapper>
  );
};
export default Publication;

const Wrapper = styled.div`
  margin-top: 90px;
  max-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0;
`
const Scans = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  overflow-x: scroll;
  flex: 1;
`
