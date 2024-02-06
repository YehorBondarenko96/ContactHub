import css from './ChangingCWindow.module.css';
import { useDispatch } from 'react-redux';
import { patchContact } from '../../redux/opertions';
import { setScrollLeftLists } from '../../redux/contactsSlice';
import { useEffect } from 'react';

export const ChangingCWindow = ({closeChangingCWindow, name, number, id }) => {
    const dispatch = useDispatch();

    const updateStateForPatch = (evt) => {
        evt.preventDefault();
        const newName = evt.currentTarget.elements.name.value;
        const idContact = id;
        const newNumb = evt.currentTarget.elements.number.value;
        const dataForPatch = {
            id: idContact,
            name: newName,
            number: newNumb
        }
        if(name !== newName || number !== newNumb){
        dispatch(patchContact(dataForPatch));
        evt.currentTarget.reset();
        const contactsList = document.querySelector('.listContactsForGap');
        const scrollUl = contactsList.scrollLeft;
        dispatch(setScrollLeftLists(scrollUl));
        } else {
            closeChangingCWindow();
        }
        };

        useEffect(() => {
            
        }, []);

    return(
            <form className={css.formChangingCWindow} onSubmit={updateStateForPatch}>
                <label className={css.labelChangingCWindow}>
                    <span className={css.nameInputChangingCWindow}>Name</span>
                <input className={css.inputChangingCWindow} 
                defaultValue={name}
                type="text" 
                name="name" 
                required 
                />
                </label>
                <label className={css.labelChangingCWindow}>
                        <span className={css.nameInputChangingCWindow}>Number</span>
                    <input className={css.inputChangingCWindow}
                    defaultValue={number}
                    type="tel"
                    name="number" 
                    required 
                    />
                </label>
                <div className={css.buttonsChangingCWindow}>
                <button className={css.buttonChangingCWindow} type="button" onClick={closeChangingCWindow}>Changen't contact</button>
                <button className={css.buttonChangingCWindow} type="submit">Change contact</button>
                </div>
            </form>
    )
};