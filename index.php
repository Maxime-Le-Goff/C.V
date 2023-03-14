<?php 
    require "templates/header.php"
?>
    <main class="main_home">
        <section class="main-first">
            <h3 class="main_title">Site C.V de Maxime LE GOFF</h3>
                <div class="main-first-flex">
                    <a href="Parcours.php" class="main-first-contact">
                        <h4>Vous souhaitez en apprendre plus sur mon parcours</h4>
                        <p>Passionné du Web et des nouvelles technologies depuis des années,
                        je me suis récemment reconvertie au développement web</p>
                    </a>
                    <a href="Contact.php" class="main-first-parcours">
                        <h4>Vous souhaitez me contacter</h4>
                    </a>
                </div>
        </section>
        <section class="main-second">
                <div class="main-second-card">
                    <h4>Présentation</h4>
                    <div class="Card_card">
                        <div class="Card_up">
                            <div class="Card_text">
                                <h2>Le Goff</h2>
                                <p>Maxime</p>
                            </div>
                            <div class="Card_add">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                            <div class="Card_down">
                                <div>
                                    <p>Age</p>
                                    <p>26</p>
                                </div>
                                <div>
                                    <p>Profession</p>
                                    <p>Développeur Web</p>
                                </div>
                            </div>
                            <div class="Card_back">
                                <p>Suivez moi sur :</p>
                                <a href="https://github.com/Maxime-Le-Goff" target="_blank"><i class="fa-brands fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/maxime-legoff/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                                <p>C.V en version PDF :</p>
                                <a href="resources/pictures/Copie de CV.pdf" target="_blank"><i class="fa-solid fa-file-pdf"></i></a>
                            </div>
                        
                    </div>
                    
                </div>
                <div class="main-second-competences">
                    <h4>Compétences</h4>
                        <div class="container">
                            <div class="content">
                                <div>
                                    <div class="bar">
                                        <span class="progress" id="100"></span>
                                        <h2 class="text sec-text">RIGOUREUX</h2>
                                        <h1>100%</h1>
                                    </div>
                                </div>
                                <div>         
                                    <div class="bar">
                                        <span class="progress" id="80"></span>
                                        <h2>ESPRIT D'EQUIPE</h2>
                                        <h1>80%</h1>
                                    </div>
                                </div> 
                                <div>
                                    <div class="bar">
                                        <span class="progress" id="75"></span>
                                        <h2>COMPETITEUR</h2>
                                        <h1>75%</h1>
                                    </div>
                        
                                </div>
                                <div>
                                    <div class="bar">
                                        <span class="progress" id="50"></span>
                                        <h2>PERFECTIONNISTE</h2>
                                        <h1>70%</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </section>
        <section class="main-third">
            <h2 class="title2">Différentes Technologies maitrisées : </h2>
            <div class="slider_container">
                <div class="slider">
                    <img class="slider_img" src="resources/pictures/symfony.png">
                
                    <img class="slider_img" src="resources/pictures/php-logo.png">
                
                    <img class="slider_img" src="resources/pictures/js.png">
               
                    <img class="slider_img" src="resources/pictures/css.png">
               
                    <img class="slider_img" src="resources/pictures/html.png">
               
                    <img class="slider_img" src="resources/pictures/sql.jpg">
                </div>
            </div>
        </section>
    </main>

    <?php 
    require "templates/footer.php"
    ?>
<script src="resources/js/app.js"></script>
<script src="resources/js/home.js"></script>


</body>
</html>


    
