import css from '../Styles.module.css';
import { UlForCL } from 'components/UlForCL/UlForCL';
import { selectIsLoading, selectError, selectNumbsForImg, selectBackgrounds } from '../../redux/selectors';
import { useEffect } from "react";
import { fetchContacts } from "../../redux/opertions";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";
import { createNumbs } from '../../redux/backgroundImgSlice';

export const ContactList = () => {
    const realScreenWidth = window.innerWidth;
    
    const backgrounds = useSelector(selectBackgrounds);
    const numbsForImg = useSelector(selectNumbsForImg);

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const makeMassifNumbs = () => {
        const massifNumbers = [];
        const lengthImgMas = backgrounds.length - 1;
        function createMassNumbs (){
            const randomNumb = Math.floor(Math.random() * lengthImgMas);
        const lengthMasNumb = massifNumbers.length;
        if( massifNumbers[lengthMasNumb-1] !== randomNumb &&
            massifNumbers[lengthMasNumb-2] !== randomNumb &&
            massifNumbers[lengthMasNumb-3] !== randomNumb &&
            massifNumbers[lengthMasNumb-4] !== randomNumb &&
            massifNumbers[lengthMasNumb-5] !== randomNumb ){
            massifNumbers.push(randomNumb);
        } else {
            createMassNumbs();
        }
        };
        for (let i = 0; i <= lengthImgMas; i++){
            createMassNumbs();
        }
        return massifNumbers
    };

    useEffect(() => {
        if (numbsForImg.length < backgrounds.length){
        dispatch(createNumbs(makeMassifNumbs()));
        };

        // const realScreenHeight = window.innerHeight;
        // console.log('realScreenHeight: ', realScreenHeight);
        // if(error){
        //     const allDivContactList = document.querySelector('.allDivContactList');
        //     const realScreenWidth = window.innerWidth;
        //     const realScreenHeight = window.innerHeight;
        //     if(allDivContactList){
        //         if((realScreenHeight > 365 && realScreenHeight < 465) || 
        //             (realScreenHeight < 365 && realScreenWidth < 601)){
        //                 allDivContactList.style.marginBottom = '150px';
        //             } else if(realScreenHeight > 403 && realScreenHeight < 465){
        //                 allDivContactList.style.marginBottom = '250px';
        //             }
        //     }
        // } else{
        //     const root = document.querySelector('#root');
        //     const rootHeight = root.getBoundingClientRect().height;
        //     console.log('rootHeight: ', rootHeight);
        // };
    });

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    let varPadding = 20;
    if(realScreenWidth > 1000){
        varPadding = 50;
    } else if(realScreenWidth > 500 && realScreenWidth <=1000){
        varPadding = realScreenWidth/20;
    } else{
        varPadding = realScreenWidth/40;
    }

    return(
        <div className={[css.allDivContactList, 'allDivContactList'].join(' ')}>
        {error ? (
        <h2>Oopsss...Something went wrong...</h2>
        ) : (
        <div id='divForContactList' className={css.divForContactList}
        style={{
            paddingLeft: varPadding,
            paddingRight: varPadding,
        }}
        >
                {isLoading && !error ? <Loader /> : <UlForCL />}
            </div>
            )}
        </div>
    )
}