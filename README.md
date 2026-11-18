# Vibe Time

A production countdown timer with two windows: **Control** for the operator and **Display** for the confidence monitor.

## Features
- Countdown with hours/minutes/seconds input and 1–60 minute presets
- Live time changes while running or paused: −5, −1, +1, +5 minutes
- Toggle to the current time of day (the countdown keeps running underneath)
- Send a message to the display, with an optional flash
- Green → yellow in the last minute → red with a `+` when over time
- Keyboard: `Space` start/pause · `R` reset · `C` clock · `←`/`→` ±1 min (`Shift` for ±5) · `⌘/Ctrl+Enter` send message

## Using it
Open Vibe Time and the display window opens with it. Drag the display to the confidence monitor and click it to go fullscreen. Closing the control window quits the app.

The apps aren't code-signed, so the first launch shows a warning:
- **Mac:** right-click the app → Open → Open.
- **Windows:** SmartScreen → More info → Run anyway.

Downloads are on the [Releases](../../releases) page.

## Building
Requires Node.js 20+.

```sh
npm install
npm start            # run it
npm run dist:mac     # dist/Vibe-Time-<version>-mac.dmg (Apple Silicon + Intel)
npm run dist:win     # dist/Vibe-Time-Setup-<version>.exe and a portable .exe
```

To release a new version, bump `version` in `package.json` and the footer in `display.html`.

## Files
- `control.html`, `display.html`: the app itself; they also work opened directly in a browser
- `main.js`: the Electron wrapper that opens the windows
- `build/icon.png`: the app icon
