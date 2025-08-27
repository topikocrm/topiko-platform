<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get POST data
$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['mobile']) || !isset($input['otp']) || !isset($input['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required parameters']);
    exit();
}

$mobile = $input['mobile'];
$otp = $input['otp'];
$message = $input['message'];

// Validate mobile number (10 digits)
if (!preg_match('/^[0-9]{10}$/', $mobile)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid mobile number']);
    exit();
}

// Send OTP function
function sendOtp($message, $mobile_no) {
    $apikey = '3NwCuamS0SnyYDUw';
    $senderid = 'TOPIKO';

    $postData = array(
        "apikey" => $apikey,
        "senderid" => $senderid,
        "number" => $mobile_no,
        "message" => $message,
        "format" => "json"
    );

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'http://msg.magictext.in/V2/http-api-post.php');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Set to false for testing
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    
    $result = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    return array(
        'success' => ($httpCode === 200),
        'response' => $result,
        'http_code' => $httpCode
    );
}

// Call the send OTP function
try {
    $result = sendOtp($message, $mobile);
    
    if ($result['success']) {
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'OTP sent successfully',
            'otp' => $otp // Return OTP for verification
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'error' => 'Failed to send OTP',
            'details' => $result['response']
        ]);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Server error',
        'message' => $e->getMessage()
    ]);
}
?>