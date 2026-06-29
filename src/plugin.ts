import { startup } from "./startup";

// 1. Move your main function out of the configuration block
function myPluginMain(): void {
    console.log("TypeScript plugin loaded!");
    
    context.subscribe('interval.day', () => {
        park.cash += 10000;
    });
}

function myPluginMain(): void {
    console.log("TypeScript plugin loaded!");
    
    context.subscribe('interval.day', () => {
        park.cash += 10000;
    });
}


registerPlugin({
    name: "Name of your plugin",
    version: "1.0",
    authors: [ "Your name" ],
    type: "local",
    licence: "MIT",
    /**
     * This field determines which OpenRCT2 API version to use. It's best to always use the
     * latest release version, unless you want to use specific versions from a newer develop
     * version. Version 111 equals the v0.5.0 release.
     * @see https://github.com/OpenRCT2/OpenRCT2/blob/v0.5.0/src/openrct2/scripting/ScriptEngine.h#L45
     */
    targetApiVersion: 111, // Match target version to v0.5.0
    main: myPluginMain,    // 2. Link your function right here
});
