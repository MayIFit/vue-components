import Button from "./Button";
import { Component } from "vue-property-decorator";

@Component
export default class SecondaryButton extends Button {
    priorityClasses =
        "bg-white border border-gray-300 text-gray-700 hover:text-gray-500 focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50";
}
