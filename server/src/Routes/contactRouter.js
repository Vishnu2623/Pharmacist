const express = require('express');
const contactModel = require('../Models/contactModel');
const contactRouter = express.Router();
contactRouter.get('/view-contact', async (req, res) => {
  try {
 
    const contact = await contactModel.find();
    if (contact.length > 0) {
      return res.status(200).json({
        success: true,
        error: false,
        data:contact,
      });
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'No data found',
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});

contactRouter.post('/contactus', async (req, res) => {
    try {
      const data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,


      };
      const savedData = await contactModel.create(data);
  
      if (savedData) {
        return res.status(200).json({
          success: true,
          error: false,
          message: 'Registration completed',
          details: savedData,
        });
      }
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'Something went wrong',
        details: error,
      });
    }
  });

  contactRouter.delete('/delete-contactus/:id', async (req, res) => {
    try {
      const contactId = req.params.id;
      const Contact = await contactModel.findByIdAndDelete(contactId);
      if (Contact) {
        return res.status(200).json({
          success: true,
          error: false,
          message: ' Contact Us deleted successfully',
          data: Contact,
        });
      } else {
        return res.status(404).json({
          success: false,
          error: true,
          message: 'Contact Us not found',
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: true,
        message: 'Something went wrong',
        details: error,
      });
    }
  });
  module.exports = contactRouter;
