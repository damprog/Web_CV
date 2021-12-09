


<!doctype html>
<html lang="pl">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Damian Filipiak</title>
    <link rel="stylesheet" href="css/style.css">

    <link rel="apple-touch-icon" sizes="57x57" href="img/ico/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="img/ico/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="img/ico/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="img/ico/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="img/ico/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="img/ico/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="img/ico/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="img/ico/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="img/ico/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="img/ico/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="img/ico/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="img/ico/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="img/ico/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

</head>

<body>

    <div id="wrapper">
        <header>
            <img id="baner" src="img/zalew.jpg" alt="Zdjęcie nad zalewem">
        </header>
        <nav>
            <a href="index.html" class="menu">O mnie</a>
            <a href="projekty.html" class="menu">Projekty</a>
            <a href="inspiracje.html" class="menu">Inspiracje</a>
            <a href="#" class="menu active">Kontakt</a>
        </nav>
        <section>
            <article class="contact">
                <h1>Kontakt do mnie</h1>
                <div id="contact_way">
                    <p>Gmail - </p>
                    <p>Nr kontaktowy - </p>
                    <p>Facebook - </p>
                </div>
                <div id="contact_data">
                    <p>damfil28@gmail.com</p>
                    <p>514 *** ***</p>
                    <p><a href="https://pl-pl.facebook.com/damian.filipiak.31" target="_blank">Mój fb</a></p>
                </div>
                <div id="contact_wyslane_div">
                <?php
                    $to = 'damfil06572@gmail.com';
                    $name = $_POST['name'];
                    $email = $_POST['email'];
                    $subject = 'Nowy email od ' . $name . ' (' . $email . ')';
                    $message = $_POST['message'];
                    $headers = 'From: ' . $name . ' (' . $email . ')';
                    $headers .= "Content-Type: text/html, charset=utf-8\r\n";

                    mail($to, $subject, $message, $headers);
                    
                    echo 'Wysłano';
                    ?>
                </div>
            </article>
        </section>
        <footer>
            Pozdrawiam i zapraszam ponownie! :-)
        </footer>
    </div>
</body>

<script type="text/javascript" src="js/showFormDiv.js"></script>

</html>