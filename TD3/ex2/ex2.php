<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Mon script PHP</h1>
    <?php
    $sexe = "feminin";
    $age = 29;
    if($sexe == "feminin" && ($age >= 21 && $age <= 40))
    {
        echo "Bonjour madame";
    }
    ?>
</body>
</html>