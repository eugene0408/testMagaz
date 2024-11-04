<?php

// ### Get goods from JSON file  ###
$json = file_get_contents('../data/goods.json');
$json = json_decode($json, true);

$formData = $_POST['formData'];
$city = $_POST['city'];
$warehouse = $_POST['warehouse'];
$cart = json_decode($_POST['cart'], true);
$sum = 0;
$message = "";

// Making a massage
$message .= "<b>Здарова бізнезмен</b>" . "%0A";
$message .= "<b>Принімай заказ</b>" . "%0A%0A";
$message .= "Поганяло: " . "%0A<b>" . $formData['name'] ."%20" . $formData['surname'] . "</b>%0A";
$message .= "Мобіла: " . "%0A<b>" . $formData['phone'] . "</b>%0A%0A";
$message .= "Нова пошта: " . "%0A";
$message .= "місто:" . "%0A" . $city . "%0A";
$message .= "відділення:" . "%0A" . $warehouse . "%0A%0A";
$message .= "<b>Затарено: </b>" . "%0A";

foreach ($cart as $id => $count) {
    foreach($json as $item){
      if($item[articul] === $id){
        $message .= "Арт: " . $id ."%0A";
        $message .= $item['name'] ." x " . $count ."шт " . "%0A";
        $message .=  ($count*$item["price"]) . " грн" . "%0A%0A";
        $sum = $sum + ($count*$item["price"]);
        break;
      }
    }
}

$message .= "___________________________" . "%0A";
$message .= "<b>Ітого:          </b>" . "%0A" . $sum ." грн";

$telegramToken = "7201110524:AAEt-UaTfHWNQ2KHATPjFJG5viS0gX37ONs";
$chatId = "-1002466397351";

// ### Sending message to telegram via bot ###
$sendToTelegram = fopen("https://api.telegram.org/bot{$telegramToken}/sendMessage?chat_id={$chatId}&parse_mode=html&text={$message}","r");

// ### Checking result ###
if ($sendToTelegram) {
  // header('Location: index.html');
  echo 1;
} else {
  echo "Error";
}