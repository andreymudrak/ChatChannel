import styled from 'styled-components';

export const ChatChannelWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 600px;
    list-style: none;

    .chat-list-item {
        width: 100%;

        &--heading,
        &--body {
            display: flex;
            justify-content: space-between;
        }

        &--heading {
            margin: 16px 0;
        }

        &--username {
            font-size: 24px;
            line-height: 24px;
        }

        &--time {
            color: gray;
        }

        &--body {
            padding-bottom: 24px;
            border-bottom: 1px solid lightgray;
        }
        
        &--badge {
            background-color: #f54266;
            font-size: 12px;
            color: #fff;
            padding: 5px;
            width: 17px;
            height: 17px;
            border-radius: 50%;
            text-align: center;
        }
    }
`;