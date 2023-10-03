import type { Component } from "solid-js";
import { For } from "solid-js";
import { ReelGrid } from "solid-layout";

export const ExampleNavBar: Component = function () {
    return (

        <div style={{ border: "1px solid black"}}>
            <ReelGrid >
                <For each={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}>
                    {(item) => (
                        <div
                            style={{

                                "text-align": "center",
                                border: "1px solid black",


                            }}
                        >
                            {" "}
                            Nav bar item {item}{" "}
                        </div>
                    )}
                </For>
            </ReelGrid>
        </div>


    );
};
