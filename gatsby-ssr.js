import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script key="netlify-identity" src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
  ]);
};