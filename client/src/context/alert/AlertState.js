import React, { useReducer } from 'react';
import uuidv4 from 'uuid/v4';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';
