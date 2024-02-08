import React from 'react';

function Mobile(): JSX.Element {
  return <div>Mobile version coming soon</div>;
}

Mobile.getLayout = (page: JSX.Element) => page;

export default Mobile;
