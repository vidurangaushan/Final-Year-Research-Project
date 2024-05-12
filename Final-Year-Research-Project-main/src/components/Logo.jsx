
import { LogoName } from "../Content/Text"
import { LogoColors } from "../Content/Colors"

function ProductLogo(){
    return(
        <div>
            <span className={`text-3xl text-amber-500`}>{LogoName.logoPart1}</span>
            <span className={`text-3xl text-${LogoColors.color2}`}>{LogoName.logoPart2}</span>
        </div>
    )
}  

export default ProductLogo;
