import React from 'react'
import { connect } from 'react-redux'
import { Header, Products,Footer } from '../components'
const Main = () => {
    let products =[
        {
            name:"Мюнхенская DeLUX",
            description: 'Ветчина, Горчица, Колбаски баварские, Моцарелла, Помидоры, Сосиски белые.',
            size:36,
            price:129,
            count:1,
            isDrink: false,
            image: "/img/Pizza.png"
        },
        {
            name:"Спайси",
            description: 'Халапеньо, Бекон, Моцарелла, Пепперони, Помидоры.',
            size:36,
            price:19,
            count:1,
            isDrink: false,
            image: "/img/Pizza.png"
        },
        {
            name:"Fanta",
            description: '',
            size:0.5,
            price:19,
            count:1,
            isDrink: true,
            image: "/img/drink.png"
        },
        {
            name:"Спайси",
            description: 'Халапеньо, Бекон, Моцарелла, Пепперони, Помидоры.',
            size:36,
            price:19,
            count:1,
            isDrink: false,
            image: "/img/Pizza.png"
        },
        {
            name:"Спайси",
            description: 'Халапеньо, Бекон, Моцарелла, Пепперони, Помидоры.',
            size:36,
            price:19,
            count:1,
            isDrink: false,
            image: "/img/Pizza.png"
        },



    ]
    return (
        <div>
            <div class="wrapper">
        <Header/>        
        <Products descriptionProduct={products}/>
        
        <div class="comment">
            <div class="container">
                <div class="comment__block">
                    <div class="comment__block__text">
                        <h2 class="comment__title">
                            Отзывы Клиентов
                        </h2>
                        <div class="comment__volna">
                            <img src="/img/volna.png" alt=""/>
                        </div>
                        <h3 class="comment__name">
                            Александр Степанюк
                        </h3>
                        <div class="comment__position">
                            Дизайнер
                        </div>
                        <div class="comment__image">
                            <img src="/img/qav.png" alt=""/>
                        </div>
                        <div class="comment__text">
                            Спасибо большое за пиццу, было очень вкусно и доставлено все вовремя.
                        </div>
                    </div>
                    <div class="comment__block__image">
                        <div class="comment__slider">
                            <div class="comment__arrow Left">
                                <img src="/img/arrowLeft.png" alt=""/>
                            </div>
                            <div class="comment__arrow Right">
                                <img src="/img/arrowRight.png" alt=""/>
                            </div>
                            <div class="comment__paginator">
                                <span>2</span>/4
                            </div>
                        </div>
                        <div class="comment__photo">
                            <img src="/img/comment__photo.png" alt=""/>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        <div class="aboutUs">

            <div class="aboutUs__block">
                <div class="aboutUs__offer">
                    <h2 class="aboutUs__title">
                        О Шеф Поваре
                    </h2>
                    <div class="aboutUs__volna">
                        <img src="/img/volna.png" alt=""/>
                    </div>
                    <div class="aboutUs__text">
                        Кулинарный центр Маэстро предлагает трудоустройство для шеф поваров. Если у Вас есть хороший
                        опыт работы, знание разных кухонь, умение организовать работу кухни, то Вы можете разместить
                        резюме в разделе Работа.
                        Если Вы - работодатель и ищете хорошего шеф повара, звоните</div>
                    <div class="aboutUs__button">
                        О нас
                    </div>
                </div>
            </div>
        </div>
       <Footer/>
    </div> 
        </div>
    )
}



export default Main
