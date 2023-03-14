<?php 
    require "templates/header.php"
?>
    <main>

        <div class="contact-container">
            <div class="contact-box">
                <div class="left"></div>
                <div class="right">
                    <h2>Contactez-moi</h2>
                    <form method="POST" action="form.php" id="contact-form">
                    <input name="lastname" type="text" class="field" placeholder="Nom">
                    <input name="firstname" type="text" class="field" placeholder="Prénom">
                    <input name="email" type="text" class="field" placeholder="Email">
                    <textarea name="message" placeholder="Message" class="field"></textarea>
                    <p><input class="btn" type="submit" value="Send" /></p>
                    </form>
                </div>
            </div>
        </div>
    </main>
<?php
require "templates/footer.php" 
?>
<script src="resources/js/app.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"></script>

    </body>

</html>

