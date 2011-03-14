/**
 * Extend our own class on Zend_Soap_Client. The key here is to path soap header
 * UsernameToken. This way we automatically trigger soap server method before any other 
 * method yet have been called.
 */
class Application_Model_Service_User extends Zend_Soap_Client
{
	function __construct()
	{
		$config = Zend_Registry::get('config');
		$this->config = $config;
		
		parent::__construct($config->adws->wsdl, 
			array('compression' => SOAP_COMPRESSION_ACCEPT | SOAP_COMPRESSION_DEFLATE));
		$header = new SoapHeader('http://schemas.xmlsoap.org/ws/2002/07/utility',
			'UsernameToken', $config->adws->secret));
		$this->addSoapInputHeader($header, TRUE);
	}
}