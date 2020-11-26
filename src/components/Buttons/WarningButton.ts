import Button from "./Button";
import { Component } from "vue-property-decorator";

@Component
export default class WarningButton extends Button {
    priorityClasses =
        "text-yellow-800 bg-yellow-400 border hover:bg-yellow-500 focus:border-yellow-700 focus:shadow-outline-yellow active:bg-yellow-600";
}
