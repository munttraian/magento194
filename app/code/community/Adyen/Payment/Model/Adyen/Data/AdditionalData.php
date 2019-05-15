<?php

/**
 * Adyen Payment Module
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * @category    Adyen
 * @package    Adyen_Payment
 * @copyright    Copyright (c) 2011 Adyen (http://www.adyen.com)
 * @license    http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */

/**
 * @category   Payment Gateway
 * @package    Adyen_Payment
 * @author     Adyen
 * @property   Adyen B.V
 * @copyright  Copyright (c) 2014 Adyen BV (http://www.adyen.com)
 */
class Adyen_Payment_Model_Adyen_Data_AdditionalData extends Adyen_Payment_Model_Adyen_Data_Abstract
{
    public $entry = array();

    public function addEntry($key, $value)
    {
        $kv = new Adyen_Payment_Model_Adyen_Data_AdditionalDataKVPair();
        $kv->key = new SoapVar($key, XSD_STRING, "string", "http://www.w3.org/2001/XMLSchema");
        $kv->value = new SoapVar($value, XSD_STRING, "string", "http://www.w3.org/2001/XMLSchema");
        $this->entry[] = $kv;
    }

    public function toArray()
    {
        $data = array();
        foreach ($this->entry as $kv) {
            $data[$kv->key] = $kv->value;
        }

        return $data;
    }
}
