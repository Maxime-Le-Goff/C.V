<?php 
    require "templates/header.php"
?>
    <main class="main-parcours">
        <div class="parcours-container">
            <div class="left-side">
                <div class="profileText">
                    <div class="imgBx">
                        <img src="resources/pictures/IMG_0015.jpg">
                    </div>
                    <h2>Maxime Le Goff<br><span>Developpeur Web</span></h2>
                </div>
                <div class="contactInfo">
                    <h3 class="title">Pour me contacter</h3>
                    <ul>
                        <li>
                            <span class="icon"><i class="fa-solid fa-phone"></i></span>
                            <span class="text">0659243722</span>
                        </li>
                        <li>
                            <span class="icon"><i class="fa-solid fa-envelope"></i></span>
                            <span class="text">mlgdev@gmail.com</span>
                        </li>
                        <li>
                            <span class="icon"><i class="fa-solid fa-globe"></i></span>
                            <span class="text">urlwebsite</span>
                        </li>
                        <li>
                            <span class="icon"><i class="fa-brands fa-linkedin"></i></span>
                            <span class="text"><a></a>linkedin.link</span>
                        </li>
                        
                    </ul>
                </div>
                <div class="contactInfo formation">
                    <h3 class="title">Formation</h3>
                    <ul>
                         <li>
                             <h5>Mai 2022</h5>
                             <h4>Titre Professionnel Développeur Web et Web
                                Mobile
                                </h4>
                             <h4>O'clock</h4>
                         </li>
                         <li>
                            <h5>2021-2022</h5>
                            <h4>Formation Développeur web et web Mobile</h4>
                            <h4>O'clock</h4>
                        </li>
                        <li>
                            <h5>2015-2017</h5>
                            <h4>École Supérieure des Sciences Commerciales d’Angers </h4>
                            <h4>E.S.S.C.A</h4>
                        </li>
                        <li>
                            <h5>2015</h5>
                            <h4>Baccalauréat</h4>
                            <h4>Institution Sainte Marie</h4>
                        </li>
                    </ul>
                </div>
                <div class="contactInfo language">
                    <h3 class="title">Langues</h3>
                    <ul>
                        <li>
                            <span class="text">Français</span>
                            <span class="percent">
                                <div style="width:100%;"></div>
                            </span>
                        </li>
                        <li>
                            <span class="text">Anglais</span>
                            <span class="percent">
                                <div style="width:90%;"></div>
                            </span>
                        </li>
                        <li>
                            <span class="text">Espagnol</span>
                            <span class="percent">
                                <div style="width:60%;"></div>
                            </span>
                        </li>
                    </ul>
                </div>

            </div>
            <div class="right-side">
                <div class="about">
                    <h2 class="title2">Profil</h2>
                    <p>Récemment reconverti dans le domaine du développement Web, je suis à la recherche d'une première expérience dans ce domaine. Ma motivation, mon envie d'apprendre et mon esprit de compétition sont pour moi, mes meilleures qualitées.</p>
                </div>
                <div class="about">
                    <h2 class="title2">Experiences</h2>
                    <div class="box">
                        <div class="year_company">
                            <h5>Février 2022- Mars 2022</h5>
                            <h5>O'Clock</h5>
                        </div>
                        <div class="text">
                            <h4>Développeur Web</h4>
                            <p>Conception et réalisation d'un site web en groupe en utilisant le
                            framework Symfony.</p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="year_company">
                            <h5>Février 20201- Aout 2021</h5>
                            <h5>Picard</h5>
                        </div>
                        <div class="text">
                            <h4>Employé Polyvalent</h4>
                            <p>Gestion de la caisse, de la vente aux clients, réception des marchandises ainsi que gestion des stocks et approvisionnement des rayons</p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="year_company">
                            <h5>2018-2021</h5>
                            <h5>Tabac</h5>
                        </div>
                        <div class="text">
                            <h4>Employé Polyvalent</h4>
                            <p>Différentes missions telles que : vente des différents produits, gestion de la caisse, gestion des stocks</p>
                        </div>
                    </div>
                    
                </div>
                <div class="about skills">
                    <h2 class="title2">Compétences</h2>
                    <div class="box">
                        <h4>HTML</h4>
                        <div class="percent">
                            <div style="width:90%;"></div>
                        </div>
                    </div>
                    <div class="box">
                        <h4>CSS</h4>
                        <div class="percent">
                            <div style="width:85%;"></div>
                        </div>
                    </div>
                    <div class="box">
                        <h4>PHP</h4>
                        <div class="percent">
                            <div style="width:95%;"></div>
                        </div>
                    </div>
                    <div class="box">
                        <h4>Javascript</h4>
                        <div class="percent">
                            <div style="width:75%;"></div>
                        </div>
                    </div>
                    <div class="box">
                        <h4>SQL</h4>
                        <div class="percent">
                            <div style="width:70%;"></div>
                        </div>
                    </div>
                </div>
                <div class="about interest">
                    <h2 class="title2">Centres d'intérêts</h2>
                    <ul>
                        <li><i class="fa-solid fa-gamepad"></i>Jeux Video</li>
                        <li><i class="fa-solid fa-chess"></i>Echecs</li>
                        <li><i class="fa-solid fa-music"></i>Musique</li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
    <?php 
    require "templates/footer.php"
?>
<script src="resources/js/app.js"></script>

</body>

</html>