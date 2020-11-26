import Button from "./Button";
import { Component } from "vue-property-decorator";

@Component
export default class PrimaryButton extends Button {
    priorityClasses =
        "text-white bg-gray-800 hover:bg-gray-700 active:bg-gray-900 focus:border-gray-900 focus:shadow-outline-gray";
}
