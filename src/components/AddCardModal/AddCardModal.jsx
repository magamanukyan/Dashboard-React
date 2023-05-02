import { maxWidth, padding } from '@mui/system'
import { useState } from 'react'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import css from './AddCardModal.module.css'


const AddCardModal = ({visible, onClose, handleCardAdd} ) => {
    const customStyles = {
        background:'rgb(58 58 58)',
        padding:'20px',
        width:'50%',
        top: '-3rem',
        height:'fit-content',
        maxWidth:'40rem'
    }

    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('')

   

    return (  
        <Rodal customStyles = {customStyles} visible={visible} onClose = {onClose}>
            <div className={css.container}>
                <div>
                    <span className={css.label}>Card Title</span>
                    <input className={css.input} type="text"            
                           value = {title} 
                           onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div>
                    <span className={css.label}>Card Detail</span>
                    <textarea 
                        type = 'text' className={css.input} 
                        value = {detail} rows="10"
                        onChange={(e)=>setDetail(e.target.value)}/>
                </div>
                <button 
                    disabled = {title === "" && detail === ""}
                    className={css.saveButton}
                    onClick={()=>{
                        handleCardAdd(title, detail)
                        setDetail('')
                        setTitle('')
                    }}>
                    Add
                </button>
            </div>
        </Rodal>
    );
}
 
export default AddCardModal;

//https://chenjiahan.github.io/rodal/