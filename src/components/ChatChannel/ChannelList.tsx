import * as React from 'react';
import { ChatChannelWrapper } from './ChatChannel.style';

import { ChannelListItem, ChatChannelItem } from './ChannelListItem';

// let items: any = [];
// let newDate = () => new Date().setTime(new Date().getTime() + Math.floor(Math.random() * 59));
// const constructItem = () => ({
//     name: 'user',
//     lastMessage: 'test',
//     lastMessageAt: newDate(),
//     unreadCount: Math.floor(Math.random() * 10),
// });

// const constructData = () => Array(10).map((i) => {
//     console.log(i);
//     i = constructItem();
//     return i;
// });

// items = constructData();
// console.log(items);

// mocks
const data: ChatChannelItem[] = [
    {
        name: 'user',
        lastMessage: 'test',
        lastMessageAt: '2020-07-09T11:35:06.423Z',
        unreadCount: 3,
    },
    {
        name: 'user',
        lastMessage: 'test',
        lastMessageAt: '2020-07-09T11:35:07.423Z',
        unreadCount: 2,
    },
    {
        name: 'user',
        lastMessage: 'test',
        lastMessageAt: '2020-07-09T11:35:09.423Z',
        unreadCount: 1,
    },
    {
        name: 'user',
        lastMessage: 'test',
        lastMessageAt: '2020-07-09T11:35:18.423Z',
        unreadCount: 0,
    },
    {
        name: 'user',
        lastMessage: 'test',
        lastMessageAt: '2020-07-09T11:35:19.423Z',
        unreadCount: 0,
    },
    {
        name: 'user',
        lastMessage: 'test',
        lastMessageAt: '2020-07-09T11:35:29.423Z',
        unreadCount: 3,
    },
    {
        name: 'user',
        lastMessage: 'test',
        lastMessageAt: '2020-07-09T11:35:31.423Z',
        unreadCount: 3,
    },
    {
        name: 'user',
        lastMessage: 'test',
        lastMessageAt: '2020-07-09T11:35:13.423Z',
        unreadCount: 0,
    },
];

export const ChannelList = ({
    onLoadMoreChannels,
}: any) => {
    const [items, setItems] = React.useState(data);
    const [fetching, setFetching] = React.useState(false);

    const moreData = (count: number): ChatChannelItem[] => Array(count).fill({
        name: 'user',
        lastMessage: 'test',
        lastMessageAt: new Date().toISOString(),
        unreadCount: 3,
    });

    React.useEffect(() => {
        window.addEventListener('scroll', handleFetchMore);
        return () => window.removeEventListener('scroll', handleFetchMore);
    }, []);

    React.useEffect(() => {
        if (!fetching) return;
        onLoadMoreChannels().then((channelsCount: number) => setItems([...items, ...moreData(channelsCount)]))
    }, [fetching]);

    const handleFetchMore = () => {
        if (
            window.document.documentElement.scrollTop !== document.documentElement.offsetHeight
        ) {
            console.log('works');
        };

            setFetching(true);
    };

    return (
        <ChatChannelWrapper>
            {items.map((item: ChatChannelItem) => (
                <ChannelListItem
                    key={item.lastMessageAt}
                    name={item.name}
                    lastMessage={item.lastMessage}
                    lastMessageAt={item.lastMessageAt}
                    unreadCount={item.unreadCount}
                />
            ))}
        </ChatChannelWrapper>
    );
};
