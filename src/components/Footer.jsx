import React from 'react'

const Footer = () => {
    return (
        <div>
             <footer class="footer">
                <div class="footer__content">
            <div class="header__number footer__number">
                <img src="/img/onion.png" alt=""/>
                <div class="header__number__icon">

                <img src='/img/telephone.svg'/>
                </div>
                <div class="header__number__phone">
                    +38 (093) <span>000-00-00</span>
                </div>
            </div>
            <div class="footer__text">
                Copyright © 2019  pizza.mizza
            </div>
            <div class="footer__social">
                <a href="">
                    <div class="footer__circle">
                        <img src="/img/inst.png" alt=""/>
                    </div>  
                </a>
                <a href="">
                    <div class="footer__circle facebook">
                        <img src="/img/fb.png" alt=""/>
                    </div>  
                </a>
            </div>
        </div>
        </footer>
        </div>
    )
}

export default Footer
