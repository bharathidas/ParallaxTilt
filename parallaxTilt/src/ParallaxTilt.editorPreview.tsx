import { ReactElement, createElement } from "react";
import classNames from "classnames";

import { ParallaxTiltPreviewProps } from "../typings/ParallaxTiltProps";

// Design mode shows one card with a drop zone for the content template.
export function preview(props: ParallaxTiltPreviewProps): ReactElement {
    const Content = props.contentTemplate.renderer;
    const orientation = props.orientationKey === "vertical" ? "vertical" : "horizontal";

    return (
        <div
            className={classNames("widget-parallaxtilt", `widget-parallaxtilt-${orientation}`, props.class)}
            style={props.styleObject}
        >
            <div className="widget-parallaxtilt-card">
                <Content caption="Content of each card">
                    <div className="widget-parallaxtilt-content" />
                </Content>
            </div>
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/ParallaxTilt.css");
}
