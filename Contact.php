<?php 
    require "templates/header.php"
?>
    <main>

        <div class="contact-container">
            <div class="contact-box">
                <div class="left"></div>
                <div class="right">
                    <h2>Contactez-moi</h2>
                    <form method="POST" action="form.php" id="-fcontactorm" onsubmit="return validateContactForm()">
                    <input name="lastname" type="text" class="field" placeholder="Nom" id="firstname">
                    <input name="firstname" type="text" class="field" placeholder="Prénom" id="lastname">
                    <input name="email" type="text" class="field" placeholder="Email" id="emaik">
                    <textarea name="content" placeholder="Message" class="field" id="content"></textarea>
                    <p><input class="btn" type="submit" value="Send" /></p>
                    <div id="statusMessage"> 
                        <?php
                        if(!empty($type) && !empty($message)){

                        
                        ?>
                            <p class='<?php echo $type; ?>'><?php echo $message; ?></p>
                        <?php
                        }
                        ?>
                        
                        
    
                </form>
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

