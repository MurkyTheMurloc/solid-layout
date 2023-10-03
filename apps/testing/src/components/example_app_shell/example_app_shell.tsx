import type { Component } from "solid-js";
import { AppShell,BREAKPOINT_POSITION } from "solid-layout";
import {ExampleHaderRight} from "./example_header_right.tsx";
import {ExampleHeaderLeft} from "./example_header_left.tsx";
import {ExampleNavBar} from "./example_nav_bar.tsx";
import {ExampleHeader} from "./example_header.tsx";
import { ExampleFooterRight } from "./example_footer_right.tsx";
import {ExampleFooterMain } from "./example_main_footer.tsx";
import { MainComponent } from "./example_main_component.tsx";
import {ExampleLeftFooter} from "./example_left_footer.tsx";

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
