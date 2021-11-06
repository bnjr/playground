interface MediaStreamMetrics {
    audioPacketsSentFractionLossPercent: number | null;
    audioPacketsReceivedFractionLossPercent: number | null;
    availableOutgoingBandwidth: number | null;
    availableIncomingBandwidth: number | null;
    videoStreamMetrics: {
        [attendeeId: string]: {
            [ssrc: string]: {
                [key: string]: number;
            };
        };
    };
}
export declare function useMediaStreamMetrics(): MediaStreamMetrics;
export default useMediaStreamMetrics;
