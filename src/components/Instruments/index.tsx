

import CardInstruments from '../CardInstrument';
import { useTypeDispatch } from '../../hooks/useTypeDispatch';
import { openModal } from '../../store/Slice/ModalSlice';

import instruments from '../../json/instrument.json'

const Instruments = () => {

    const dispatch = useTypeDispatch();
    

    return (
        <section className="instruments">
            <div className="section__title  __anim-item">
                <h2 className="anim-show">Используемые технологии</h2>
            </div>
            <div className="instruments__content __anim-item">
                <CardInstruments item={instruments[0]} />
                <CardInstruments item={instruments[1]}/>
                <CardInstruments item={instruments[3]}/>
            </div>
            <div className="instruments__link">
                <button 
                    className="link"
                    onClick={() => dispatch(openModal())} 
                >
                    <span>Больше инструментов</span>
                </button>
            </div>
        </section>
    );
};

export default Instruments; 