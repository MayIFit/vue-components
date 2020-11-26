import Button from "./Button";
import { Component } from "vue-property-decorator";

@Component
export default class DangerButton extends Button {
    priorityClasses =
        "text-white bg-red-600 border hover:bg-red-500 focus:border-red-700 focus:shadow-outline-red active:bg-red-600";
}
