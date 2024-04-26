import { useDispatch, useSelector } from 'react-redux';
import { tambahCounter, kurangCounter } from '@/redux/counter/naikTurunSlice';

export default function CounterNaikTurun() {
    const {totalCounter} = useSelector((state)=>state.counter);

    const dispatch = useDispatch();

    function tombolTambah(){        // handle tombol add
        dispatch(tambahCounter())
    }

    function tombolKurang(){        // handle tombol reduce
        if(totalCounter > 0){
            dispatch(kurangCounter())
        } else {
            alert('Minimal 0')
        }
    }

    return(
        <div className='countainer'>
            <div className='row'>
                <div className='col-12'>
                    <div className='card mt-3'>
                        <div className='col-1 mt-2'>Total Mobil Saya</div>
                        <div className='col-2'>
                            <div className='input-group mb-3'>
                                <button className="btn btn-outline-secondary"
                                    onClick={()=> tombolKurang()}> - </button>
                                <span className="form-control text-center">{totalCounter}</span>
                                <button className="btn btn-outline-success"
                                    type="button" onClick={()=> tombolTambah()}> + </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}