import { Bookmark } from "lucide-react";

const Card = (props) => {
    return (
        <div className="card">
            <div className="top">
                <img src={props.img} alt="amzn-logo" height={60} width={60} />
                <button>Save <Bookmark size={13} />
                </button>

            </div>
            <div className="center">
                <h3>
                    {props.company} <span>{props.days} days ago</span>
                </h3>
                <h2>
                    {props.role}
                </h2>
                <div>
                    <h4>{props.type}</h4>
                    <h4>{props.level} Level</h4>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>
                        {props.pay}$/hr
                    </h3>
                    <p>
                        {props.loaction}
                    </p>
                </div>
                <button>
                    Apply Now
                </button>
            </div>
        </div>
    )
}

export default Card