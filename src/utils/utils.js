import { Window } from "@tauri-apps/api/window";
export const rootElement = document.getElementById("root");

export const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(() => {
            console.log("Entered Fullscreen");
        }).catch((err) => {
            console.error("Error while entering fullscreen: ", err);
        });
    } else {
        document.exitFullscreen().then(() => {
            console.log("Exited Fullscreen");
        }).catch((err) => {
            console.error("Error while exiting fullscreen: ", err);
        });
    }
}