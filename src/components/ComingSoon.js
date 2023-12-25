import "./ComingSoon.css"
import NutzLeft from "../images/nutz-left.svg"
import NutzRight from "../images/nutz-right.svg"

const ComingSoon = () => {
    return (
        <section className="comingSoon section">
            <img src={NutzLeft} alt="Peanutz logo"/>
            <h1 className="flexItem">Coming soon!</h1>
            <img src={NutzRight} alt="Peanutz logo"/>
        </section>
    )
}

export default ComingSoon