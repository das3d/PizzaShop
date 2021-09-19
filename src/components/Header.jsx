import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({}) => {
    return (
        <header class="header">
            <img src="/img/salad.png" alt=""/>
            <img class="psheno" src="/img/psheno.png" alt=""/>
            <div class="container">
                <div class="header__up">
                    <div class="header__number">
                        <img src="/img/onion.png" alt=""/>
                        <div class="header__number__icon">

                            <img src='/img/telephone.svg'/>
                        </div>
                        <div class="header__number__phone">
                            +38 (093) <span>000-00-00</span>
                        </div>
                    </div>
                    <div class="header__logo">

                        <img src="/img/Pizza.Mizza.png" alt="logo"/>
                    </div>

                    <Link to="/cart" class="header__cart">

                        <img src="/img/cart.png" alt="cart"/>
                        <span>2</span>
                    </Link>
                </div>
                <div class="header__down">
                    <div class="header__menu">
                        <ul class="menu">
                            <li class="active">Главная</li>
                            <li>О нас</li>
                            <li>Доставка</li>
                            <li>Контакты</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="header__circle">
                <div class="header__circle__icon"><img src="/img/clock.png" alt=""/></div>

                <div class="header__circle__title">
                    Доставка<br/> до <span>10 минут</span>
                </div>
                <a href="">
                    <div class="header__circle__text">ПОДРОБНЕЕ <img src="/img/arrow.png" alt=""/></div>
                </a>
            </div>
        </header>
    )
}

export default Header
