import React, { Component } from 'react'

import { BreadcrumbsItem } from '../..';

import {base_path} from './constants'

const tools_path = base_path+'/tools'

export const Events = ({children}) => (
  <div>
    <BreadcrumbsItem to={tools_path+'/tools'} href={tools_path+'/tools'}>
      Events
    </BreadcrumbsItem>
    <h2>Events tool Page</h2>
  </div>
)

export const Statistics = ({children}) => (
  <div>
    <BreadcrumbsItem to={tools_path+'/tools'} href={tools_path+'/tools'}>
      Statistics
    </BreadcrumbsItem>
    <h2>Statistics tool Page</h2>
  </div>
)

export const Settings = ({children}) => (
  <div>
    <BreadcrumbsItem to={tools_path+'/tools'} href={tools_path+'/tools'}>
      Settings
    </BreadcrumbsItem>
    <h2>Settings tool Page</h2>
  </div>
)

