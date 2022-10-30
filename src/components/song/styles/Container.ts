import styled, { css } from 'styled-components';
import { green } from 'theme';

interface ContainerProps {
    onClick?: any;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 4px -2px #202020;
    border-radius: 0.5rem;
    background: ${green[2]};
    color: ${green[6]};
    padding: 1rem;
    position: relative;
    ${({ onClick }) => css`
        cursor: ${onClick ? 'pointer' : 'default'};
    `}

    &&:hover {
        box-shadow: 0px 0px 0px -2px #202020, 0px 0px 0px -7px #202020,
            0px 0px 10px -2px #202020;
        transition: 0.2s;
    }

    .artist {
        font-size: 14px;
        margin-bottom: 5px;
    }

    .title {
        text-transform: capitalize;
        font-weight: 900;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;
