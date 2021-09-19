import React from 'react'

const BuyerForm = () => {
    return (
        <div class="buyer">
                <h3 class="buyer__title">
                    Доставка
                </h3>
                <div class="buyer__first">
                    <div class="buyer__viewdelv">
                        <span class="buyer__desc"><input type="radio"/> Самовывоз</span>
                        <div class="buyer__addesc">+0 руб.</div>
                    </div>
                    <span class="buyer__viewdelv">
                        <span class="buyer__desc"><input type="radio"/> Курьер</span>
                        <div class="buyer__addesc">+45 руб.</div>
                    </span>
                    <div class="buyer__viewdelv">
                        <span class="buyer__desc"><input type="radio"/> Курьер в костюме</span>
                        <div class="buyer__addesc">+65 руб.</div>
                    </div>



                </div>
                <div class="buyer__second">
                    <div class="buyer__form">
                        <input class="form__name" type="text" value="Имя"/>
                        <input class="form__name" type="phone" value="Телефон"/>
                        <textarea class="form__adress" type="text">Адрес</textarea>
                        <div class="form__desc">
                            Стоимость товаров: <span>+400 руб.</span><br/>
                            Стоимость доставки: <span>+65 руб.</span>
                        </div>
                    </div>
                    <div class="buyer__imgview">
                        <div class="buyer__slider">
                            <div class="buyer__prev"><img src="/img/arrowLeft.png" alt=""/></div>
                            <div class="buyer__next"><img src="/img/arrowRight.png" alt=""/></div>
                        </div>
                        <img src="/img/view.png" alt=""/>
                        <div class="form__desc imgview">
                            Персонаж: <span>Дровосек</span>
                        </div>

                    </div>
                    
                </div>
                <div class="buyer__volna">
                    <img src="/img/volc.png" alt=""/>
                </div>
                <div class="buyer__third">
                    <div class="buyer__sum">
                        Общая стоимость:<br/> <span>465 руб.</span>
                    </div>
                    <div class="buyer__button button">
                        КУПИТЬ
                    </div>
                </div>
            </div>
    )
}

export default BuyerForm
