//libs
import { useContext } from 'react';
import { UnatsiContext } from '../context/UnatsiContext';

function useUnatsiContext() {
    return useContext(UnatsiContext);
}

export default useUnatsiContext;
