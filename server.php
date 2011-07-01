<?php
class WebService
{
	const SECRET = 'MWhNjE';
	
	public function UsernameToken($token)
	{
		$this->authorized == FALSE

		if(self::SECRET == $token)
		{
			$this->authorized = TRUE;
		}
		
		if($this->authorized == FALSE)
		{
			throw new SoapFault('Authorization', 'Not Authorized 1');
		}
	}
	function getUserInfo($user_id)
	{
		if(!$this->authorized)
		{
			throw new SoapFault('Authorization', 'Not Authorized 2');
		}
	}
}

$server = new SoapServer("WebService.wsdl", array('encoding'=>'UTF-8'));
$server->setClass("WebService");
$server->handle(); 
?>