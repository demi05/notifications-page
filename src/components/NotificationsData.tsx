import { useContext, useEffect } from "react";
import angela from "../assets/images/avatar-angela-gray.webp"
import anna from "../assets/images/avatar-anna-kim.webp"
import jacob from "../assets/images/avatar-jacob-thompson.webp"
import kimberly from "../assets/images/avatar-kimberly-smith.webp"
import mark from "../assets/images/avatar-mark-webber.webp"
import nathan from "../assets/images/avatar-nathan-peterson.webp"
import rizky from "../assets/images/avatar-rizky-hasanuddin.webp"
import chess from "../assets/images/image-chess.webp"
import Content from "./Content";
import { useContextValues } from "./context/GlobalState";

const NotificationsData = () => {

    const {setNotificationObj} = useContext(useContextValues)

    const notificationObj  = [
        {
            name: "Mark Webber",
            text: "reacted to your recent post",
            post: "My first tournament today!",
            time: "1m ago",
            img: mark
        },
        {
            name: "Angela Gray ",
            text: "followed you",
            time: "5m ago",
            img: angela
        },
        {
            name: "Jacob Thompson ",
            text: "has joined your group",
            post: "Chess Club",
            time: "1 day ago",
            img: jacob
        },
        {
            name: "Rizky Hasanuddin ",
            text: "sent you a private message",
            time: "5 days ago",
            message: "  Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and  I'm already having lots of fun and improving my game.",
            img: rizky
        },
        {
            name: "Kimberly Smith",
            text: "commented on your picture",
            time: "1 week ago",
            img: kimberly,
            imgOpt: chess
        },
        {
            name: "Nathan Peterson ",
            text: "reacted to your recent post",
            post: "5 end-game strategies to increase your win rate",
            time: "2 weeks ago",
            img: nathan
        },
        {
            name: "Anna Kim",
            text: "left the group ",
            post: "Chess Club",
            time: "2 weeks ago",
            img: anna
        },   
    ]

    useEffect(() => {
        setNotificationObj(notificationObj);
    }, [setNotificationObj]); 

    return (
        <Content/>
    );
}

export default NotificationsData;