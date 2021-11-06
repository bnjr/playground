import { EventAttributes, EventName } from 'amazon-chime-sdk-js';
import React from 'react';
declare type MeetingEventProviderContextType = {
    name: EventName;
    attributes: EventAttributes;
} | undefined;
export declare const MeetingEventProviderContext: React.Context<MeetingEventProviderContextType>;
declare const MeetingEventProvider: React.FC;
declare const useMeetingEvent: () => MeetingEventProviderContextType;
export { useMeetingEvent, MeetingEventProvider };
