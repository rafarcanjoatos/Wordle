<?php

require_once('connect.php');

function logMe( $msg, $level = 'info', $file = 'main.log'){
    $levelStr = '';
 
    switch ($level)
    {
        case 'info':
            $levelStr = 'INFO';
            break;
        case 'success':
            $levelStr = 'SUCCESS';
            break; 
        case 'warning':
            $levelStr = 'WARNING';
            break; 
        case 'error':
            $levelStr = 'ERROR';
            break;
    }
     
    $date = date( 'Y-m-d H:i:s' );
    $msg = sprintf( "[%s] [%s]: %s%s", $date, $levelStr, $msg, PHP_EOL );
    file_put_contents( $file, $msg, FILE_APPEND );
}

function importWord($server, $user, $password, $bd){
    //Function that connect with database and import an aleatory word
    /*$connect = mysqli_connect($server, $user, $password, $bd);
    if (!$connect) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "SELECT palavra_do_dia FROM wordle_palavra_do_dia where data_palavra_dia = CURRENT_DATE";
    $result = mysqli_query($connect, $sql);

    if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) { 
            $wordOfDay = $row["palavra_do_dia"];
        }
    } else { logMe("FALHA EM BUSCAR PALAVRA DO DIA", 'error');}
    mysqli_close($connect);*/

    $wordOfDay = "macio";
    return $wordOfDay;
}

$wordOfDay = importWord($server, $user, $password, $bd);
?>

<script>
    const wordOfDay ="<?php echo $wordOfDay;?>";
</script>