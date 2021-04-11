// es7 snippet
import Card from "@material-ui/core/Card";
// import Tooltip from "@material-ui/core/Tooltip";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from 'react';
import './Message.css';

function Message({message, username }) {
    const isUser = username === message.username;
    return (
        <div className={`messages ${isUser && "messages__user"}`}>
            <Card className={isUser ? "messages__userCard" : "messages__guestCard"}>
            <CardContent>
                <Typography color="white" variant="h5" component="h2">
                    {message.username}: {message.message}
                </Typography>
            </CardContent>
        </Card>
        </div>


    )
}

export default Message
