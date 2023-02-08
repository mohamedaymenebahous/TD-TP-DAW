<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="ex3.css">
    <title>Document</title>
</head>
<body>
    <table>
        <!--
        <tr>
            <th class="first"></th>
            <th>1</th>
            <th>2</th>
        </tr>
        <tr>
            
            <td  class="first">1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        -->
        <?php
        echo "<tr>";
        for($i = 0; $i <= 10; $i++)
        {
            if($i == 0)
            {
                echo "<th></th>";
            }
            else
            {
                echo "<th>$i</th>";
            }
            
        }
        echo "</tr>";
        for($i = 1; $i <= 10; $i++)
        {
            echo "<tr>";
            for($j = 0; $j <= 10; $j++)
            {
                if($j == 0)
                {
                    echo "<td class='first'>$i</td>";
                } 
                else
                {
                    $product = $i * $j;
                    echo "<td class='multip'>$i x $j = $product</td>";
                }
            }
            echo "</tr>";
        }
        ?>
    </table>
</body>
</html>