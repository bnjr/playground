import { AudioVideoFacade } from 'amazon-chime-sdk-js';
import React from 'react';
declare type AudioVideoValue = AudioVideoFacade | null;
export declare const AudioVideoContext: React.Context<AudioVideoValue>;
declare const AudioVideoProvider: React.FC;
declare const useAudioVideo: () => AudioVideoValue;
export { useAudioVideo, AudioVideoProvider };
