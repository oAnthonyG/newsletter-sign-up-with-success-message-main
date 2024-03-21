<?php
$email = $_POST['email'];
if (!empty($email)) {
  echo "Success!";
} else {
  echo "Valid email required!";
}
