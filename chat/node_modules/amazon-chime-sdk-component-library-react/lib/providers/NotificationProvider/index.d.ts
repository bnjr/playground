import React from 'react';
import { Action, ActionType, NotificationType, Severity, StateType } from './state';
declare const NotificationProvider: React.FC;
declare const useNotificationState: () => StateType;
declare const useNotificationDispatch: () => React.Dispatch<Action>;
export { NotificationProvider, useNotificationState, useNotificationDispatch, Severity, NotificationType, ActionType, Action, };
