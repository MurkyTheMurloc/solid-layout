import type { Component } from "solid-js";
import { AppShell,BREAKPOINT_POSITION } from "solid-layout";
import {ExampleHaderRight} from "./example_header_right";
import {ExampleHeaderLeft} from "./example_header_left";
import {ExampleNavBar} from "./example_nav_bar";
import {ExampleHeader} from "./example_header";
import { ExampleFooterRight } from "./example_footer_right";
import {ExampleFooterMain } from "./example_main_footer";
import { MainComponent } from "./example_main_component";
import {ExampleLeftFooter} from "./example_left_footer";

export const ExampleAppShell: Component = function () {
    return (
        <AppShell
            rightHeaderComponent={<ExampleHaderRight/>}
            leftHeaderComponent={<ExampleHeaderLeft/>}
            mainHeaderComponent={<ExampleHeader/>}
            leftBarComponent={<ExampleNavBar/>}
            rightBarComponent={<ExampleNavBar/>}
            rightFooterComponent={<ExampleFooterRight/>}
            mainFooterComponent={<ExampleFooterMain/>}
            leftFooterComponent={<ExampleLeftFooter/>}
            leftBarBreakPoint={BREAKPOINT_POSITION.MAIN_BOTTOM}

        >
            <MainComponent />
        </AppShell>
    );
};
