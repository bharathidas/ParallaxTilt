/**
 * This file was generated from ParallaxTilt.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue, ListValue, ListWidgetValue } from "mendix";
import { Big } from "big.js";

export type OrientationKeyEnum = "horizontal" | "vertical";

export interface ParallaxTiltContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    orientationKey: OrientationKeyEnum;
    data: ListValue;
    contentTemplate: ListWidgetValue;
    tiltEnableKey: boolean;
    tiltMaxAngleXKey: number;
    tiltMaxAngleYKey: number;
    glareEnableKey: boolean;
    glareMaxOpacityKey: Big;
    glareColorKey: string;
    glarePositionKey: string;
    scaleKey: Big;
    perspectiveKey: number;
    transitionEasingKey: string;
    transitionSpeedKey: number;
    flipVerticallyKey: boolean;
    flipHorizontallyKey: boolean;
    onMoveAction?: ActionValue;
    onEnterAction?: ActionValue;
    onLeaveAction?: ActionValue;
}

export interface ParallaxTiltPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    orientationKey: OrientationKeyEnum;
    data: {} | { caption: string } | { type: string } | null;
    contentTemplate: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    tiltEnableKey: boolean;
    tiltMaxAngleXKey: number | null;
    tiltMaxAngleYKey: number | null;
    glareEnableKey: boolean;
    glareMaxOpacityKey: number | null;
    glareColorKey: string;
    glarePositionKey: string;
    scaleKey: number | null;
    perspectiveKey: number | null;
    transitionEasingKey: string;
    transitionSpeedKey: number | null;
    flipVerticallyKey: boolean;
    flipHorizontallyKey: boolean;
    onMoveAction: {} | null;
    onEnterAction: {} | null;
    onLeaveAction: {} | null;
}
