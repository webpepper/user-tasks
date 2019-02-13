import * as React from 'react';
import styled from 'styled-components';

const Icon = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  display:inline-block;
  background: #ffc700;
  color: #fff;
  border:1px solid #ffb16b;
  text-shadow: 1px 1px 1px rgba(201, 99, 6, 0.75);
  text-transform: uppercase;
  font-size: 0.65em;
  font-family: Helvetica, arial, sans-serif;
  font-weight: bold;
`;

export const GreatIcon: React.SFC<{}> = () => (
  <Icon className="align-middle">Great!</Icon>
);
