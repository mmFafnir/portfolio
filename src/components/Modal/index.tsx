import { FC, ReactNode } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useTypeDispatch } from '../../hooks/useTypeDispatch';
import { closeModal } from '../../store/Slice/ModalSlice';


interface IState {
    children: ReactNode
}
const Modal:FC<IState> = ({children}) => {
    
    const {open} = useTypeSelector(state => state.modal);
    const dispatch = useTypeDispatch();


    return (
        <div className={`modal ${open ? 'active' : ''}`}>
            <div className="modal__wrapper">
                <div className="modal__content">
                    {children}
                </div>
                <div 
                    onClick={() => dispatch(closeModal())}
                    className="modal__icon"
                >
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default Modal;