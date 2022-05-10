import styled from "styled-components";
import "./style.css";

function Record({ description, value, day, operator }) {

    return (
        <div className="record">
            <div className="record-together">
                <p className="description-record-day">{day}</p>
                <p className="description-record">{description}</p>
            </div>
            <div className="day">
                <P color={operator}>{(value).replace(".", ",")}</P>
            </div>
        </div>
    );
}

const P = styled.p`
    color: ${props => props.color ? "#03AC00" : "#C70000"};
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
`

export default Record;