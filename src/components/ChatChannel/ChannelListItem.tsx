import * as React from 'react'

export interface ChatChannelItem {
    key?: any,
    name: string,
    lastMessage?: string,
    lastMessageAt?: Date|any,
    unreadCount: number,
};

export const ChannelListItem = ({
    name,
    lastMessage,
    lastMessageAt,
    unreadCount,
}: ChatChannelItem) => (
    <li key={lastMessageAt} className="chat-list-item">
        <div className="chat-list-item--heading">
            <span className="chat-list-item--username">
                {name}
            </span>
            <span className="chat-list-item--time">
                {lastMessageAt}
            </span>
        </div>
        <div className="chat-list-item--body">
            <div className="chat-list-item--message">
                {lastMessage}
            </div>
            {(unreadCount > 0) && <span className="chat-list-item--badge">
                {unreadCount}
            </span>}
        </div>
    </li>
);