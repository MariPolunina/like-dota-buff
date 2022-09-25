import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProPlayersLoad } from "../../redux/actions";
import Style from "./AllProPlayers.module.scss";

const AllProPlayers = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allProPlayersLoad());
        console.log(proPlayersRef.current.scrollHeight);
    }, []);
    const allProPlayers = useSelector((state) => {
        return state.allProPlayersReducer.proPlayers;
    })
    const loadNumber = useSelector((state) => {
        return state.allProPlayersReducer.loadNumber;
    })
    const proPlayersRef=useRef(null);
    return (
        <div className={Style.pageContainer}>
            <h3>Pro Players</h3>
            <div ref={proPlayersRef} className={Style.proPlayersContainer}>
                {
                    allProPlayers.map((item, index) => {
                        const { account_id, avatarmedium, name, team_tag, fantasy_role, is_pro } = item;
                        if (is_pro && (index < loadNumber)) {
                            return <PropfilePlayer key={account_id} accountId={account_id} avatarMedium={avatarmedium} name={name} teamTag={team_tag} fantasyRole={fantasy_role} isPro={is_pro} />
                        }
                    })
                }
            </div>
            <div className={Style.buttonContainer}>Show more</div>
        </div>
    )
}

const PropfilePlayer = ({ accountId, avatarMedium, name, teamTag, fantasyRole, isPro }) => {
    return (
        <div className={Style.proPlayerItem}>
            <img src={avatarMedium} />
            <div>{name}</div>
            <div>{teamTag}</div>
        </div>
    )
}

export default AllProPlayers;