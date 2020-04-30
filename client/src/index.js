import React from 'react';
import { hydrate } from 'react-dom';
import RelatedHomes from './inheritedComponents/RelatedHomes';

hydrate(<RelatedHomes />, document.getElementById('RelatedHomesModule'));