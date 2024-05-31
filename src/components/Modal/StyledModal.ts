import styled from 'styled-components';

export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
    pointer-events: none;

    &.opened {
        pointer-events: auto;
        opacity: 1;
        z-index: 10;
    }

    &.isClosing {
        .content {
            transform: scale(0.2)
        }
    }
`

export const StyledOverlay = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0 0 0 / 60%);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledContent = styled.div`
    padding: 20px;
    border-radius: 12px;
    /* background-color: white; */
    transition: transform 0.3s ease;
    transform: scale(0.5);
    /* max-width: 60%; */

    &.opened {
            transform: scale(1);
    }
`
