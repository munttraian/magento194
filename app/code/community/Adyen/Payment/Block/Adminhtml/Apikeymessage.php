<?php

class Adyen_Payment_Block_Adminhtml_Apikeymessage extends Mage_Adminhtml_Block_Template
{
    protected $_authSession;
    protected $_adyenHelper;
    protected $_inbox;

    public function _construct()
    {
        $this->_authSession = Mage::getSingleton('admin/session');
        $this->_adyenHelper = Mage::helper('adyen');
        $this->_inbox = Mage::getModel('adminnotification/inbox');
    }


    public function getMessage()
    {
        //check if it is after first login
        if ($this->_authSession->isFirstPageAfterLogin() && empty($this->_adyenHelper->getConfigDataApiKey())) {
            try {
                $title = "Adyen extension requires the API KEY!";
                if ($this->_adyenHelper->getConfigDataWsUserName()) {
                    $description = "Please provide API-KEY for the webservice user " . $this->_adyenHelper->getConfigDataWsUserName() . "  for default/store " . Mage::app()->getStore()->getName();
                } else {
                    $description = "Please provide API-KEY for default/store " . Mage::app()->getStore()->getName();
                }

                $versionData[] = array(
                    'severity' => Mage_AdminNotification_Model_Inbox::SEVERITY_CRITICAL,
                    'date_added' => date("Y-m-d H:i:s"),
                    'title' => $title,
                    'description' => $description,
                    'url' => "https://docs.adyen.com/developers/plug-ins-and-partners/magento-1/set-up-the-plugin-in-magento-m1#step3configuretheplugininmagento",
                );

                /*
                 * The parse function checks if the $versionData message exists in the inbox,
                 * otherwise it will create it and add it to the inbox.
                 */
                $this->_inbox->parse(array_reverse($versionData));

                return $description;
            } catch (Exception $e) {
                return;
            }
        }
    }
}
