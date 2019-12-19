import React from 'react';
import { Redirect } from 'react-router-dom';

const DefaultPage = () => (
  <Redirect to="/users" />
);

export default DefaultPage;