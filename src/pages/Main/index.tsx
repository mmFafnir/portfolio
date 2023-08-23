

import { FC, useEffect } from 'react';
import Portfolio from '../../components/Portfolio';
import Instruments from '../../components/Instruments';
import About from '../../components/About';
import { Anim } from '../../assets/scripts/anim';
import { useTypeDispatch } from '../../hooks/useTypeDispatch';
import { fetchWorks } from '../../store/Slice/WorksSlice/asyncActions';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { Status } from '../../types/Status';


const Main:FC = () => {

    const {loading, items} = useTypeSelector(state => state.works);
    const dispatch = useTypeDispatch();

    useEffect(() => {
        dispatch(fetchWorks({id: '6'}))
            
        return () => {
            window.onscroll = null
        }
    }, []);

    useEffect(() => {
        if(loading === Status.SUCCESS){
            window.onscroll = null;
            const animItems = document.querySelectorAll('.__anim-item') as NodeListOf<HTMLElement>;
            const anim = new Anim(animItems);
            window.onscroll = anim.startScroll.bind(anim);
    
        }
    }, [loading])
    return (
        <main>
            <Portfolio cards={items} />
            <Instruments />
            <About />
        </main>
    );
};

export default Main; 