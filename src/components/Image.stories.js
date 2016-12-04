import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Image from './Image';

const testURL='https://prismic-io.s3.amazonaws.com/bea-helman/72688bef7bc7e0b909b0db765e1e0a757fd63dca_r2-01544-016a.jpg';
const testURLTall='https://prismic-io.s3.amazonaws.com/bea-helman/ba6f413864b5f6aa12693d71a4c18fb04607b05d_img_4318.png';

storiesOf('Image', module)
  .add('Loaded', () => (
    <div style={{width:400,height:400}} onClick={linkTo('Image','Unloaded')}>
      <Image
        src={testURL}
        width={1818}
        height={1228}
      />
    </div>
  ))
  .add('Unloaded',() => (
    <div style={{width:400,height:400}} onClick={linkTo('Image','Loaded')} >
      <Image
        src={null}
        width={1818}
        height={1228}
      />
    </div>
  ))
  .add('Loaded.Tall', () => (
    <div style={{width:400,height:400}} onClick={linkTo('Image','Unloaded.Tall')}>
      <Image
        src={testURLTall}
        width={750}
        height={1334}
      />
    </div>
  ))
  .add('Unloaded.Tall',() => (
    <div style={{width:400,height:400}} onClick={linkTo('Image','Loaded.Tall')} >
      <Image
        src={null}
        width={750}
        height={1334}
      />
    </div>
  ))
  .add('Loaded.Cover', () => (
    <div style={{width:400,height:400}} onClick={linkTo('Image','Unloaded.Cover')}>
      <Image
        src={testURL}
        width={1818}
        height={1228}
        display="cover"
      />
    </div>
  ))
  .add('Unloaded.Cover',() => (
    <div style={{width:400,height:400}} onClick={linkTo('Image','Loaded.Cover')} >
      <Image
        src={null}
        width={1818}
        height={1228}
        display="cover"
      />
    </div>
  ))
  .add('Loaded.N', () => (
    <div style={{width:400,height:400}} onClick={linkTo('Image','Unloaded.N')}>
      <Image
        src={testURL}
      />
    </div>
  ))
  .add('Unloaded.N',() => (
    <div style={{width:400,height:400}} onClick={linkTo('Image','Loaded.N')} >
      <Image
        src={null}
      />
    </div>
  ));
