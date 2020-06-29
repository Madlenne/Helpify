import React from 'react';
import css from './Background.module.scss';


const Background = () => (
        <div className={css.container}>
          
           <div className={css.title}>
               Helpify
           </div>
           <div className={css.description}>
           Witaj na portalu ogłoszeniowym dla mieszkańców akademików. Ma on na celu ułatwienie wzajemnej pomocy między studentami, w sytuacjach kiedy potrzebują czegoś od siebie wzajemnie. Załóz konto i odkryj mozliwosci serwisu!
           </div>
        </div>

    );

export default Background;