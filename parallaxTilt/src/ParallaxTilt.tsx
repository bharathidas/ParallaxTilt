import { ReactElement, createElement, useCallback } from "react";
import { ActionValue } from "mendix";
import { Big } from "big.js";

import { ParallaxTiltContainerProps } from "../typings/ParallaxTiltProps";
import { ParallaxTiltInput, GlarePosition } from "./components/ParallaxTiltInput";
import "./ui/ParallaxTilt.css";

const GLARE_POSITIONS: GlarePosition[] = ["top", "right", "bottom", "left", "all"];
const DEFAULT_EASING = "cubic-bezier(.03,.98,.52,.99)";
// react-parallax-tilt divides by the max angles for the glare, so a 0 angle gives a NaN opacity (a glare
// that stays fully visible). A 0 angle is passed as 0.001 degrees: no visible tilt, and the glare still works.
const MIN_ANGLE = 0.001;

function toNumber(value: Big | number | undefined, fallback: number): number {
    const n = value === undefined || value === null ? NaN : Number(value);
    return isFinite(n) ? n : fallback;
}

function clamp(value: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, value));
}

function toGlarePosition(value: string | undefined): GlarePosition {
    const position = (value ?? "").trim().toLowerCase() as GlarePosition;
    return GLARE_POSITIONS.includes(position) ? position : "top";
}

function run(action: ActionValue | undefined, skipWhileExecuting = false): void {
    if (action?.canExecute && !(skipWhileExecuting && action.isExecuting)) {
        action.execute();
    }
}

export function ParallaxTilt(props: ParallaxTiltContainerProps): ReactElement {
    const { onMoveAction, onEnterAction, onLeaveAction } = props;

    // The move event fires on every mouse move, so a move action that is still running is not started again.
    const onMove = useCallback(() => run(onMoveAction, true), [onMoveAction]);
    const onEnter = useCallback(() => run(onEnterAction), [onEnterAction]);
    const onLeave = useCallback(() => run(onLeaveAction), [onLeaveAction]);

    const scale = toNumber(props.scaleKey, 1);
    const perspective = toNumber(props.perspectiveKey, 1000);
    const angleX = clamp(toNumber(props.tiltMaxAngleXKey, 20), 0, 90);
    const angleY = clamp(toNumber(props.tiltMaxAngleYKey, 20), 0, 90);

    return (
        <ParallaxTiltInput
            className={props.class}
            style={props.style}
            data={props.data}
            contentTemplate={props.contentTemplate}
            orientation={props.orientationKey === "vertical" ? "vertical" : "horizontal"}
            tiltEnable={props.tiltEnableKey}
            tiltMaxAngleX={angleX || MIN_ANGLE}
            tiltMaxAngleY={angleY || MIN_ANGLE}
            glareEnable={props.glareEnableKey}
            glareMaxOpacity={clamp(toNumber(props.glareMaxOpacityKey, 0.7), 0, 1)}
            glareColor={props.glareColorKey?.trim() || "#ffffff"}
            glarePosition={toGlarePosition(props.glarePositionKey)}
            scale={scale > 0 ? scale : 1}
            perspective={perspective > 0 ? perspective : 1000}
            transitionEasing={props.transitionEasingKey?.trim() || DEFAULT_EASING}
            transitionSpeed={Math.max(0, toNumber(props.transitionSpeedKey, 1000))}
            flipHorizontally={props.flipHorizontallyKey}
            flipVertically={props.flipVerticallyKey}
            onMove={onMoveAction ? onMove : undefined}
            onEnter={onEnterAction ? onEnter : undefined}
            onLeave={onLeaveAction ? onLeave : undefined}
        />
    );
}
