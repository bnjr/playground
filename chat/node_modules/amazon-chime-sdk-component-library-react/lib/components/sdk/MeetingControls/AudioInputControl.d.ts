import React from 'react';
interface Props {
    /** The label that will be shown when microphone is muted , it defaults to `Mute`. */
    muteLabel?: string;
    /** The label that will be shown when microphone is unmuted, it defaults to `Unmute`. */
    unmuteLabel?: string;
    /** Title attribute for the icon when muted, it defaults to `Muted microphone` */
    mutedIconTitle?: string;
    /** Title attribute for the icon when unmuted, it defaults to `Microphone` */
    unmutedIconTitle?: string;
}
declare const AudioInputControl: React.FC<Props>;
export default AudioInputControl;
