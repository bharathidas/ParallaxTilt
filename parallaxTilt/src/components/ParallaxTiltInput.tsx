import { ReactElement, createElement } from "react";
import Tilt from "react-parallax-tilt";
import { ListValue } from "mendix";
import "../ui/ParallaxTilt.css";

//interface for component props
export interface ParallaxTiltInputProps {
    data: ListValue;
    contentTemplate: any;
    orientation?: "horizontal" | "vertical";
    tiltEnable: boolean;
    tiltMaxAngleX: number;
    tiltMaxAngleY: number;
    glareEnable: boolean;
    glareMaxOpacity: number;
    glareColor: string;
    glarePosition: string;
    scale: number;
    perspective: number;
    transitionEasing: string;
    transitionSpeed: number;
    flipVertically:boolean;
    flipHorizontally: boolean;
    onMoveAction?: () => void;
    onEnterAction?: () => void;
    onLeaveAction?: () => void;
}

type GlarePosition = 'top' | 'right' | 'bottom' | 'left' | 'all';

export function ParallaxTiltInput(props: ParallaxTiltInputProps): ReactElement {
    const { tiltEnable, tiltMaxAngleX, tiltMaxAngleY, glareEnable, glareMaxOpacity, glareColor, glarePosition, scale, perspective, transitionEasing, transitionSpeed, data, contentTemplate, orientation = "horizontal",flipHorizontally,flipVertically, onMoveAction, onEnterAction, onLeaveAction } = props;

    // Function to convert a string to a valid GlarePosition type
    function toGlarePosition(value: string): GlarePosition {
        const validPositions: GlarePosition[] = ["top", "right", "bottom", "left", "all"];
        return validPositions.includes(value as GlarePosition) ? (value as GlarePosition) : "top";
    }

    return (
        // Container div with a dynamic class based on orientation
        <div className={`tilt-container ${orientation}`}>
            {data.items?.map((item, index) => (
                <Tilt
                    key={index}
                    tiltEnable={tiltEnable}
                    tiltMaxAngleX={orientation === "horizontal" ? tiltMaxAngleX : 0} // Tilt effect based on orientation
                    tiltMaxAngleY={orientation === "vertical" ? tiltMaxAngleY : 0}
                    glareEnable={glareEnable}
                    glareMaxOpacity={glareMaxOpacity}
                    glareColor={glareColor}
                    glarePosition={toGlarePosition(glarePosition)}
                    scale={scale}
                    perspective={perspective}
                    transitionEasing={transitionEasing}
                    transitionSpeed={transitionSpeed}
                    flipHorizontally={flipHorizontally}
                    flipVertically={flipVertically}
                    onMove={onMoveAction}
                    onLeave={onLeaveAction}
                    onEnter={onEnterAction}

                >
                    {/* Content container inside the tilt effect */}
                    <div className="content">
                        <div className="slide">
                            {contentTemplate?.get(item)}{/* Render content from the Mendix template */}
                        </div>
                    </div>
                </Tilt>
            ))}
        </div>
    );



}
