import { ReactElement, createElement, useCallback } from "react";
// Import props type for the container component
import { ParallaxTiltContainerProps } from "../typings/ParallaxTiltProps";
import { ParallaxTiltInput } from "./components/ParallaxTiltInput";
import "./ui/ParallaxTilt.css";


export function ParallaxTilt(props: ParallaxTiltContainerProps): ReactElement {
    const { orientationKey,tiltEnableKey,tiltMaxAngleXKey,tiltMaxAngleYKey,glareEnableKey,glareMaxOpacityKey,glareColorKey,glarePositionKey,scaleKey,perspectiveKey,transitionEasingKey,transitionSpeedKey, contentTemplate, data,flipHorizontallyKey,flipVerticallyKey, onMoveAction, onEnterAction, onLeaveAction } = props;

    // Callback function to handle tilt movement
    const onMoveHandler = useCallback(() => {
        if (onMoveAction && onMoveAction.canExecute) {
            onMoveAction.execute();
        }
    }, [onMoveAction]);

   // Callback function for mouse enter event
    const onEnterHandler = useCallback(() => {
        if (onEnterAction && onEnterAction.canExecute) {
            onEnterAction.execute();
        }
    }, [onEnterAction]);

    // Callback function for mouse leave event
    const onLeaveHandler = useCallback(() => {
        if (onLeaveAction && onLeaveAction.canExecute) {
            onLeaveAction.execute();
        }
    }, [onLeaveAction]);
    
    let glareMaxOpacity=0
    if (glareMaxOpacityKey){
        glareMaxOpacity=Number(glareMaxOpacityKey)
    }

    let scale=0
    if (scaleKey){
        scale=Number(scaleKey)
    }

    let perspective=0
    if (perspectiveKey){
        perspective=Number(perspectiveKey)
    }

    let transitionSpeed=0
    if (transitionSpeedKey){
        transitionSpeed=Number(transitionSpeedKey)
    }

    return (

        // Render the ParallaxTiltInput component with transformed props
        <ParallaxTiltInput
            data={data}
            tiltEnable={tiltEnableKey}
            tiltMaxAngleX={tiltMaxAngleXKey}
            tiltMaxAngleY={tiltMaxAngleYKey}
            glareEnable={glareEnableKey}
            glareMaxOpacity={glareMaxOpacity}
            glareColor={glareColorKey}
            glarePosition={glarePositionKey}
            scale={scale}
            perspective={perspective}
            transitionEasing={transitionEasingKey}
            transitionSpeed={transitionSpeed}
            contentTemplate={contentTemplate}
            orientation={orientationKey || 'horizontal'}
            flipHorizontally={flipHorizontallyKey}
            flipVertically={flipVerticallyKey}
            onMoveAction={onMoveHandler}
            onEnterAction={onEnterHandler}
            onLeaveAction={onLeaveHandler}
        />
    );
}
