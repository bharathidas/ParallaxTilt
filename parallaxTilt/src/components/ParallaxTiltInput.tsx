import { CSSProperties, ReactElement, createElement } from "react";
import Tilt from "react-parallax-tilt";
import { ListValue, ListWidgetValue } from "mendix";
import classNames from "classnames";

export type GlarePosition = "top" | "right" | "bottom" | "left" | "all";

export interface ParallaxTiltInputProps {
    className?: string;
    style?: CSSProperties;
    data: ListValue;
    contentTemplate: ListWidgetValue;
    orientation: "horizontal" | "vertical";
    tiltEnable: boolean;
    tiltMaxAngleX: number;
    tiltMaxAngleY: number;
    glareEnable: boolean;
    glareMaxOpacity: number;
    glareColor: string;
    glarePosition: GlarePosition;
    scale: number;
    perspective: number;
    transitionEasing: string;
    transitionSpeed: number;
    flipVertically: boolean;
    flipHorizontally: boolean;
    onMove?: () => void;
    onEnter?: () => void;
    onLeave?: () => void;
}

export function ParallaxTiltInput(props: ParallaxTiltInputProps): ReactElement {
    const { data, contentTemplate, orientation } = props;

    return (
        <div
            className={classNames("widget-parallaxtilt", `widget-parallaxtilt-${orientation}`, props.className)}
            style={props.style}
        >
            {data.items?.map(item => (
                <Tilt
                    key={item.id}
                    className="widget-parallaxtilt-card"
                    tiltEnable={props.tiltEnable}
                    tiltMaxAngleX={props.tiltMaxAngleX}
                    tiltMaxAngleY={props.tiltMaxAngleY}
                    glareEnable={props.glareEnable}
                    glareMaxOpacity={props.glareMaxOpacity}
                    glareColor={props.glareColor}
                    glarePosition={props.glarePosition}
                    glareBorderRadius="inherit"
                    scale={props.scale}
                    perspective={props.perspective}
                    transitionEasing={props.transitionEasing}
                    transitionSpeed={props.transitionSpeed}
                    flipHorizontally={props.flipHorizontally}
                    flipVertically={props.flipVertically}
                    onMove={props.onMove}
                    onEnter={props.onEnter}
                    onLeave={props.onLeave}
                >
                    <div className="widget-parallaxtilt-content">{contentTemplate.get(item)}</div>
                </Tilt>
            ))}
        </div>
    );
}
