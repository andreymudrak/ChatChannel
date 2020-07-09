import * as React from 'react';
import { ChannelList } from './ChatChannel';

export default function App() {
    const onLoadMoreChannels = () => Promise.resolve(3);

    return <ChannelList onLoadMoreChannels={onLoadMoreChannels} />
};