import "./index.css"
import stampLittleEgret from "./img/stamp.svg"

export function Stamp () {
    return (
        <div className="stamp">
            <div className="stamp-icon">
                <img src={stampLittleEgret}/>
            </div>
        </div>
    )
}