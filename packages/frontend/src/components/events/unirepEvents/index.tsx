import { FC } from 'react';
import { Link } from "react-router-dom";
import '../eventCard.css'

type Props = {
    address: string;
    appName: string;
    epoch: string;
    user: string;
    repGiven: string
}

const UnirepEvent: FC<Props> = ({ address, appName, epoch, user, repGiven })  => {
    return (
        <div className="event-card">
            <Link to='attester/1'><p>{address}</p></Link>
            <p>{appName}</p>
            <p>{epoch}</p>
            <Link to='user/1'><p>{user}</p></Link>
            <p>{repGiven}</p>
        </div>
    )
}

export default UnirepEvent