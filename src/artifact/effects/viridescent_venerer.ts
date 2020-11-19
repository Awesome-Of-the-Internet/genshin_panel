import { Attribute } from "../../attribute/attribute"
import { Param } from "../param";

function apply2(attribute: Attribute, params: Param) {
    attribute.windBonus += 0.15;
}

function apply4(attribute: Attribute, params: Param) {
    // if (params.countViridescentVenerer) {
    //     attribute.bonus += 0.6;
    //     if (typeof attribute.tag !== "undefined") {
    //         attribute.tag.push("计入翠绿之影4件套");
    //     }
    // }
}

export default [null, apply2, null, apply4, null];