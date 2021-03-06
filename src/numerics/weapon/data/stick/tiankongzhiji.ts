import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["tiankongzhiji", "天空之脊", "skywardspine"],
    baseAtkFamily: "atk48",
    secondary: {
        name: "recharge",
        family: "recharge80",
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let value = that.refine * 0.02 + 0.06;
        attribute.critical += value;
        attribute.bCritical += value;
        attribute.eCritical += value;
        attribute.qCritical += value;
        attribute.airCritical += value;
    }
} as WeaponDataType