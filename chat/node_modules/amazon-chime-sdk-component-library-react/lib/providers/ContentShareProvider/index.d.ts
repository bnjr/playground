import React from 'react';
import { ContentShareControlContextType } from '../../types';
import { ContentShareState } from './state';
declare const ContentShareProvider: React.FC;
declare const useContentShareState: () => ContentShareState;
declare const useContentShareControls: () => ContentShareControlContextType;
export { ContentShareProvider, useContentShareState, useContentShareControls };
