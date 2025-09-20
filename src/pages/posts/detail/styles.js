import styled from 'styled-components';

export const Image = styled.img`
    max-width: 200px;
    float: left;
    margin-right: 15px;
`;

export const Text = styled.div`
    font-size: 15px;
`;

export const LinkWrapper = styled.div`
    text-align: center;
    margin: 15px 0 0 0;
    display: flex;
    gap: 15px;
    justify-content: center;
    width: 100%;
    align-items: center;
`;

export const DeleteButton = styled.button`
    border: 1px solid black;
    background: #fff;
    padding: 5px 15px;
    color: #000;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background: #7e1919;
        color: #fff;
        border: 1px solid #7e1919;
    }
`;

export const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;

export const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: #000;
    border: 1px solid #fff;
    padding: 15px;  
    background: #fff;
    display: flex;
    gap: 15px;
    flex-direction: column; 
    border-radius: 15px;
`;

export const ModalText = styled.div`
    color: #000000;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    width: 100%;
`

export const ModalContent = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
`


