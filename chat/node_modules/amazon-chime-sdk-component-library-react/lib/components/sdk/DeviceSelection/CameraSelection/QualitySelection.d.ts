import React from 'react';
interface Props {
    /** Label shown for video quality selection, by default it is "Video quality" */
    label?: string;
    /** Label shown in the dropdown when no video quality has been selected yet, by default it is "Select video quality" */
    labelForUnselected?: string;
}
export declare const QualitySelection: React.FC<Props>;
export default QualitySelection;
