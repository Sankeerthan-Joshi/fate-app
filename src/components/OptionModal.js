import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props)=>(
    <Modal
    isOpen = {!!props.selectedOption}
    onRequestClose = {props.handleOkay}
    contentLabel = "SelectedOption"
    className="Modal"
    >
        <h3 className="modal-header">The Fate tells you to do: </h3>
        {props.selectedOption && <p className="modal-option">{props.selectedOption}</p>}
        <button onClick={props.handleOkay} className= "modal-button">Okay</button>
    </Modal>
);

export default OptionModal;