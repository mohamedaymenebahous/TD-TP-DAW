<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="part" id="part">
        <?php
        function fact($number)
        {
            if($number == 0 || $number == 1) 
            {
                return 1;
            }
            else
            {
                return $number * fact($number - 1);
            }
        }
        echo "<p>" .fact(5). "</p>";
        ?>
    </div>
</body>
</html>