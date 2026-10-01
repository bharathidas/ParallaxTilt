# Parallax Tilt – Marketplace Documentation

Widget version 1.1.0 · Mendix Studio Pro 10.24.17 · Web

## Industry

All industries (cross-industry).

## Categories

- Widgets
- User Interface / Display

## Component tagline

Cards that tilt in 3D and shine when the mouse moves over them, one per object.

(79 characters)

## About

Parallax Tilt shows each object of a data source as a card. When the mouse moves over a card, the card tilts in 3D towards the mouse, grows a little and shows a light reflection (glare). When the mouse leaves, the card returns to its place. It is built on the react-parallax-tilt library.

You design the content of a card in Studio Pro with any widgets: images, text, buttons. The tilt angles, glare, scale, perspective, speed and flip are set in the widget properties, and three events (enter, move, leave) can run an action.

Version 1.1.0 is rebuilt for Mendix Studio Pro 10.24.17. It fixes several problems of version 1.0.0: both tilt angles now work in both orientations, the glare no longer stays fully visible when a card is not hovered, glare color, glare position and easing are optional, and the widget no longer adds global styles to the app. The package is about 17 KB.

The source code is on GitHub: https://github.com/bharathidas/ParallaxTilt

## Typical usage scenario

- Product, offer or plan cards in a shop or portal.
- Image galleries and portfolios.
- Dashboard tiles and menu cards that react to the mouse.
- Profile or team cards.

## Features and limitations

**Features**

- One card per object of any data source (database, microflow, nanoflow, association).
- Any Mendix widgets as card content.
- Tilt on the x-axis and y-axis with separate maximum angles (0–90 degrees).
- Glare with color, position (top, right, bottom, left, all) and maximum opacity.
- Scale on hover, perspective, transition speed and easing.
- Flip vertically or horizontally.
- Horizontal layout (a row that wraps on small screens) or vertical layout (a column).
- On enter, on move and on leave actions.
- CSS classes for the container, the cards and the content, so a theme can restyle them.
- Offline capable.

**Limitations**

- Web only; not available for native mobile.
- The effect needs a mouse pointer; on touch screens it is limited.
- The actions do not receive the object of the card.
- Glare position and easing are text properties.

## Dependencies

- Mendix Studio Pro 10.24.17 or a later 10.24 version.
- No other modules or libraries are needed.

## Installation

1. Download `MxTechies.ParallaxTilt.mpk` from the Marketplace (or from the GitHub release Version1.1.0).
2. Copy it into the `widgets` folder of your app (App > Show App Directory in Explorer).
3. In Studio Pro, press F4 (App > Synchronize App Directory).
4. The widget appears in the Toolbox as **Parallax Tilt**.

**Upgrading from 1.0.0:** replace the file in the `widgets` folder and press F4. Studio Pro reports that the widget definition changed; right-click the error and choose **Update all widgets**. Your settings are kept. If the running app still shows the old widget, choose App > Clean Deployment Directory and run the app again. Note that both tilt angles now apply: for the old one-axis tilt, set Max tilt angle Y to 0 (horizontal) or Max tilt angle X to 0 (vertical). If your theme styled the old classes `tilt-container`, `content` or `slide`, use the new `widget-parallaxtilt` classes.

## Configuration

1. Drag **Parallax Tilt** onto a page.
2. Select the **Data source**; one card is shown for each object.
3. Drop the content of a card into the widget, for example an image, a text and a button.
4. Choose the **Orientation**: horizontal (row) or vertical (column).
5. On the **Configurations** tab, adjust the effect. The defaults (angles 20, scale 1.1, perspective 1000, white glare at the top with opacity 0.7) work well for most cards.
6. Optionally select actions on the **Events** tab.

Recommended settings:

- Subtle hover: angles 10, scale 1.05, glare max opacity 0.3.
- Strong 3D: angles 25, perspective 600, scale 1.15.
- Tilt only left and right: Max tilt angle X 0, Max tilt angle Y 20.
- Glare only: Tilt enabled No.

Styling: the outer element has the classes `widget-parallaxtilt` and `widget-parallaxtilt-horizontal` or `-vertical`; each card is `widget-parallaxtilt-card` and its content `widget-parallaxtilt-content`.

## Known bugs

- Very large angles (more than about 60 degrees) can turn a card so far that the mouse leaves it, and the card returns to rest.
- The On move action runs very often while the mouse moves; use a light nanoflow.

## FAQ

**Why does my card tilt in only one direction?**
In version 1.0.0 the orientation decided which angle was used. Upgrade to 1.1.0; both angles now apply. Set one angle to 0 to tilt in one direction only.

**Why do my cards look washed out or white when the mouse is not over them?**
That is the glare bug of version 1.0.0 (vertical orientation with glare position top, bottom or all, or horizontal orientation with left, right or all). Upgrade to 1.1.0.

**How do I make the cards the same width?**
In the horizontal orientation the cards share the width (minimum 200 pixels each). For a fixed width use `.widget-parallaxtilt-horizontal > .widget-parallaxtilt-card { flex: 0 0 260px; }` in your theme.

**Can I use a coloured glare?**
Yes. Enter any CSS color in Glare color, for example `rgb(255, 215, 0)`.

**How do I react to a click on a card?**
Put a button in the card content, or give a container in the content an On click action. The widget events (enter, move, leave) do not receive the object of the card.

**Does it work in older Mendix versions?**
Version 1.1.0 is built and tested for Studio Pro 10.24.17. Version 1.0.0 (GitHub release Version1.0.0) was made for Mendix 10.18.3.
