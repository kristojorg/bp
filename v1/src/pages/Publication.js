import React from 'react';
import styled from 'styled-components';
import {Wrapper} from './gallery'
import Measure from 'react-measure';
import StretchedImage from '../components/StretchedImage'


const Publication = ({ publications, params }) => {
  if (!publications) return null;
  const title = params.publication;
  const publication = publications.find(
    publication => publication.fields.title === title
  );
  const scans = publication.fields.scans;
  return (
    <Measure includeMargin={false} whitelist={['height']}>
      {dimensions => (
        <Wrapper>
            {scans.map(scan => (
                <StretchedImage
                  key={scan.sys.id}
                  src={scan.fields.file.url}
                  details={scan.fields.file.details.image}
                  windowDimensions={dimensions}
                />
            ))}
        </Wrapper>
      )}
    </Measure>
  );
};
export default Publication;
